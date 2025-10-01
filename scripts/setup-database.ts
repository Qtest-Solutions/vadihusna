// scripts/setup-database.ts
import { appwrite } from "@/lib/appwrite";
import { ID, Permission, Role } from "appwrite";

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;

async function setupDatabase() {
  if (!DATABASE_ID) {
    throw new Error("NEXT_PUBLIC_APPWRITE_DATABASE_ID is not set in .env");
  }

  try {
    console.log("Setting up database collections...");

    // Create users collection
    try {
      // @ts-ignore - TypeScript doesn't recognize this method but it exists
      const usersCollection = await appwrite.databases.createCollection(
        DATABASE_ID,
        ID.unique(),
        "users",
        [
          Permission.read(Role.any()),
          Permission.create(Role.any()),
          Permission.update(Role.any()),
          Permission.delete(Role.any()),
        ]
      );
      console.log("✅ Users collection created:", usersCollection.$id);

      // @ts-ignore
      await appwrite.databases.createStringAttribute(
        DATABASE_ID,
        usersCollection.$id,
        "username",
        100,
        true
      );

      // @ts-ignore
      await appwrite.databases.createStringAttribute(
        DATABASE_ID,
        usersCollection.$id,
        "password",
        255,
        true
      );

      // @ts-ignore
      await appwrite.databases.createStringAttribute(
        DATABASE_ID,
        usersCollection.$id,
        "role",
        20,
        true
      );

      console.log("✅ Users collection attributes created");
    } catch (error: any) {
      if (error.code === 409) {
        console.log("ℹ️ Users collection already exists");
      } else {
        throw error;
      }
    }

    // Create assets collection
    try {
      // @ts-ignore
      const assetsCollection = await appwrite.databases.createCollection(
        DATABASE_ID,
        ID.unique(),
        "assets",
        [
          Permission.read(Role.any()),
          Permission.create(Role.any()),
          Permission.update(Role.any()),
          Permission.delete(Role.any()),
        ]
      );
      console.log("✅ Assets collection created:", assetsCollection.$id);

      // @ts-ignore
      await appwrite.databases.createEnumAttribute(
        DATABASE_ID,
        assetsCollection.$id,
        "type",
        ["logo", "banner"],
        true
      );

      // @ts-ignore
      await appwrite.databases.createStringAttribute(
        DATABASE_ID,
        assetsCollection.$id,
        "url",
        2048,
        true
      );

      // @ts-ignore
      await appwrite.databases.createEnumAttribute(
        DATABASE_ID,
        assetsCollection.$id,
        "status",
        ["active", "inactive"],
        true,
        "inactive"
      );

      console.log("✅ Assets collection attributes created");
    } catch (error: any) {
      if (error.code === 409) {
        console.log("ℹ️ Assets collection already exists");
      } else {
        throw error;
      }
    }

    console.log("\n✅ Database setup completed successfully!");
  } catch (error) {
    console.error("Error during database setup:", error);
  }
}

setupDatabase();
