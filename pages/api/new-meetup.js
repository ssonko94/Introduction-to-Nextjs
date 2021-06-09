import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://ssonko:4JmDQ7CyRijJSPC@cluster0.yhjz1.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meeetupCollection = db.collection("meeetups");
    const result = await meeetupCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({message: 'Meetup inserted!'})
  }
}

export default handler;
