import { Client, Databases, Storage, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");

export const appwrite = {
  client,
  databases: new Databases(client),
  storage: new Storage(client),
  account: new Account(client),
};
