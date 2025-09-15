// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local or platform.");
}

let cachedClient = global._mongoClient;       // Node global to cache client across lambda warm invocations
let cachedDb = global._mongoDb;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri, {
    // optional options
  });
  await client.connect();
  const db = client.db(process.env.MONGODB_DB || undefined);

  global._mongoClient = client;
  global._mongoDb = db;

  return { client, db };
}