
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

import Home from './Home';     
import NoPage from './NoPage';  


import Fotos from './Fotos';
import Nacional from './Nacional';
import Internacional from './Internacional';
import Deportes from './Deportes';

function App() {
  return (
    <div>
      <Navbar />

      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/noticias/nacional" element={<Nacional />} />
          <Route path="/noticias/internacional" element={<Internacional />} />
          <Route path="/noticias/deportes" element={<Deportes />} />
          
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      
    </div>
  );
}



export default App;