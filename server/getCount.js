import { MongoClient, ServerApiVersion } from 'mongodb';

import { mongoConn } from "./creds/mongoKey.js";

export async function getCount(){
    const client = new MongoClient(mongoConn, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

    try {
        console.log("getCount")
        const database = client.db("test");
        const collection = database.collection("test-collection");

        const result = await collection.count()
        console.log(`${result} documents in this collection.`);
        return {count: result}
    } catch {
        console.log("ERROR counting documents.")
        return {count: undefined}
    } finally {
        await client.close();
    }
}