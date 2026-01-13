import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./componentes/layoud";
import Inicio from "./paginas/Inicio";
import Nosotros from "./paginas/Nosotros";
import Contacto from "./paginas/Contacto";
import ServiciosPage from "./paginas/Servicios";
import PoliticaPrivacidad from "./politicasPrivacidad/PoliticasPrivacidad";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Servicios" element={<ServiciosPage />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/PoliticasPrivacidad" element={<PoliticaPrivacidad />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;