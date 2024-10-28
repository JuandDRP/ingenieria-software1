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

                </>
              }
            />
            <Route
              path="/sobre-nosotros"
              element={
                <>
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