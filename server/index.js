const express = require('express')
const app = express()
const port = 22222

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:<password>@cluster0.mglvzsy.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Makes everything in the media folder available over http
app.use(express.static('media'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})