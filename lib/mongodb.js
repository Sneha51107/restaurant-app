
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let clientPromise;

if (uri) {
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }

  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = Promise.reject(
    new Error("MongoDB is not configured in demo mode.")
  );
}

export default clientPromise;
