
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

export default function Navbar() {
  
  const [menuNoticiasAbierto, setMenuNoticiasAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuNoticiasAbierto(false);
  };

  return (
    <nav className="navbar-simple">
      
      <Link to="/" className="nav-link">IAW</Link>
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/fotos" className="nav-link">Fotos</Link>
      

      <Link to="/contactos" className="nav-link">Contactos</Link>

      <div className="dropdown">
        
        <button 
          className="dropdown-button"
          onClick={() => setMenuNoticiasAbierto(!menuNoticiasAbierto)}
        >
          Noticias ▼
        </button>

        {menuNoticiasAbierto && (
          <div className="dropdown-menu">
            <Link to="/noticias/nacional" className="dropdown-item" onClick={cerrarMenu}>
              Nacional
            </Link>
            <Link to="/noticias/internacional" className="dropdown-item" onClick={cerrarMenu}>
              Internacional
            </Link>
            <Link to="/noticias/deportes" className="dropdown-item" onClick={cerrarMenu}>
              Deportes
            </Link>
          </div>
        )}
      </div>

    </nav>
  );
}