const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/rise', );
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        handleError(error);
        console.error('Failed to connect to MongoDB:', error);
    }
}
    
module.exports = { connect };