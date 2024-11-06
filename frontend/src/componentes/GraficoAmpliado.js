// ChartDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import DoughnutChart from './DoughnutChart';
import '../hojas-de-estilo/GraficoAmpliado.css';

function ChartDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const { title, data, colors } = location.state || {};



    const [recomendaciones, setRecomendaciones] = useState('');
    useEffect(() => {
        if (title) {
            axios.get(`http://localhost:5000/api/recomendaciones/${title}`)
                .then(response => {
                    const formattedText = response.data.recomendaciones.replace(/\./g, '.<br>');
                    setRecomendaciones(formattedText);
                    
                })
                .catch(error => {
                    console.error('Error fetching recomendaciones:', error);
                });
        }
    }, [title]);
    return (
        <div>
            <div className="inicio-container">
                <button className="back-button" onClick={() => navigate(-1)}>⬅</button>

                <div className="chart-detail-content">
                    <h2 className="chart-title">{title}</h2>
                    <DoughnutChart data={data} colors={colors} size={300} />
                    <p className="recomendaciones-text" dangerouslySetInnerHTML={{ __html: recomendaciones }}></p>
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

export default ChartDetail;
