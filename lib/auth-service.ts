import { Client, Databases, ID, Query } from "appwrite";

const DB_ID =
  process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "68c827bb0003c58720c1";
const USERS_COLLECTION_ID = "admin_users";

const client = new Client()
  .setEndpoint(
    process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1"
  )
  .setProject(
    process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "68c827bb0003c58720c1"
  );

// Only use Databases, no Account
const databases = new Databases(client);

export interface AdminUser {
  $id: string;
  username: string;
  password: string;
  role: string;
  $createdAt: string;
  $updatedAt: string;
}

class AuthService {
  async login(username: string, password: string) {
    try {
      // Check credentials against your database directly
      const userQuery = await databases.listDocuments(
        DB_ID,
        USERS_COLLECTION_ID,
        [Query.equal("username", username)]
      );

      if (userQuery.documents.length === 0) {
        throw new Error("User not found");
      }

      const adminUser = userQuery.documents[0] as unknown as AdminUser;

      // Simple password comparison (in production, you should hash passwords)
      if (adminUser.password !== password) {
        throw new Error("Invalid password");
      }

      // Store user info in browser storage (simulating a session)
      if (typeof window !== "undefined") {
        sessionStorage.setItem("vh_admin_session", "logged_in");
        sessionStorage.setItem(
          "vh_admin_user",
          JSON.stringify({
            id: adminUser.$id,
            username: adminUser.username,
            role: adminUser.role,
          })
        );
      }

      return {
        success: true,
        user: adminUser,
      };
    } catch (error: any) {
      console.error("Login error:", error);
      return {
        success: false,
        error: error.message || "Failed to login",
      };
    }
  }

  async logout() {
    // Clear browser storage
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("vh_admin_session");
      sessionStorage.removeItem("vh_admin_user");
    }
  }

  async getCurrentUser(): Promise<AdminUser | null> {
    try {
      // Check browser storage
      if (typeof window !== "undefined") {
        const sessionExists = sessionStorage.getItem("vh_admin_session");
        const userStr = sessionStorage.getItem("vh_admin_user");

        if (!sessionExists || !userStr) return null;

        return JSON.parse(userStr);
      }
      return null;
    } catch (error) {
      console.error("Error getting current user:", error);
      return null;
    }
  }

  // Helper to create a new admin user
  async createAdmin(
    username: string,
    password: string,
    role: string = "admin"
  ) {
    try {
      // Create admin user record directly in your database
      const adminUser = await databases.createDocument(
        DB_ID,
        USERS_COLLECTION_ID,
        ID.unique(),
        {
          username: username,
          password: password, // In production, hash this password
          role: role,
        }
      );

      return {
        success: true,
        user: adminUser,
      };
    } catch (error: any) {
      console.error("Error creating admin:", error);
      return {
        success: false,
        error: error.message || "Failed to create admin user",
      };
    }
  }
}

export const authService = new AuthService();
