const mongoose = require('mongoose');

const chartSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    recomendaciones: { type: String},
});


module.exports = mongoose.model('Chart', chartSchema, 'recomendaciones');
