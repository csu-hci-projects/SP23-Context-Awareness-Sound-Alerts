const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 22222

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/addData', (request, response)=>{
    console.log("Got POST /addData" + JSON.stringify(request.body));
    response.send({ success: "true"});
})

// Makes everything in the media folder available over http
app.use(express.static('media'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})