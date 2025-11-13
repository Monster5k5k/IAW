import React, { useState } from 'react';

const Content = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="content">
      <h1>Eventos y Actualizaciones</h1>
      <article className="patch-note">
        <h3>¡NUEVO EVENTO: SIN TRADERS!</h3>
        <p className="date">Publicado el 10 de Noviembre, 2025</p>
        <p>
          ¡Atención PMCs! Todos los traders han cerrado sus tiendas temporalmente.
          Los precios en el Flea Market se han disparado. ¡Buena suerte ahí fuera!
        </p>
      </article>

      <article className="patch-note">
        <h3>Parche 0.14.8.2</h3>
        <p className="date">Publicado el 5 de Noviembre, 2025</p>
        <p>
          - Corregido un error que causaba invisibilidad en Interchange.
          <br />
          - Ajustado el spawn de munición de alta penetración.
          <br />
          - Mejoras de optimización en Streets of Tarkov.
        </p>
      </article>

      <article className="patch-note">
        <h3>Stream de Twitch Drops</h3>
        <p className="date">Publicado el 1 de Noviembre, 2025</p>
        <p>
          Ver streams de Tarkov en Twitch este fin de semana para ganar
          recompensas en el juego. ¡No te lo pierdas!
        </p>
      </article>

      <section className="gallery-section">
        <h2>Galería del Caos</h2>
        <p>Haz clic en una imagen para verla en grande.</p>
        
        <div className="gallery-container">
          
          <div className="gallery-item" onClick={() => setSelectedImage('/gallery/mapa-customs.png')}>
            <img src="/gallery/mapa-customs.png" alt="Mapa de Customs" />
            <p>Mapa: Customs</p>
          </div>
          
          <div className="gallery-item" onClick={() => setSelectedImage('/gallery/mapa-woods.png')}>
            <img src="/gallery/mapa-woods.png" alt="Mapa de Woods" />
            <p>Mapa: Woods</p>
          </div>
          
          <div className="gallery-item" onClick={() => setSelectedImage('/gallery/arma-m4.jpg')}>
            <img src="/gallery/arma-m4.jpg" alt="Arma M4 Full Mod" />
            <p>M4A1 Full Mod</p>
          </div>

          <div className="gallery-item" onClick={() => setSelectedImage('/gallery/item-ledx.png')}>
            <img src="/gallery/item-ledx.jpg" alt="Item Raro LedX" />
            <p>Item: LedX</p>
          </div>


        </div>
      </section>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <span className="modal-close" onClick={() => setSelectedImage(null)}>&times;</span>
          <img src={selectedImage} alt="Vista ampliada" className="modal-image" />
        </div>
      )}

    </main>
  );
};

export default Content;