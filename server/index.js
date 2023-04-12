import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {addToData} from "./addToData.js"
import {getCount} from "./getCount.js"
import {clearDatabase} from "./clearDatabase.js";

const app = express()
const port = 22222

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/getCount', (req, res) =>{
    getCount()
        .then((count)=>{
            const returnPayolad = JSON.stringify(count);
            res.send(returnPayolad);
            console.log("Sending return payload " + returnPayolad+ "\n");
        })
        .catch((err)=>{
            console.log("ERROR getting count"+ "\n");
            res.send(JSON.stringify(err));
        })
})

app.get('/clear', (req, res) =>{
    clearDatabase()
        .then((result)=>{
            const returnPayload = JSON.stringify(result);
            res.send(returnPayload);
        })
        .catch((err)=>{
            console.log("ERROR clearing database."+ "\n");
            res.send(JSON.stringify(err));
        })
})

app.post('/addData', (request, response)=>{
    const payload = request.body;
    console.log("Got POST at /addData" + JSON.stringify(payload) + "\n");
    addToData(payload)
        .then((res)=>{
            response.send(JSON.stringify(res));
        })
})

// Makes everything in the media folder available over http
app.use(express.static('media'), (request)=>{
    console.log("Requested Media: " + JSON.stringify(request.body) + "\n");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})