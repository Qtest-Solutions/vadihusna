// Auth service - Appwrite removed, using static/mock data

// Mock admin credentials
const MOCK_ADMIN = {
  email: "admin@example.com",
  password: "admin123",
  name: "Admin",
  username: "admin",
};

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
      // Static implementation - check against mock admin
      if (username !== MOCK_ADMIN.username || password !== MOCK_ADMIN.password) {
        throw new Error("Invalid credentials");
      }

      const adminUser: AdminUser = {
        $id: "admin_1",
        username: MOCK_ADMIN.username,
        password: MOCK_ADMIN.password,
        role: "admin",
        $createdAt: "2025-01-01T00:00:00.000Z",
        $updatedAt: "2025-01-01T00:00:00.000Z",
      };

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
    // Static implementation - no-op
    return {
      success: false,
      error: "Admin creation disabled (using static data)",
    };
  }
}

export const authService = new AuthService();
