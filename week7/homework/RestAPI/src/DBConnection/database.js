const mongoose = require('mongoose');
const MONGODB_URI = "mongodb+srv://khanh692:8RFNp6WPf4Oupmfs@cluster0.339t1o4.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database');
    })
    .catch((error) => {
        console.error('Error connecting to database', error);
    });