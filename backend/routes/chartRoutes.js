const express = require('express');
const Chart = require('../models/Chart'); 
const Estudiante=require('../models/Estudiantes');
const Porcentajes=require('../models/Porcentajes');
const Usuario=require('../models/Usuarios');
const router = express.Router();


router.get('/recomendaciones/:nombre', async (req, res) => {
    try {
        const { nombre } = req.params;
        const chart = await Chart.findOne({ nombre:nombre });
        if (chart) {
            res.json({ recomendaciones: chart.recomendaciones });
        } else {
            res.status(404).json({ message: 'Gráfico no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar recomendaciones' });
    }
});

router.get('/estudiantes', async (req, res) => {
    const { page = 1, limit = 7 } = req.query;
    const skip = (page - 1) * limit;
    const estudiantes = await Estudiante.find().skip(skip).limit(parseInt(limit));
    res.json(estudiantes);
});



router.get('/porcentajes/:nombre', async (req, res) => {
    try {
        const { nombre } = req.params;
        const estudiante = await Porcentajes.findOne({ nombre:nombre });
        res.json(estudiante)
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar porcentajes' });
    }
});


router.put('/porcentajes/:nombre', async (req, res) => {
    const { nombre } = req.params; 
    const { actividad, porcentaje } = req.body; 

    try {
        const estudiante = await Porcentajes.findOne({ nombre });
        if (!estudiante) {
            return res.status(404).json({ error: 'Estudiante no encontrado' });
        }
        if (estudiante[actividad]) {
            estudiante[actividad][0] = porcentaje;
            estudiante[actividad][1] = 100 - porcentaje;
        } else {
            return res.status(400).json({ error: 'Actividad no válida' });
        }
        await estudiante.save();
        res.json(estudiante);
    } catch (error) {
        console.error('Error al actualizar el porcentaje:', error);
        res.status(500).json({ error: 'Error al actualizar el porcentaje' });
    }
});

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const newUser = new Usuario({ email, password });
        await newUser.save();
        res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar usuario', error });
    }
});

module.exports = router;
