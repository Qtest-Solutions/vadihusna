// Database Schema for Vadi Husna Admin System

/*
Collection: admin_users
Purpose: Store admin user information and their roles
Attributes:
- user_id (string, unique): Appwrite user ID
- email (string, unique): User's email address
- name (string): User's full name
- role (string, enum): User's role (super_admin or content_admin)
- created_at (datetime): When the user was created
- last_login (datetime): Last login timestamp

Indexes:
- email (unique)
- user_id (unique)
*/
export const AdminUsersSchema = {
  name: "admin_users",
  permissions: {
    read: ["role:super_admin"],
    write: ["role:super_admin"],
  },
  attributes: [
    {
      key: "user_id",
      type: "string",
      required: true,
      unique: true,
    },
    {
      key: "email",
      type: "string",
      required: true,
      unique: true,
    },
    {
      key: "name",
      type: "string",
      required: true,
    },
    {
      key: "role",
      type: "string",
      required: true,
      enum: ["super_admin", "content_admin"],
      default: "content_admin",
    },
    {
      key: "created_at",
      type: "datetime",
      required: true,
    },
    {
      key: "last_login",
      type: "datetime",
      required: false,
    },
  ],
};

/*
Collection: site_assets
Purpose: Track all site assets (logos, banners, etc.) and their changes
Attributes:
- asset_id (string): ID of the file in storage
- type (string, enum): Type of asset (logo, banner, other)
- filename (string): Original filename
- url (string): Public URL of the asset
- created_by (string): User ID who created it
- created_at (datetime): Creation timestamp
- updated_by (string): User ID who last updated it
- updated_at (datetime): Last update timestamp
- is_active (boolean): Whether this asset is currently in use
- metadata (json): Additional metadata about the asset

Indexes:
- type, is_active
- asset_id
*/
export const SiteAssetsSchema = {
  name: "site_assets",
  permissions: {
    read: ["role:super_admin", "role:content_admin"],
    write: ["role:super_admin", "role:content_admin"],
  },
  attributes: [
    {
      key: "asset_id",
      type: "string",
      required: true,
      unique: true,
    },
    {
      key: "type",
      type: "string",
      required: true,
      enum: ["logo", "banner", "other"],
    },
    {
      key: "filename",
      type: "string",
      required: true,
    },
    {
      key: "url",
      type: "string",
      required: true,
    },
    {
      key: "created_by",
      type: "string",
      required: true,
    },
    {
      key: "created_at",
      type: "datetime",
      required: true,
    },
    {
      key: "updated_by",
      type: "string",
      required: true,
    },
    {
      key: "updated_at",
      type: "datetime",
      required: true,
    },
    {
      key: "is_active",
      type: "boolean",
      required: true,
      default: true,
    },
    {
      key: "metadata",
      type: "json",
      required: false,
    },
  ],
};

/*
Collection: asset_history
Purpose: Track all changes to assets for audit purposes
Attributes:
- asset_id (string): ID of the asset
- action (string, enum): Type of change (create, update, delete)
- changed_by (string): User ID who made the change
- changed_at (datetime): When the change was made
- old_value (json): Previous state (for updates/deletes)
- new_value (json): New state (for creates/updates)

Indexes:
- asset_id, changed_at
*/
export const AssetHistorySchema = {
  name: "asset_history",
  permissions: {
    read: ["role:super_admin"],
    write: ["role:super_admin", "role:content_admin"],
  },
  attributes: [
    {
      key: "asset_id",
      type: "string",
      required: true,
    },
    {
      key: "action",
      type: "string",
      required: true,
      enum: ["create", "update", "delete"],
    },
    {
      key: "changed_by",
      type: "string",
      required: true,
    },
    {
      key: "changed_at",
      type: "datetime",
      required: true,
    },
    {
      key: "old_value",
      type: "json",
      required: false,
    },
    {
      key: "new_value",
      type: "json",
      required: false,
    },
  ],
};
