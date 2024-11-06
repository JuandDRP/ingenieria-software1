const mongoose = require('mongoose');

const PorcentajesSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    VisualEspacial: {
        type: [Number],  // Define este campo como un array de números
        required: true,
    },
    Linguistica: {
        type: [Number],
        required: true,
    },
    CineticoCorporal: {
        type: [Number],
        required: true,
    },
    Interpersonal: {
        type: [Number],
        required: true,
    },
    LogicoMatematica: {
        type: [Number],
        required: true,
    },
    Naturalista: {
        type: [Number],
        required: true,
    },
});


module.exports = mongoose.model('Porcentajes', PorcentajesSchema, 'porcentajes');