const express = require('express')
const app = express()
const port = 22222

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Makes everything in the media folder available over http
app.use(express.static('media'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})