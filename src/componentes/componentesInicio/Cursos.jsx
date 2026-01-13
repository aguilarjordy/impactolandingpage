export default function Cursos() {
  const cursos = [
    { title: "Diseño UX/UI", description: "Adquiere dominio en las principales plataformas...", price: "$250" },
    { title: "HTML y CSS", description: "Adquiere dominio en las principales plataformas...", price: "$350" },
    { title: "Gestión de Productos", description: "Adquiere dominio en las principales plataformas...", price: "$450" },
  ];

  return (
    <section style={sectionStyle}>
      <p style={{...subtitleStyle, fontSize:"26px"}} data-aos="fade-up">Nuestros paquetes</p>
      <div style={gridStyle}>
        {cursos.map((curso, index) => (
          <div 
            key={index} 
            style={cardStyle} 
            data-aos="zoom-in" 
            data-aos-delay={index * 200}
          >
            <h3 style={courseTitleStyle}>{curso.title}</h3>
            <p style={courseDescStyle}>{curso.description}</p>
            <p style={coursePriceStyle}>{curso.price}</p>
            <button 
               style={buttonStyle}
               onMouseEnter={(e) => {
                 e.target.style.backgroundColor = "#e5b002"; // Naranja más oscuro
                 e.target.style.transform = "scale(1.02)"; // Ligera elevación
                 e.target.style.boxShadow = "0 5px 15px rgba(253, 196, 3, 0.3)"; // Sombra del color del botón
               }}
               onMouseLeave={(e) => {
                 e.target.style.backgroundColor = "#FDC403"; // Color original
                 e.target.style.transform = "scale(1)";
                 e.target.style.boxShadow = "none";
               }}
            >
                Conocer más
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ====== ESTILOS ====== */
const sectionStyle = { padding: "60px 20px", maxWidth: "1200px", margin: "0 auto", textAlign: "center" };
const subtitleStyle = { color: "#FDC403", fontSize: "16px", fontWeight: "600", marginBottom: "30px" };
const gridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" };
const cardStyle = { 
  backgroundColor: "#f9f9f9", 
  padding: "40px", 
  borderRadius: "20px", 
  border: "1px solid #eee",
  transition: "all 0.3s ease" 
};
const courseTitleStyle = { fontSize: "24px", fontWeight: "bold", color: "#000" };
const courseDescStyle = { margin: "20px 0", color: "#555", lineHeight: "1.5" };
const coursePriceStyle = { fontSize: "32px", fontWeight: "800", color: "#FDC403", marginBottom: "20px" };

const buttonStyle = { 
  width: "100%", 
  padding: "14px", 
  backgroundColor: "#FDC403", 
  color: "#000", // Texto siempre negro para legibilidad
  border: "none", 
  borderRadius: "8px", 
  fontWeight: "bold", 
  fontSize: "16px",
  cursor: "pointer", 
  transition: "all 0.3s ease", // Suaviza todos los cambios (color, escala, sombra)
  outline: "none"
};