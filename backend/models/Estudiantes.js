const mongoose = require('mongoose');

const chartSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    
});


module.exports = mongoose.model('Estudiante', chartSchema, 'estudiantes');
