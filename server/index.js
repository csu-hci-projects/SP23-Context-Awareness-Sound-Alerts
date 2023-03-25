import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {addToData} from "./db.js"
import {getCount} from "./getCount.js"

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
            res.send(JSON.stringify(count))
        })
        .catch((err)=>{
            console.log("ERROR getting count")
            res.send(JSON.stringify(err))
        })
})

app.post('/addData', (request, response)=>{
    const payload = request.body;
    console.log("Got POST at /addData" + JSON.stringify(payload));
    addToData(payload)
        .then((res)=>{
            response.send(JSON.stringify(res))
        })
})

// Makes everything in the media folder available over http
app.use(express.static('media'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})