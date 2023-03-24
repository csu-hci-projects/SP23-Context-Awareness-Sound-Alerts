
const { MongoClient, ServerApiVersion } = require('mongodb');

import { mongoConn } from "./creds/mongoKey";

const client = new MongoClient(mongoConn, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close()
        .catch((err)=>{
            console.log("Error closing database: " + err)
        });
})
    .catch((err)=>{
        console.log("Error Connecting to database: " + err)
    });

