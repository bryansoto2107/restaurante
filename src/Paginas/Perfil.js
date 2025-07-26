// src/Paginas/Perfil.js
import React from 'react';

function Perfil() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#fffbe0', border: '1px solid #ffe082', borderRadius: '8px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ color: '#c05000' }}>Mi Perfil de Usuario</h2>
      <p>Aquí puedes ver y editar tu información personal.</p>
      <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', maxWidth: '300px', margin: '20px auto' }}>
        <li><strong>Nombre:</strong> Usuario Ejemplo</li>
        <li><strong>Email:</strong> usuario@example.com</li>
        <li><strong>Rol:</strong> Administrador</li>
      </ul>
      <button style={{ padding: '10px 20px', backgroundColor: '#ff9800', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1em' }}>
        Editar Perfil
      </button>
    </div>
  );
}

export default Perfil;