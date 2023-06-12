import { MongoClient } from "mongodb";

// MongoDB connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "payroll_system";

// Connection instance
let db = null;

// Connect to the database
export async function connectToDatabase() {
  try {
    const client = new MongoClient(url, { useUnifiedTopology: true });
    await client.connect();
    db = client.db(dbName);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

// Get the database instance
export function getDatabase() {
  return db;
}

// export { connectToDatabase, getDatabase };
