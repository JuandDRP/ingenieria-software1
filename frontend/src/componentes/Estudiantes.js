

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../hojas-de-estilo/Estudiantes.css';
import EstudianteCard from './EstudianteCard';
import { useNavigate } from 'react-router-dom';

function Estudiantes() {
    const [estudiantes, setEstudiantes] = useState([]);
    const [page, setPage] = useState(1); 
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/estudiantes?page=${page}&limit=7`)
            .then(response => {
                setEstudiantes(response.data);
            })
            .catch(error => {
                console.error('Error fetching estudiantes:', error);
            });
    }, [page]);

    const handleEstudianteClick = (nombre) => {
        navigate(`/Estudiantes/${encodeURIComponent(nombre)}`);
    };

    const handleNext = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handlePrevious = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className="inicio-container">
            <button className="back-button" onClick={() => navigate('/')}>⬅</button>
            <div className="caja">
                <div className="titulo1">
                    <h1>Estudiantes</h1>
                </div>
                <div className="estudiantes-container">
                    {estudiantes.map((estudiante, index) => (
                        <EstudianteCard
                            key={index}
                            nombre={estudiante.nombre}
                            onClick={() => handleEstudianteClick(estudiante.nombre)}
                        />
                    ))}
                </div>
                <div className="pagination-buttons">
                    <button onClick={handlePrevious} disabled={page === 1}>Anterior</button>
                    <button onClick={handleNext} disabled={page === 4}>Siguiente</button>
                </div>
            </div>

            <div className="side-panel">
                <img src={require('./perfil.png')} alt="Perfil" className="profile-image1" />
                <h2 className="teacher-name">Docente</h2>
                <p className="teacher-info">Yanneth Perez</p>
                <p className="teacher-email">yannethP@gmail.com</p>
            </div>
        </div>
    );
}

export default Estudiantes;
