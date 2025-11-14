

import { Outlet } from 'react-router-dom';

export default function Home() {
  
  const homeStyle = {
    textAlign: 'center',
    padding: '20px'
  };

  const imgStyle = {
    maxWidth: '80%',
    height: 'auto',
    borderRadius: '8px'
  };

  return (
    <div style={homeStyle}>
      <h2>VISITA ANDALUCÍA!!</h2>
      
      <img 
        style={imgStyle}
        src="/cadiz.jpg"
        alt="Monumento de Cádiz al atardecer" 
      />

      <hr />
      <Outlet /> 
    </div>
  );
}