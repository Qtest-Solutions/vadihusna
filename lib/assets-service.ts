// Static assets service - Appwrite removed

export interface Asset {
  $id: string;
  url: string;
  type: "logo" | "banner";
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}

// Static assets data
let staticAssets: Asset[] = [
  {
    $id: "1",
    url: "/vadihusnaLogo.png",
    type: "logo",
    status: "active",
    createdAt: "2025-01-01",
    updatedAt: "2025-01-01",
  },
];

class AssetsService {
  async uploadLogo(file: File): Promise<Asset> {
    // Static implementation - add to in-memory array
    const newAsset: Asset = {
      $id: `logo_${Date.now()}`,
      url: URL.createObjectURL(file),
      type: "logo",
      status: "inactive",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    staticAssets.push(newAsset);
    return newAsset;
  }

  async getAllLogos(): Promise<Asset[]> {
    // Return all logos from static data
    return staticAssets.filter((a) => a.type === "logo");
  }

  async getActiveLogo(): Promise<Asset | null> {
    // Return first active logo
    return (
      staticAssets.find((a) => a.type === "logo" && a.status === "active") ||
      null
    );
  }

  async setLogoStatus(id: string, active: boolean): Promise<void> {
    // Update status in static data
    if (active) {
      // Deactivate all logos first
      staticAssets.forEach((a) => {
        if (a.type === "logo") {
          a.status = "inactive";
        }
      });
    }

    const asset = staticAssets.find((a) => a.$id === id);
    if (asset) {
      asset.status = active ? "active" : "inactive";
      asset.updatedAt = new Date().toISOString();
    }
  }

  async deleteLogo(id: string): Promise<void> {
    // Remove from static data
    const asset = staticAssets.find((a) => a.$id === id);
    staticAssets = staticAssets.filter((a) => a.$id !== id);

    // If this was the active logo, activate another
    if (asset?.status === "active" && staticAssets.length > 0) {
      const logoAssets = staticAssets.filter((a) => a.type === "logo");
      if (logoAssets.length > 0) {
        logoAssets[0].status = "active";
      }
    }
  }
}

export const assetsService = new AssetsService();
