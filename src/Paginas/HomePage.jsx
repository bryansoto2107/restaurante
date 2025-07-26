// src/Paginas/HomePage.jsx
import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm'; // Importa el nuevo componente

function HomePage() {
  // Toda la lógica de login y el JSX ahora están en LoginForm.jsx
  // Este componente HomePage ahora solo renderiza el LoginForm
  return (
    <LoginForm />
  );
}

export default HomePage;