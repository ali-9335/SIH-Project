// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// MongoDB connection string
const MONGO_URI = 'mongodb://localhost:27017/farmerData'; // Replace with your MongoDB URI

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log('MongoDB connection error:', error));

app.use('/auth', require('./routes/auth'));
app.use('/api/farmerData', require('./api/farmerData'));
// app.use('/buyers', require('./routes/buyers'));
// app.use('/contracts', require('./routes/contracts'));


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
