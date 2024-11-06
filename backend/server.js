// backend/server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const chartRoutes = require('./routes/chartRoutes');


const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api', chartRoutes);

const PORT =  5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
