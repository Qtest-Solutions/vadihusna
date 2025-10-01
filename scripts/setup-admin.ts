import { createAdminUser } from "@/lib/db";

async function setup() {
  try {
    // Replace these values with your desired admin credentials
    const email = "admin@vadihusna.edu.in";
    const password = "Admin@123!"; // Make sure to use a strong password
    const name = "Admin User";

    console.log("Creating admin user...");
    const success = await createAdminUser(email, password, name);

    if (success) {
      console.log("✅ Admin user created successfully!");
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("\nMake sure to save these credentials securely!");
    } else {
      console.log("❌ Failed to create admin user");
    }
  } catch (error) {
    console.error("Error during setup:", error);
  }
}

setup();
