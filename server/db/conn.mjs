import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://kael:Cheese123@cluster0.abovgl0.mongodb.net/";
const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log("successful connected to DB")
} catch(e) {
  console.error(e);
}

let db = conn.db("apds");

export default db;