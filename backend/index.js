const express = require('express');
const app = express();

const connectToMongo = require('./db');
connectToMongo();

app.get('/', (req,res) => {
    res.send("Hello world")
})


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`);
})