const express = require('express');
const app = express();

const connectToMongo = require('./db');
connectToMongo();

// Add middleware
app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routers/index'))
// app.use('/api/notes', require('./routes/notes'))

app.get('/', (req,res) => {
    res.send("Hello world")
})


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`);
})