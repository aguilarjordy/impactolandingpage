import { FaUserTie, FaBullhorn, FaLaptopCode, FaLightbulb } from "react-icons/fa";

export default function Servicios() {
  const servicios = [
    { icon: <FaUserTie />, title: "CEO", description: "Planificamos y dirigimos estrategias digitales para tu marca." },
    { icon: <FaBullhorn />, title: "Publicidad", description: "Campañas efectivas en Google, Facebook e Instagram." },
    { icon: <FaLaptopCode />, title: "Web Design", description: "Páginas web modernas y optimizadas para resultados." },
    { icon: <FaLightbulb />, title: "Consultoría", description: "Asesoría integral para potenciar tu presencia online." },
  ];

  return (
    <section style={sectionStyle}>
      <p style={subtitleStyle} data-aos="fade-up">Lo que ofrecemos</p>
      <h2 style={titleStyle} data-aos="fade-up">Servicios</h2>
      <div style={gridStyle}>
        {servicios.map((s, i) => (
          <div key={i} style={cardStyle} data-aos="fade-up" data-aos-delay={i * 100}>
            <div style={iconStyle}>{s.icon}</div>
            <h3 style={{ fontSize: "20px", margin: "15px 0" }}>{s.title}</h3>
            <p style={{ color: "#666", lineHeight: 1.6 }}>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const sectionStyle = { padding: "60px 0" };
const subtitleStyle = { color: "#FDC403", fontWeight: "700", textAlign: "center", textTransform: "uppercase" };
const titleStyle = { fontSize: "clamp(30px, 5vw, 42px)", textAlign: "center", marginBottom: "50px" };
const gridStyle = { 
  display: "grid", 
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", 
  gap: "25px" 
};
const cardStyle = { 
  padding: "40px 30px", 
  backgroundColor: "#fff", 
  borderRadius: "20px", 
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  textAlign: "center"
};
const iconStyle = { fontSize: "40px", color: "#FDC403" };