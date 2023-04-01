import { MongoClient, ServerApiVersion } from 'mongodb';


import { mongoConn } from "./creds/mongoKey.js";

export async function addToData(data){
    const client = new MongoClient(mongoConn, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

    try {
        console.log("addToData " + JSON.stringify(data))
        const database = client.db("test");
        const collection = database.collection("test-collection");

        const result = await collection.insertOne(data);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
        return {success: true, insertID: result.insertedId}
    } catch {
        console.log("ERROR inserting to database")
        return {success: false}
    } finally {
        await client.close();
    }
}




