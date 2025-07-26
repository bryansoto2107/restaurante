import { Link, Outlet } from 'react-router-dom';

function Pagina2() {
  const layoutStyle = {
    display: 'flex',
    height: '90vh',
  };

  const navStyle = {
    borderRight: '2px solid #ccc',
    padding: '20px',
    width: '200px',
    background: '#f4f4f4',
  };

  const contentStyle = {
    padding: '20px',
    flex: 1, 
  };

  return (
    <div style={layoutStyle}>
      
      <nav style={navStyle}>
        <h3>Menu</h3>
        <ul>
          <li>
            <Link to="/sistema/sub-pagina-1">sub-pagina-1</Link>
          </li>
          <li>
            <Link to="/sistema/sub-pagina-2">sub-pagina-2</Link>
          </li>
        </ul>
      </nav>

      
      <main style={contentStyle}>
        <Outlet />
      </main>
    </div>
  );
}

export default Pagina2;