import React from 'react';
import '../hojas-de-estilo/Actividades.css';
import { useNavigate } from 'react-router-dom';
function Actividades() {
  const navigate = useNavigate();
  const handleNavigate = (actividad) => {
    console.log(`/Actividades/${encodeURIComponent(actividad)}`)
    navigate(`/Actividades/${encodeURIComponent(actividad)}`);

  };
  return (
    <div className="inicio-container">
      <button className="back-button" onClick={() => navigate('/')}>⬅</button>
      <div className="titulo2">
        <h1>Actividades</h1>
      </div>
      <div className="caja2">
        <div className="actividad visual-espacial" onClick={() => handleNavigate('VisualEspacial')}>
          <h3>Visual espacial</h3>
          <img src={require('./visualespacial.png')} alt="Visual espacial" />
        </div>
        <div className="actividad linguistica"onClick={() => handleNavigate('Linguistica')}>
          <h3>Lingüística</h3>
          <img src={require('./linguistica.png')} alt="Lingüística" />
        </div>
        <div className="actividad cinetico-corporal" onClick={() => handleNavigate('CineticoCorporal')}>
          <h3>Cinético corporal</h3>
          <img src={require('./cineticocorporal.png')} alt="Cinético corporal" />
        </div>
        <div className="actividad interpersonal" onClick={() => handleNavigate('Interpersonal')}>
          <h3>Interpersonal</h3>
          <img src={require('./interpersonal.png')} alt="Interpersonal" />
        </div>
        <div className="actividad logico-matematica" onClick={() => handleNavigate('LogicoMatematica')}>
          <h3>Lógico matemática</h3>
          <img src={require('./logicomatematica.png')} alt="Lógico matemática"  />
        </div>
        <div className="actividad naturalista" onClick={() => handleNavigate('Naturalista')}>
          <h3>Naturalista</h3>
          <img src={require('./naturalista.png')} alt="Naturalista" />
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

export default Actividades;
