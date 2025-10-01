import { appwrite } from "./appwrite";
import { ID, Query } from "appwrite";

// Database and collection IDs - create these in Appwrite console
const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "";
const USERS_COLLECTION = "users";
const ASSETS_COLLECTION = "assets";
const STORAGE_BUCKET = "68c8feb100211df93ea6"; // Your existing bucket ID

interface AdminUser {
  email: string;
  role: "admin";
  name: string;
}

// Base Asset interface that matches your database structure
interface Asset {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  type: "logo" | "banner";
  storage_id: string;
  url: string;
  created_by: string;
}

// Type for creating assets (without Appwrite system fields)
interface CreateAssetData {
  type: "logo" | "banner";
  storage_id: string;
  url: string;
  created_by: string;
}

export async function createAdminUser(
  email: string,
  password: string,
  name: string
) {
  try {
    // First create the account
    await appwrite.account.create(ID.unique(), email, password, name);

    // Then create user document in our database
    await appwrite.databases.createDocument(
      DATABASE_ID,
      USERS_COLLECTION,
      ID.unique(),
      {
        email,
        role: "admin",
        name,
      }
    );

    return true;
  } catch (error) {
    console.error("Failed to create admin user:", error);
    return false;
  }
}

export async function loginUser(username: string, password: string) {
  try {
    // Login with Appwrite account
    const session = await appwrite.account.createSession(username, password);

    // Get user details from our database
    const users = await appwrite.databases.listDocuments(
      DATABASE_ID,
      USERS_COLLECTION,
      [Query.equal("username", username)]
    );

    if (users.documents.length === 0) {
      throw new Error("User not found in database");
    }

    const user = users.documents[0] as unknown as AdminUser;
    return { session, user };
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
}

export async function createAssetReference(
  type: "logo" | "banner",
  storageId: string,
  userId: string
): Promise<Asset | null> {
  try {
    // Get the file URL
    const url = appwrite.storage.getFileView(STORAGE_BUCKET, storageId);

    // Create asset reference in database
    const assetData: CreateAssetData = {
      type,
      storage_id: storageId,
      url,
      created_by: userId,
    };

    const asset = await appwrite.databases.createDocument(
      DATABASE_ID,
      ASSETS_COLLECTION,
      ID.unique(),
      assetData
    );

    // Type assertion with proper validation
    return asset as unknown as Asset;
  } catch (error) {
    console.error("Failed to create asset reference:", error);
    return null;
  }
}

export async function getAssetByType(
  type: "logo" | "banner"
): Promise<Asset | null> {
  try {
    const assets = await appwrite.databases.listDocuments(
      DATABASE_ID,
      ASSETS_COLLECTION,
      [
        Query.equal("type", type),
        Query.orderDesc("$createdAt"), // Get most recent first
      ]
    );

    if (assets.documents.length === 0) {
      return null;
    }

    // Safely convert to Asset type
    const document = assets.documents[0];

    // Validate that the document has the required fields
    if (
      !document.type ||
      !document.storage_id ||
      !document.url ||
      !document.created_by
    ) {
      console.error("Invalid asset document structure:", document);
      return null;
    }

    // Return with proper typing
    return {
      $id: document.$id,
      $createdAt: document.$createdAt,
      $updatedAt: document.$updatedAt,
      type: document.type as "logo" | "banner",
      storage_id: document.storage_id,
      url: document.url,
      created_by: document.created_by,
    } as Asset;
  } catch (error) {
    console.error("Failed to get asset:", error);
    return null;
  }
}

export async function getAllAssets(): Promise<Asset[]> {
  try {
    const assets = await appwrite.databases.listDocuments(
      DATABASE_ID,
      ASSETS_COLLECTION,
      [Query.orderDesc("$createdAt")]
    );

    // Safely convert all documents to Asset type
    return assets.documents
      .filter((doc) => doc.type && doc.storage_id && doc.url && doc.created_by)
      .map((document) => ({
        $id: document.$id,
        $createdAt: document.$createdAt,
        $updatedAt: document.$updatedAt,
        type: document.type as "logo" | "banner",
        storage_id: document.storage_id,
        url: document.url,
        created_by: document.created_by,
      })) as Asset[];
  } catch (error) {
    console.error("Failed to get assets:", error);
    return [];
  }
}

export async function getAssetById(assetId: string): Promise<Asset | null> {
  try {
    const document = await appwrite.databases.getDocument(
      DATABASE_ID,
      ASSETS_COLLECTION,
      assetId
    );

    // Validate document structure
    if (
      !document.type ||
      !document.storage_id ||
      !document.url ||
      !document.created_by
    ) {
      console.error("Invalid asset document structure:", document);
      return null;
    }

    return {
      $id: document.$id,
      $createdAt: document.$createdAt,
      $updatedAt: document.$updatedAt,
      type: document.type as "logo" | "banner",
      storage_id: document.storage_id,
      url: document.url,
      created_by: document.created_by,
    } as Asset;
  } catch (error) {
    console.error("Failed to get asset by ID:", error);
    return null;
  }
}

export async function deleteAssetReference(assetId: string): Promise<boolean> {
  try {
    await appwrite.databases.deleteDocument(
      DATABASE_ID,
      ASSETS_COLLECTION,
      assetId
    );
    return true;
  } catch (error) {
    console.error("Failed to delete asset reference:", error);
    return false;
  }
}

export async function updateAssetReference(
  assetId: string,
  updates: Partial<CreateAssetData>
): Promise<Asset | null> {
  try {
    const updatedDocument = await appwrite.databases.updateDocument(
      DATABASE_ID,
      ASSETS_COLLECTION,
      assetId,
      updates
    );

    // Validate and return updated asset
    if (
      !updatedDocument.type ||
      !updatedDocument.storage_id ||
      !updatedDocument.url ||
      !updatedDocument.created_by
    ) {
      console.error(
        "Invalid updated asset document structure:",
        updatedDocument
      );
      return null;
    }

    return {
      $id: updatedDocument.$id,
      $createdAt: updatedDocument.$createdAt,
      $updatedAt: updatedDocument.$updatedAt,
      type: updatedDocument.type as "logo" | "banner",
      storage_id: updatedDocument.storage_id,
      url: updatedDocument.url,
      created_by: updatedDocument.created_by,
    } as Asset;
  } catch (error) {
    console.error("Failed to update asset reference:", error);
    return null;
  }
}
