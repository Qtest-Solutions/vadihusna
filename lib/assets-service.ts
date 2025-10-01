import { Client, Databases, Storage, ID, Query } from "appwrite";

const client = new Client()
  .setEndpoint(
    process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1"
  )
  .setProject(
    process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "68c827bb0003c58720c1"
  );

const databases = new Databases(client);
const storage = new Storage(client);

const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID || "";
const DB_ID =
  process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "68c827bb0003c58720c1";
const ASSETS_COLLECTION = "assets";

export interface Asset {
  $id: string;
  url: string;
  type: "logo" | "banner";
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}

class AssetsService {
  async uploadLogo(file: File): Promise<Asset> {
    try {
      // 1. Upload file to storage bucket
      const uploadResult = await storage.createFile(
        BUCKET_ID,
        ID.unique(),
        file
      );

      // 2. Get file URL
      const fileUrl = storage.getFileView(BUCKET_ID, uploadResult.$id);

      // 3. Deactivate any currently active logo
      const activeLogos = await databases.listDocuments(
        DB_ID,
        ASSETS_COLLECTION,
        [Query.equal("type", "logo"), Query.equal("status", "active")]
      );

      // Update all active logos to inactive
      await Promise.all(
        activeLogos.documents.map((logo) =>
          databases.updateDocument(DB_ID, ASSETS_COLLECTION, logo.$id, {
            status: "inactive",
          })
        )
      );

      // 4. Create asset record
      const asset = await databases.createDocument(
        DB_ID,
        ASSETS_COLLECTION,
        ID.unique(),
        {
          url: fileUrl,
          type: "logo",
          status: "active", // New logo is automatically active
        }
      );

      return asset as unknown as Asset;
    } catch (error) {
      console.error("Error uploading logo:", error);
      throw error;
    }
  }

  async getAllLogos(): Promise<Asset[]> {
    try {
      const logos = await databases.listDocuments(DB_ID, ASSETS_COLLECTION, [
        Query.equal("type", "logo"),
      ]);
      return logos.documents as unknown as Asset[];
    } catch (error) {
      console.error("Error getting logos:", error);
      throw error;
    }
  }

  async getActiveLogo(): Promise<Asset | null> {
    try {
      const activeLogo = await databases.listDocuments(
        DB_ID,
        ASSETS_COLLECTION,
        [Query.equal("type", "logo"), Query.equal("status", "active")]
      );

      if (activeLogo.documents.length === 0) return null;
      return activeLogo.documents[0] as unknown as Asset;
    } catch (error) {
      console.error("Error getting active logo:", error);
      throw error;
    }
  }

  async setLogoStatus(id: string, active: boolean): Promise<void> {
    try {
      if (active) {
        // First deactivate any currently active logo
        const activeLogos = await databases.listDocuments(
          DB_ID,
          ASSETS_COLLECTION,
          [Query.equal("type", "logo"), Query.equal("status", "active")]
        );

        await Promise.all(
          activeLogos.documents.map((logo) =>
            databases.updateDocument(DB_ID, ASSETS_COLLECTION, logo.$id, {
              status: "inactive",
            })
          )
        );
      }

      // Update the target logo's status (removed updatedAt)
      await databases.updateDocument(DB_ID, ASSETS_COLLECTION, id, {
        status: active ? "active" : "inactive",
      });
    } catch (error) {
      console.error("Error updating logo status:", error);
      throw error;
    }
  }

  async deleteLogo(id: string): Promise<void> {
    try {
      const logo = (await databases.getDocument(
        DB_ID,
        ASSETS_COLLECTION,
        id
      )) as unknown as Asset;

      // Get file ID from URL - more robust extraction
      const urlParts = logo.url.split("/");
      const fileId = urlParts[urlParts.length - 1].split("?")[0]; // Remove query params if any

      // Delete from storage
      await storage.deleteFile(BUCKET_ID, fileId);

      // Delete from database
      await databases.deleteDocument(DB_ID, ASSETS_COLLECTION, id);

      // If this was the active logo and there are other logos,
      // activate the most recent one
      if (logo.status === "active") {
        const remainingLogos = await databases.listDocuments(
          DB_ID,
          ASSETS_COLLECTION,
          [Query.equal("type", "logo"), Query.orderDesc("$createdAt")]
        );

        if (remainingLogos.documents.length > 0) {
          // Activate the most recent logo
          const mostRecent = remainingLogos.documents[0];
          await this.setLogoStatus(mostRecent.$id, true);
        }
      }
    } catch (error) {
      console.error("Error deleting logo:", error);
      throw error;
    }
  }
}

export const assetsService = new AssetsService();
