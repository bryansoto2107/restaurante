// src/Paginas/Pagina2.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Pagina2() {
  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: '#333', textAlign: 'center' }}>Soy la Página 2 (Contenedor del Sistema)</h1>
      <nav style={{ marginBottom: '20px', textAlign: 'center' }}>
        <Link to="/sistema/sub-pagina-1" style={{ margin: '0 10px', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Ver Perfil</Link>
        |
        <Link to="/sistema/sub-pagina-2" style={{ margin: '0 10px', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Ver Dashboard</Link>
      </nav>
      <hr style={{ borderColor: '#ccc', marginBottom: '30px' }}/>

      {/* Aquí es donde se renderizará el contenido de las rutas anidadas (Perfil o Dashboard) */}
      <Outlet /> 

      <footer style={{ marginTop: '50px', textAlign: 'center', color: '#666', fontSize: '0.9em' }}>
        <p>Pie de página de la Página 2</p>
      </footer>
    </div>
  );
}

export default Pagina2;