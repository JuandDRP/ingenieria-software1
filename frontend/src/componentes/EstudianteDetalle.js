import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../hojas-de-estilo/EstudianteDetalle.css';
import DoughnutChart from './DoughnutChart';

function EstudianteDetalle() {
    const { nombre } = useParams();
    const navigate = useNavigate();
    const [studentData, setStudentData] = useState(null);

    useEffect(() => {
        // Realiza la llamada a la API para obtener los datos del estudiante
        
        axios.get(`http://localhost:5000/api/porcentajes/${nombre}`)
            .then(response => {
                setStudentData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching estudiantes:', error);
            });
    }, [nombre]); 

    if (!studentData) {
        return <div>Cargando...</div>; 
    }

    const chartData = [
        { title: 'Visual espacial', data: studentData.VisualEspacial, colors: ['#FF8C00', '#333333'] },
        { title: 'Lingüística', data: studentData.Linguistica, colors: ['#4CAF50', '#333333'] },
        { title: 'Cinético corporal', data: studentData.CineticoCorporal, colors: ['#32CD32', '#333333'] },
        { title: 'Interpersonal', data: studentData.Interpersonal, colors: ['#800080', '#333333'] },
        { title: 'Lógico matemática', data: studentData.LogicoMatematica, colors: ['#8A2BE2', '#333333'] },
        { title: 'Naturalista', data: studentData.Naturalista, colors: ['#1E90FF', '#333333'] },
    ];

    const handleChartClick = (chart) => {
        navigate('/chart-detail', { state: chart });
    };

    return (
        <div>
            <div className="inicio-container">
                <button className="back-button" onClick={() => navigate('/Estudiantes')}>⬅</button>
                <div className="espacio">
                    <div className="titulo1">
                        <h1>{nombre}</h1>
                    </div>
                    <div className="charts-container">
                        {chartData.map((chart, index) => (
                            <div 
                                key={index} 
                                className="chart-item" 
                                onClick={() => handleChartClick(chart)} 
                                style={{ cursor: 'pointer' }}
                            >
                                <h3>{chart.title}</h3>
                                <DoughnutChart data={chart.data} colors={chart.colors} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="side-panel">
                    <img src={require('./perfil.png')} alt="Perfil" className="profile-image1" />
                    <h2 className="teacher-name">Docente</h2>
                    <p className="teacher-info">Yanneth Perez</p>
                    <p className="teacher-email">yannethP@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default EstudianteDetalle;
