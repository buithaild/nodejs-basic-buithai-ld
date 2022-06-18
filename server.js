const express = require('express');
const app = express();
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World! I am Bui Van Thai')
})

app.get('/about', (req, res) => {
    res.send(`I come from Lu do`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})