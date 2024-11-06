import React, { useState } from "react";
import appfirebase from "../credenciales";
import axios from 'axios';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import '../hojas-de-estilo/PaginaPrincipal.css';

const auth = getAuth(appfirebase);

function PaginaPrincipal() {
  const [registrando, setRegistrado] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const functAutenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    if (registrando) {
      try {
        await createUserWithEmailAndPassword(auth, correo, contraseña);
        await axios.post('http://localhost:5000/api/register', {
          email: correo,
          password: contraseña,
        });
      } catch (error) {
        alert("La contraseña debe ser mayor a 8 caracteres");
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, correo, contraseña);
      } catch (error) {
        alert("El correo o la contraseña son incorrectos");
      }
    }
  };

  return (
    <div className="container">
      {!mostrarFormulario ? (
        <div className="welcome-screen">
          <button onClick={() => setMostrarFormulario(true)} className="btn-ingresar">
            INGRESAR
          </button>
        </div>
      ) : (
        <form onSubmit={functAutenticacion} className="form-container">
          <img src={require('./multikids.png')} alt="logo" className="logo" />
          <h1 className="title">INGRESAR</h1>
          <p>Correo</p>
          <label htmlFor="email" className="label">Correo:</label>
          <input type="email" id="email" required className="input" />
          <p>Contraseña</p>
          <label htmlFor="password" className="label">Contraseña:</label>
          <input type="password" id="password" required className="input" />

          <button className="btn-acceder">{registrando ? "Registrarse" : "Acceder"}</button>

          <div className="btn-container">
            <button type="button" className="btn-toggle" onClick={() => setRegistrado(!registrando)}>
              {registrando ? "Iniciar sesión" : "Registrarse"}
            </button>
          </div>

          <a href="#!" className="link">Términos y Condiciones de Uso</a>
        </form>
      )}
    </div>
  );
}

export default PaginaPrincipal;
