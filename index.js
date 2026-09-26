const { MongoClient } = require("mongodb");

const password = encodeURIComponent(process.env.DB_PASSWORD);



const mongoURI = `mongodb+srv://${process.env.DB_USER}:${password}@cluster0.odzloxv.mongodb.net/?appName=Cluster0`;

const client = new MongoClient(mongoURI);

async function connectDB() {
  console.log("Trying MongoDB connection...");

  try {
    await client.connect();
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection failed");
    console.log(error.message);
  }
}

connectDB();