import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import nosotrosImg from "../assets/quienesSomos.svg";

export default function Nosotros() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* TÍTULO */}
        <h2 style={titleStyle} data-aos="fade-down">
          Quiénes Somos
        </h2>

        {/* CONTENIDO PRINCIPAL: TEXTO + IMAGEN */}
        <div style={contentStyle}>
          {/* TEXTO */}
          <div style={textBlockStyle} data-aos="fade-right">
            <h3 style={subtitleStyle}>
              Impulsamos marcas con{" "}
              <span style={{ color: "#FDC403" }}>estrategia</span> y{" "}
              <span style={{ color: "#FDC403" }}>creatividad</span>
            </h3>

            <p style={textStyle}>
              Somos una agencia enfocada en marketing digital, diseño y
              soluciones web. Creamos experiencias visuales y estrategias
              digitales orientadas a resultados reales.
            </p>

            <p style={textStyle}>
              Acompañamos a nuestros clientes desde la idea hasta la ejecución,
              combinando análisis, creatividad y tecnología para hacer crecer
              su marca.
            </p>
          </div>

          {/* IMAGEN */}
          <div style={imageWrapperStyle} data-aos="fade-left">
            <img
              src={nosotrosImg}
              alt="Equipo creativo Impacto 360"
              style={imageStyle}
            />
          </div>
        </div>

        {/* MISIÓN & VISIÓN */}
        <div style={mvGridStyle}>
          <MVCard
            title="Nuestra Misión"
            text="Crear soluciones digitales estratégicas que ayuden a las marcas a crecer, conectar con su audiencia y alcanzar resultados sostenibles."
            delay="0"
          />
          <MVCard
            title="Nuestra Visión"
            text="Ser una agencia referente en innovación digital, reconocida por su creatividad, compromiso y enfoque en resultados."
            delay="200"
          />
        </div>

        {/* VALORES */}
        <div style={valuesGridStyle}>
          <Value
            title="Estrategia"
            text="Cada proyecto parte de un análisis claro y objetivos definidos."
            delay="0"
          />
          <Value
            title="Creatividad"
            text="Diseños y soluciones que destacan y conectan con el público."
            delay="200"
          />
          <Value
            title="Resultados"
            text="Medimos, optimizamos y escalamos cada acción para tu éxito."
            delay="400"
          />
        </div>

        {/* CTA */}
        <div style={ctaStyle} data-aos="zoom-in">
          <a 
            href="/contacto" 
            style={ctaButtonStyle}
            onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#000";
                e.target.style.color = "#FDC403";
                e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#FDC403";
                e.target.style.color = "#000";
                e.target.style.transform = "scale(1)";
            }}
          >
            Trabajemos juntos
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================= SUB COMPONENTS ================= */

function MVCard({ title, text, delay }) {
  return (
    <div 
      style={mvCardStyle} 
      data-aos="fade-up" 
      data-aos-delay={delay}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)")}
    >
      <h4 style={mvTitleStyle}>{title}</h4>
      <p style={mvTextStyle}>{text}</p>
    </div>
  );
}

function Value({ title, text, delay }) {
  return (
    <div 
      style={valueCardStyle} 
      data-aos="zoom-in" 
      data-aos-delay={delay}
    >
      <div style={valueIconDot} />
      <h4 style={valueTitleStyle}>{title}</h4>
      <p style={valueTextStyle}>{text}</p>
    </div>
  );
}

/* ================= ESTILOS ================= */

const sectionStyle = {
  paddingTop: "clamp(100px, 15vh, 140px)",
  paddingBottom: "clamp(60px, 10vw, 100px)",
  backgroundColor: "#fff",
  overflow: "hidden"
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px",
};

const titleStyle = {
  fontSize: "clamp(30px, 5vw, 45px)",
  textAlign: "center",
  marginBottom: "clamp(40px, 8vw, 70px)",
  color: "#000",
  fontWeight: "800",
  textTransform: "uppercase",
  letterSpacing: "-1px"
};

const contentStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "40px",
  alignItems: "center",
  marginBottom: "80px",
};

const textBlockStyle = {
  textAlign: "left", // Texto principal a la izquierda para lectura cómoda
};

const subtitleStyle = {
  fontSize: "clamp(22px, 3vw, 32px)",
  color: "#000",
  marginBottom: "20px",
  fontWeight: "700",
  lineHeight: 1.2
};

const textStyle = {
  fontSize: "16px",
  lineHeight: 1.8,
  color: "#555",
  marginBottom: "16px",
};

const imageWrapperStyle = {
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  display: "block",
  objectFit: "cover",
};

const mvGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "25px",
  marginBottom: "60px",
};

const mvCardStyle = {
  padding: "40px 30px",
  borderRadius: "20px",
  backgroundColor: "#f9f9f9",
  borderTop: "5px solid #FDC403", // Cambiado a borde superior para mejor look móvil
  textAlign: "center",
  transition: "all 0.3s ease",
};

const mvTitleStyle = {
  fontSize: "22px",
  marginBottom: "15px",
  color: "#000",
  fontWeight: "700",
};

const mvTextStyle = {
  color: "#666",
  lineHeight: 1.6,
  fontSize: "15px",
  margin: 0
};

const valuesGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
  marginBottom: "80px",
};

const valueCardStyle = {
  padding: "30px 20px",
  borderRadius: "15px",
  backgroundColor: "#fff",
  border: "1px solid #eee",
  textAlign: "center",
  transition: "0.3s"
};

const valueIconDot = {
    width: "12px",
    height: "12px",
    backgroundColor: "#FDC403",
    borderRadius: "50%",
    margin: "0 auto 15px"
};

const valueTitleStyle = {
  fontSize: "18px",
  marginBottom: "10px",
  color: "#000",
  fontWeight: "700",
};

const valueTextStyle = {
  color: "#777",
  fontSize: "14px",
  lineHeight: 1.5,
};

const ctaStyle = {
  textAlign: "center",
};

const ctaButtonStyle = {
  backgroundColor: "#FDC403",
  color: "#000",
  padding: "18px 50px",
  borderRadius: "50px",
  textDecoration: "none",
  fontWeight: "800",
  fontSize: "16px",
  display: "inline-block",
  transition: "all 0.4s ease",
  boxShadow: "0 4px 15px rgba(253, 196, 3, 0.3)"
};