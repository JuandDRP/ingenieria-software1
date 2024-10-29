import React from 'react';
import'../hojas-de-estilo/Inicio.css';

function Inicio() {
  return (
    <div className="inicio-container">
      {/* Barra de búsqueda */}
      <div className="search-bar">
        <button className="back-button">⬅</button>
        <input type="text" placeholder="Búsqueda" className="search-input" />
      </div>

      {/* Panel principal */}
      <div className="main-panel">
        <h1 className="main-title">¡Hora del aprendizaje!</h1>

        {/* Opciones */}
        <div className="options-grid">
          <div className="option-card estudiantes">
            <i className="icon">👥</i>
            <p>Estudiantes</p>
          </div>
          <div className="option-card actividades">
            <i className="icon">🧠</i>
            <p>Actividades</p>
          </div>
          <div className="option-card ajustes">
            <i className="icon">⚙️</i>
            <p>Ajustes</p>
          </div>
          <div className="option-card moviles">
            <i className="icon">📱</i>
            <p>Moviles</p>
          </div>
          <div className="option-card ayuda">
            <i className="icon">❓</i>
            <p>Ayuda</p>
          </div>
        </div>
      </div>

      {/* Panel lateral derecho */}
      <div className="side-panel">
        {/* <img src="/" alt="Perfil" className="profile-image" /> */}
        <img src={require('./perfil.png')} alt="Perfil" className="profile-image1" />
        <h2 className="teacher-name">Docente</h2>
        <p className="teacher-info">Yanneth Perez</p>
        <p className="teacher-email">yannethP@gmail.com</p>

        {/* Clases */}
        <div className="section">
          <h3>Clases</h3>
          <button className="class-button">Transición</button>
          <p className="view-all">Ver Todo</p>
        </div>

        {/* Colaboradores */}
        <div className="section">
          <h3>Colaboradores</h3>
          <div className="collaborator">
            {/* <img src="/path-to-avatar1.png" alt="Avatar" className="collaborator-avatar" /> */}
            <img src={require('./perfil.png')} alt="Perfil" className="profile-image" />
            <p>Maria Janeth</p>
          </div>
          <div className="collaborator">
            {/* <img src="/path-to-avatar2.png" alt="Avatar" className="collaborator-avatar" /> */}
            <img src={require('./perfil.png')} alt="Perfil" className="profile-image" />
            <p>Ana</p>
          </div>
          <p className="view-all">Ver Todo</p>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
