
import React from 'react';
import '../hojas-de-estilo/EstudianteCard.css';

function EstudianteCard({ nombre, onClick }) {
    return (
        <div className="estudiante-card" onClick={onClick}>
            <div className="estudiante-icon">👤</div>
            <p className="estudiante-nombre">{nombre}</p>
        </div>
    );
}

export default EstudianteCard;
