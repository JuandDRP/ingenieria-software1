import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PaginaPrincipal from "./componentes/PaginaPrincipal.js";
import appfirebase from "./credenciales.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SesionIniciada from "./componentes/Inicio.js";
import Actividades from "./componentes/Actividades.js";
import Estudiantes from "./componentes/Estudiantes.js";
import Ayuda from "./componentes/Ayuda.js";
import Ajustes from "./componentes/Ajustes.js";
import EstudianteDetalle from "./componentes/EstudianteDetalle.js";
import ChartDetail from "./componentes/GraficoAmpliado.js";
import ActividadesDetalle from "./componentes/ActividadesDetalle.js";
import Evaluar from "./componentes/Evaluar.js";
const auth = getAuth(appfirebase);

function App() {

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      {usuario ? (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SesionIniciada />
                </>
              }
            />
            <Route
              path="/Actividades"
              element={
                <>
                  <Actividades />
                </>
              }
            />
            <Route
              path="/Actividades/:actividad"
              element={
                <>
                  <ActividadesDetalle />
                </>
              }
            />
            <Route
              path="/Actividades/:actividad/:nombre"
              element={
                <>
                  <Evaluar />
                </>
              }
            />
            <Route
              path="/Estudiantes"
              element={
                <>
                  <Estudiantes />
                </>
              }
            />
            <Route
              path="/Estudiantes/:nombre"
              element={
                <>
                  <EstudianteDetalle />
                </>
              }
            />
            <Route
              path="/chart-detail"
              element={
                <>
                  <ChartDetail />
                </>
              }
            />
            <Route
              path="/Ayuda"
              element={
                <>
                  <Ayuda />
                </>
              }
            />
            <Route
              path="/Ajustes"
              element={
                <>
                  <Ajustes />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      ) : (
        <PaginaPrincipal />
      )}
    </div>
  );
}

export default App;