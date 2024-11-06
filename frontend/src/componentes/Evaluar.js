import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DoughnutChart from './DoughnutChart';
import '../hojas-de-estilo/Evaluar.css';

function Evaluar() {

    const { actividad } = useParams();
    const { nombre } = useParams();
    const navigate = useNavigate();
    const [updatedPercentage, setUpdatedPercentage] = useState(null);
    const [studentData, setStudentData] = useState(null);
    if(actividad==="VisualEspacial"){
        
    }
    useEffect(() => {
        axios.get(`http://localhost:5000/api/porcentajes/${nombre}`)
            .then(response => {
                setStudentData(response.data);
            })
            .catch(error => {
                console.error('Error fetching estudiantes:', error);
            });
    }, [nombre]);

    const actividadData = studentData ? studentData[actividad] : null;

    const handleScrollChange = (e) => {
        setUpdatedPercentage(Number(e.target.value));
        actividadData[0] = Number(e.target.value);
        actividadData[1] = 100 - Number(e.target.value);

    };

    const handleSave = () => {
        const updatedData = {
            ...studentData,
            [actividad]: [actividadData[0], actividadData[1]] // Asume que el segundo valor se ajusta automáticamente
        };
        axios.put(`http://localhost:5000/api/porcentajes/${nombre}`, { actividad: actividad, porcentaje: updatedPercentage })
            .then(() => {
                alert("Porcentaje actualizado correctamente");
            })
            .catch(error => {
                alert("Error al actualizar el porcentaje:", error);
            });
    };

    const chartData = [{ title: actividad, data: actividadData, colors: ['#FF8C00', '#333333'] }]

    return (
        <div className="inicio-container">
            <button className="back-button" onClick={() => navigate('/Actividades')}>⬅</button>
            <div className="caja">
                <div className="titulo1">
                    <h1>Evaluando a {nombre} en {actividad}</h1>
                </div>
                <div className="a">
                    {actividadData ? (
                        <div className="charts-container2">
                            {chartData.map((chart, index) => (
                                <div
                                    key={index}
                                    className="chart-item"
                                    style={{ cursor: 'pointer' }}
                                >
                                    <h3>{chart.title}</h3>
                                    <DoughnutChart data={chart.data} colors={chart.colors} />
                                    <input className='scroll'
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={updatedPercentage}
                                        onChange={handleScrollChange}
                                    />
                                    <button className="save" onClick={handleSave}>Guardar</button>
                                </div>
                            ))}
                            <div>
                                <h2>Atención: Antes de modificar el porcentaje, asegúrate de que los cambios reflejan de manera precisa el desempeño del estudiante en esta actividad. Cualquier ajuste afectará el registro del progreso y no se puede revertir una vez guardado. Por favor, revisa cuidadosamente antes de confirmar.</h2>
                            </div>
                        </div>
                        
                    ) : (
                        <p>Cargando datos...</p>
                    )}
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



export default Evaluar;

