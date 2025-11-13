import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Vídeo Destacado</h2>
      <p>Guía de inicio rápido para el Wipe.</p>

      <div className="video-container">
        <iframe 
          src="https://www.youtube.com/embed/epArHimbrBM?si=0r59NpKRBqDakHal" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </aside>
  );
};

export default Sidebar;