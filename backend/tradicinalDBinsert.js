const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://ojlelati07:mongoDBpassword@cluster0.rdrbxcu.mongodb.net/";
const client = new MongoClient(url);
const main = async () => {
  await client.connect();
  console.log("connected successfuly to server");
  const db = client.db("uni-dasboard-app");
  const collection = db.collection("opened-uni");

  // await collection.insertOne({
  //   title: "new course",
  //   price: 2500,
  // });
  const data = await collection.find().toArray();
  console.log(data);
};
main();
