"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLogoUrl } from "@/hooks/use-logo-url";
import { Image, Upload, Trash2, Plus, X, Eye, FileImage } from "lucide-react";
import { assetsService, Asset } from "@/lib/assets-service";

// Update the interfaces to extend Asset and add the missing properties
interface Logo extends Asset {
  isActive: boolean;
  name: string; // Add name property
}

interface Banner extends Asset {
  isActive: boolean;
  name: string; // Add name property
}

export default function AssetsPage() {
  const [activeTab, setActiveTab] = useState<"logos" | "banners">("logos");
  const [logos, setLogos] = useState<Logo[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const tabs = [
    {
      id: "logos" as const,
      name: "Site Logos",
      icon: Image,
      description: "Manage your site logos (1 active)",
      count: logos.length,
      maxCount: 10,
      activeCount: logos.filter((l) => l.isActive).length,
      maxActive: 1,
    },
    {
      id: "banners" as const,
      name: "Banner Images",
      icon: FileImage,
      description: "Manage banner images (up to 3 active)",
      count: banners.length,
      maxCount: 10,
      activeCount: banners.filter((b) => b.isActive).length,
      maxActive: 3,
    },
  ];

  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async () => {
    try {
      setLoading(true);

      // Fetch logos and transform them to include isActive and name
      const logoData = await assetsService.getAllLogos();
      const transformedLogos: Logo[] = logoData.map((logo) => ({
        ...logo,
        isActive: logo.status === "active",
        name: `Logo ${logo.$id.slice(-6)}`, // Generate a name from ID
      }));

      setLogos(transformedLogos);
      setBanners([]); // Set banner data when available
    } catch (error) {
      console.error("Error fetching assets:", error);
      setError("Failed to load assets");
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (files: FileList) => {
    const file = files[0];
    if (!file) return;

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      setError("File size should be less than 5MB");
      return;
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file");
      return;
    }

    // Check limits
    const currentAssets = activeTab === "logos" ? logos : banners;
    if (currentAssets.length >= 10) {
      setError(`Maximum 10 ${activeTab} allowed`);
      return;
    }

    try {
      setUploading(true);
      setError(null);

      if (activeTab === "logos") {
        await assetsService.uploadLogo(file);
        await fetchAssets(); // Refresh the list
        setShowUploadModal(false);
      } else {
        setError("Banner upload not implemented yet");
        return;
      }
    } catch (error) {
      console.error(`Error uploading ${activeTab}:`, error);
      setError(`Failed to upload ${activeTab.slice(0, -1)}. Please try again.`);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setDeleting(id);
      setError(null);

      if (activeTab === "logos") {
        await assetsService.deleteLogo(id);
        await fetchAssets(); // Refresh the list
      } else {
        setError("Banner delete not implemented yet");
        return;
      }
    } catch (error) {
      console.error(`Error deleting:`, error);
      setError(`Failed to delete ${activeTab.slice(0, -1)}. Please try again.`);
    } finally {
      setDeleting(null);
    }
  };

  const handleToggleActive = async (id: string, currentlyActive: boolean) => {
    const currentTabData = tabs.find((t) => t.id === activeTab)!;
    const currentAssets = activeTab === "logos" ? logos : banners;
    const activeCount = currentAssets.filter((asset) => asset.isActive).length;

    // If trying to activate and already at max
    if (!currentlyActive && activeCount >= currentTabData.maxActive) {
      setError(
        `Maximum ${currentTabData.maxActive} active ${activeTab} allowed`
      );
      return;
    }

    try {
      if (activeTab === "logos") {
        // Use the correct method from your service
        await assetsService.setLogoStatus(id, !currentlyActive);
        await fetchAssets(); // Refresh the list
      } else {
        setError("Banner toggle not implemented yet");
        return;
      }
    } catch (error) {
      console.error(`Error toggling active state:`, error);
      setError(`Failed to update ${activeTab.slice(0, -1)}`);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleUpload(files);
    }
  };

  const currentAssets = activeTab === "logos" ? logos : banners;
  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Assets Management
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your site logos and banner images
          </p>
        </div>
        <Button
          onClick={() => setShowUploadModal(true)}
          className="gap-2"
          disabled={currentAssets.length >= 10}
        >
          <Plus className="h-4 w-4" />
          Add {activeTab === "logos" ? "Logo" : "Banner"}
        </Button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
          <X className="h-5 w-5 text-red-600" />
          <p className="text-red-700">{error}</p>
          <button
            onClick={() => setError(null)}
            className="ml-auto text-red-600 hover:text-red-700"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Horizontal Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  isActive
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  <span>{tab.name}</span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                    {tab.count}/{tab.maxCount}
                  </span>
                  {tab.activeCount > 0 && (
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                      {tab.activeCount} active
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : currentAssets.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {currentAssets.map((asset) => (
              <div
                key={asset.$id}
                className="relative bg-white rounded-xl shadow-sm ring-1 ring-gray-200 overflow-hidden group hover:shadow-md transition-shadow"
              >
                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(asset.$id)}
                  disabled={deleting === asset.$id}
                  className="absolute top-2 right-2 z-10 p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 hover:text-red-600"
                >
                  {deleting === asset.$id ? (
                    <div className="h-4 w-4 animate-spin rounded-full border border-gray-400 border-t-transparent" />
                  ) : (
                    <Trash2 className="h-4 w-4" />
                  )}
                </button>

                {/* Checkbox */}
                <div className="absolute top-2 left-2 z-10">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={asset.isActive}
                      onChange={() =>
                        handleToggleActive(asset.$id, asset.isActive)
                      }
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        asset.isActive
                          ? "bg-blue-600 border-blue-600"
                          : "bg-white/90 border-gray-300 hover:border-blue-400"
                      }`}
                    >
                      {asset.isActive && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </label>
                </div>

                {/* Image */}
                <div
                  className="aspect-video bg-gray-100 relative overflow-hidden cursor-pointer"
                  onClick={() => setPreviewImage(asset.url)}
                >
                  <img
                    src={asset.url}
                    alt={asset.name}
                    className="w-full h-full object-contain hover:scale-105 transition-transform"
                  />

                  {/* Preview Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Eye className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {asset.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {asset.isActive ? "Active" : "Inactive"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="p-4 rounded-full bg-gray-100 w-fit mx-auto mb-4">
              {currentTab.icon && (
                <currentTab.icon className="h-8 w-8 text-gray-400" />
              )}
            </div>
            <h3 className="font-medium text-gray-900 mb-2">
              No {activeTab} uploaded yet
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Upload your first {activeTab.slice(0, -1)} to get started
            </p>
            <Button onClick={() => setShowUploadModal(true)} className="gap-2">
              <Plus className="h-4 w-4" />
              Add {activeTab === "logos" ? "Logo" : "Banner"}
            </Button>
          </div>
        )}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-lg font-semibold">
                Upload {activeTab === "logos" ? "Logo" : "Banner"}
              </h3>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6">
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragOver ? "border-blue-400 bg-blue-50" : "border-gray-300"
                }`}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 rounded-full bg-blue-100">
                    <Upload className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Drop your image here, or browse
                    </h4>
                    <p className="text-sm text-gray-500">PNG, JPG up to 5MB</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {currentAssets.length}/10 {activeTab} used
                    </p>
                  </div>
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    {uploading ? "Uploading..." : "Browse Files"}
                  </Button>
                </div>
              </div>

              {/* Upload Progress */}
              {uploading && (
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Uploading...</span>
                    <span>Please wait</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full animate-pulse"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Info */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h5 className="font-medium text-blue-900 mb-2">
                  {activeTab === "logos" ? "Logo" : "Banner"} Guidelines
                </h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  {activeTab === "logos" ? (
                    <>
                      <li>• Recommended size: 200x60px or similar ratio</li>
                      <li>• Only 1 logo can be active at a time</li>
                      <li>• Transparent background preferred</li>
                      <li>• New uploads automatically become active</li>
                    </>
                  ) : (
                    <>
                      <li>• Recommended size: 1920x600px or 16:9 ratio</li>
                      <li>• Up to 3 banners can be active</li>
                      <li>• High resolution for best quality</li>
                      <li>• Feature coming soon</li>
                    </>
                  )}
                  <li>• Maximum file size: 5MB</li>
                  <li>• Supported formats: PNG, JPG, JPEG</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3 p-6 border-t bg-gray-50 rounded-b-xl">
              <Button
                variant="outline"
                onClick={() => setShowUploadModal(false)}
                className="flex-1"
                disabled={uploading}
              >
                Cancel
              </Button>
              <Button
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading || currentAssets.length >= 10}
                className="flex-1 gap-2"
              >
                <Upload className="h-4 w-4" />
                {uploading ? "Uploading..." : "Select File"}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Hidden File Input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={(e) => {
          if (e.target.files) {
            handleUpload(e.target.files);
          }
        }}
        className="hidden"
      />

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 p-2"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
