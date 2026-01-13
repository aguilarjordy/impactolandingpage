import { useEffect, useState } from "react";
import heroImg from "../../assets/imagen.svg";

export default function HeroImpacto() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section style={heroStyle}>
      <div style={overlayStyle} />

      <div style={contentStyle(width)}>
        <h1 style={titleStyle} data-aos="fade-down">
          <span style={{ color: "#FDC403", fontWeight: "750" }}>IMPACTO</span>
        </h1>

        <h2 style={subtitleTitleStyle} data-aos="fade-right" data-aos-delay="300">
          DIGITAL TOTAL
        </h2>

        <p style={subtitleStyle} data-aos="fade-up" data-aos-delay="500">
          Potenciamos tu marca con soluciones digitales modernas y orientadas a resultados.
        </p>

        <button 
          style={buttonStyle} 
          data-aos="zoom-in" 
          data-aos-delay="800"
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)"; // Escala un poco menor para que no se vea tosco
            e.target.style.backgroundColor = "#fff";
            e.target.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.backgroundColor = "#FDC403";
            e.target.style.color = "#000";
          }}
        >
          Conocer más
        </button>
      </div>
    </section>
  );
}

/* ====== ESTILOS ====== */
const heroStyle = {
  height: "60vh",
  position: "relative",
  backgroundImage: `url(${heroImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
};

const overlayStyle = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 100%)",
};

const contentStyle = (width) => {
  let paddingLeft = width <= 768 ? "20px" : "100px";
  return {
    position: "relative",
    zIndex: 2,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start", // Alinea el botón a la izquierda para que no ocupe todo el ancho
    paddingLeft,
    color: "#ffffff",
  };
};

const titleStyle = { fontSize: "clamp(40px, 8vw, 80px)", fontWeight: "900", margin: 0 };
const subtitleTitleStyle = { fontSize: "clamp(24px, 5vw, 45px)", fontWeight: "700", margin: "10px 0" };
const subtitleStyle = { fontSize: "18px", maxWidth: "500px", marginBottom: "30px", opacity: 0.9 };

const buttonStyle = {
  padding: "12px 25px", // Reducido de (15px 40px) a (12px 25px) para hacerlo menos ancho
  backgroundColor: "#FDC403",
  border: "none",
  borderRadius: "50px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "all 0.3s ease",
  width: "fit-content", // Asegura que el ancho sea solo el del texto + padding
  display: "inline-block",
};