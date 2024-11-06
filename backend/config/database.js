// backend/config/database.js
const mongoose = require('mongoose');

const link="mongodb+srv://juan:juan@cluster0.dnc7u.mongodb.net/graficos"
const connectDB = async () => {
    try {
        await mongoose.connect(link, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
