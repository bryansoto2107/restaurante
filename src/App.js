
import { Routes, Route, Link } from 'react-router-dom';
import Pagina2 from './Paginas/Pagina2';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Perfil from './Paginas/Perfil';
import Dashboard from './Paginas/Dashboard';




function HomePage() {
  const navigate = useNavigate();


  //Variables
  const [Usuario, setUsuario] = useState(''); 
  const [Contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');     
  return (
     <div>
    <h1>Login</h1>
    <form onSubmit={handleLogin}>
      <div>
        <label>Usuario: </label>
        <input
          type="text"
          placeholder="Ingresa Usuario"
          value={Usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>
      <div>
        <label>Contraseña: </label>
        <input
          type="Contraseña"
          placeholder="Ingresa Contraseña"
          value={Contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
    {error && <p style={{ color: 'red' }}>{error}</p>}
  </div>
  );
  function handleLogin(event) {
  event.preventDefault(); // IMPORTANT: Prevents the default form submission which reloads the page

  // Clear any previous errors
  setError('');

  // --- This is our simple validation ---
  // In a real app, you would check this against a server
  if (Usuario === 'admin' && Contraseña === '1234') {

    console.log('Login exitoso!');
    navigate('/sistema/sub-pagina-1');
  } else {
    console.log('Login fallido.');
    setError('Usuario o Contraseña inválidos. Por favor, inténtelo de nuevo.');
  }
}
}
function App() {
  return (
    <div>
      {}
      <nav>
        <Link to="/">Pagina1</Link> | <Link to="/Pagina2">Pagina2</Link>
      </nav>
      
      <hr /> {}

      {}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Pagina2" element={<Pagina2/>} />
        <Route path="/sistema" element={<Pagina2 />}>
          
          <Route path="sub-pagina-1" element={<Perfil />} />
          <Route path="sub-pagina-2" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
