// Static database module - Appwrite removed

interface AdminUser {
  email: string;
  role: "admin";
  name: string;
}

export interface Asset {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  type: "logo" | "banner";
  storage_id: string;
  url: string;
  created_by: string;
}

// Static admin user
const ADMIN_USER: AdminUser = {
  email: "admin@example.com",
  role: "admin",
  name: "Admin",
};

// Static assets
const STATIC_ASSETS: Asset[] = [
  {
    $id: "logo_1",
    $createdAt: "2025-01-01T00:00:00.000Z",
    $updatedAt: "2025-01-01T00:00:00.000Z",
    type: "logo",
    storage_id: "storage_logo_1",
    url: "/vadihusnaLogo.png",
    created_by: "admin",
  },
];

export async function createAdminUser(
  email: string,
  password: string,
  name: string
) {
  // Static implementation - always return true
  return true;
}

export async function loginUser(username: string, password: string) {
  // Static implementation - always return admin user
  return { session: { userId: "admin" }, user: ADMIN_USER };
}

export async function createAssetReference(
  type: "logo" | "banner",
  storageId: string,
  userId: string
): Promise<Asset | null> {
  // Static implementation - return null (read-only)
  return null;
}

export async function getAssetByType(
  type: "logo" | "banner"
): Promise<Asset | null> {
  // Return first asset of type from static data
  const asset = STATIC_ASSETS.find((a) => a.type === type);
  return asset || null;
}

export async function getAllAssets(): Promise<Asset[]> {
  // Return all static assets
  return STATIC_ASSETS;
}

export async function getAssetById(assetId: string): Promise<Asset | null> {
  // Return asset by ID from static data
  const asset = STATIC_ASSETS.find((a) => a.$id === assetId);
  return asset || null;
}

export async function deleteAssetReference(assetId: string): Promise<boolean> {
  // Static implementation - no-op
  return false;
}

export async function updateAssetReference(
  assetId: string,
  updates: Partial<{ type: "logo" | "banner"; storage_id: string; url: string; created_by: string }>
): Promise<Asset | null> {
  // Static implementation - no-op
  return null;
}
