import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/Inicio.css';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

function Inicio() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Obtener el usuario autenticado
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sesión cerrada correctamente");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión: ", error);
      });
  };

  const optionCards = [
    { name: 'Estudiantes', icon: '👥', route: '/Estudiantes', className: 'estudiantes' },
    { name: 'Actividades', icon: '🧠', route: '/Actividades', className: 'actividades' },
  ];

  // Filtrar opciones por el término de búsqueda
  const filteredOptions = optionCards.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="inicio-container">
      <div className="search-bar">
        <button className="back-button" onClick={handleLogout}>⬅</button>
        <input
          type="text"
          placeholder="Búsqueda"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="main-panel">
        <h1 className="main-title">¡Hora del aprendizaje!</h1>

        <div className="options-grid">
          {/* Renderizar las tarjetas solo si el correo es "admin@gmail.com" */}
          {userEmail === 'admin@gmail.com' && filteredOptions.map((option, index) => (
            <div
              key={index}
              className={`option-card ${option.className}`}
              onClick={() => navigate(option.route)}
            >
              <i className="icon">{option.icon}</i>
              <p>{option.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="side-panel">
        <img src={require('./perfil.png')} alt="Perfil" className="profile-image1" />
        {userEmail === 'admin@gmail.com' ? (
          <>
            <h2 className="teacher-name">Docente</h2>
            <p className="teacher-info">Yanneth Perez</p>
          </>
        ) : (
          <>
            <h2 className="teacher-name">Invitado</h2>
            <p className="teacher-info" style={{ display: 'none' }}></p>
          </>
        )}
        <p className="teacher-email">{userEmail}</p>

      </div>
    </div>
  );
}

export default Inicio;
