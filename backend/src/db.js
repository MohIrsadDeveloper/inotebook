const mongoose = require('mongoose');
const mongoURI = `mongodb+srv://inotebook:inotebook@cluster0.cxbph.mongodb.net/INOTEBOOK?retryWrites=true&w=majority`;

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}


module.exports = connectToMongo;