const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

class Contact {
  static client = null; 
  static db = null;

  // Initialize connection I could not use the class constructor because of the async required for smooth
  static async connect() {
    if (!this.client) {
      try {
        this.client = await MongoClient.connect(process.env.Server_URI);
        this.db = this.client.db("cse341");
        console.log("Connected to MongoDB");
      } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
      }
    }
    return this.db;
  }

  // Get Contacts collection
  static async collection() {
     // Ensure connection exists
    await this.connect();
    return this.db.collection("Contacts");
  }

  // GET ALL Contacts
  static async findAll() {
    const collection = await this.collection();
    return collection.find().toArray();
  }

  // GET ONE Contact by ID
  static async findById(id) {
    const collection = await this.collection();
    return collection.findOne({ _id: new ObjectId(id) });
  }

  // CREATE a single Contact
  static async create(contactData) {
    const collection = await this.collection();
    const result = await collection.insertOne(contactData);
    return result.insertedId;
  }

  // CREATE Multiple contacts
  static async createMany(contactsArray) {
    const collection = await this.collection();
    const result = await collection.insertMany(contactsArray);
    return result;
  }

  // UPDATE a Contact
  static async update(id, updateData) {
    const collection = await this.collection();
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );
    return result.modifiedCount;
  }

  // DELETE a Contact
  static async delete(id) {
    const collection = await this.collection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount;
  }

  // Close connection
  static async close() {
    if (this.client) {
      await this.client.close();
      console.log("MongoDB connection closed");
    }
  }
}

module.exports = Contact;