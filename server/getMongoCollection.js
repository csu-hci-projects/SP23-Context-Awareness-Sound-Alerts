import { mongoConn } from "./creds/mongoKey.js";
import databaseConfig from "../config/databaseConfig.js"
import {MongoClient, ServerApiVersion} from "mongodb";

export default async function getMongoCollection(callback) {
    const client = new MongoClient(mongoConn, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1
    });

    try {
        const database = client.db(databaseConfig.database);
        const collection = database.collection(databaseConfig.collection);

        return callback(collection)
    } catch {
        console.log("ERROR connecting to database")
    } finally {
        await client.close();
    }
}
