// src/components/LoginForm/LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css'; // Importa los estilos como un módulo

function LoginForm() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    setError('');

    // Usuario y clave predeterminados
    const USER = 'admin';
    const PASS = '1234';

    if (usuario === USER && contrasena === PASS) {
      console.log('Login exitoso!');
      // Redirige al usuario después del login exitoso
      navigate('/sistema/sub-pagina-1');
    } else {
      console.log('Login fallido.');
      setError('Usuario o Contraseña inválidos. Por favor, inténtelo de nuevo.');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h1 className={styles.titleInicio}>INICIO</h1>
        <p className={styles.subtitleBienvenido}>BIENVENIDO</p>

        <form onSubmit={handleLogin} className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="usuario" className={styles.label}>Usuario:</label>
            <input
              type="text"
              id="usuario"
              placeholder="Ingresa tu usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="contrasena" className={styles.label}>Contraseña:</label>
            <input
              type="password" // Cambiado a type="password" para ocultar la contraseña
              id="contrasena"
              placeholder="Ingresa tu contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              className={styles.inputField}
            />
          </div>
          {error && <p className={styles.errorMessage}>{error}</p>}
          <button type="submit" className={styles.loginButton}>ENTRAR</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;