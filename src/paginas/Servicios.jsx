
import Cursos from "../componentes/componentesInicio/Cursos";
import Portafolio from "../componentes/componentesInicio/Portafolio";

export default function ServiciosPage() {
  return (
    <main style={mainStyle}>
      {/* Título */}
      <h1 style={titleStyle} data-aos="fade-down">
        Servicios
      </h1>

      
      <div style={{ marginTop: "-50px" }}>
    <Cursos />
  </div>
      <Portafolio />
    </main>
  );
}

/* ====== ESTILOS ====== */

const mainStyle = {
  paddingTop: "120px",   // evita que quede debajo del header fijo
  paddingBottom: "80px", // espacio abajo
};

const titleStyle = {
  textAlign: "center",
  fontSize: "clamp(32px, 5vw, 48px)",
  marginTop: "40px",      // 👈 baja el título
  marginBottom: "60px",
  fontWeight: "700",
};