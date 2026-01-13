import contactoImg from "../../assets/contacto.svg";

export default function ContactoComponentTitulo() {
  const scrollToForm = () => {
    const form = document.getElementById("contactForm");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Texto: Entra desde la izquierda */}
        <div style={leftStyle} data-aos="fade-right" data-aos-duration="1000">
          <h2 style={titleStyle}>Nuestro Contacto</h2>
          <p style={textStyle}>
            En <strong>Impacto 360</strong> nos apasiona ayudar a tu marca a
            crecer. Si tienes un proyecto, idea o consulta, estamos aquí para
            ofrecerte soluciones digitales que lleven tu negocio al siguiente
            nivel.
          </p>

          <button 
            style={buttonStyle} 
            onClick={scrollToForm}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.backgroundColor = "#e5b002";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.backgroundColor = "#FDC403";
            }}
          >
            Ir al formulario
          </button>
        </div>

        {/* Imagen: Entra desde la derecha */}
        <div style={rightStyle} data-aos="fade-left" data-aos-duration="1000">
          <img src={contactoImg} alt="Contacto" style={imageStyle} />
        </div>
      </div>
    </section>
  );
}

/* ================= ESTILOS ================= */

const sectionStyle = {
  padding: "clamp(60px, 8vw, 100px) 0",
  backgroundColor: "#fff",
};

const containerStyle = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "0 clamp(20px, 5vw, 80px)",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "clamp(40px, 6vw, 80px)",
  alignItems: "center",
};

const leftStyle = {
  display: "flex",
  flexDirection: "column",
};

const titleStyle = {
  fontSize: "clamp(32px, 5vw, 48px)",
  fontWeight: "800",
  marginBottom: "20px",
  lineHeight: 1.2,
  color: "#000",
};

const textStyle = {
  fontSize: "clamp(16px, 2.2vw, 18px)",
  marginBottom: "32px",
  lineHeight: 1.6,
  color: "#444",
};

const buttonStyle = {
  backgroundColor: "#FDC403",
  color: "#000",
  padding: "16px 32px",
  border: "none",
  borderRadius: "50px",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
  width: "fit-content",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 15px rgba(253, 196, 3, 0.3)",
};

const rightStyle = {
  display: "flex",
  justifyContent: "center",
};

const imageStyle = {
  width: "100%",
  maxWidth: "550px",
  height: "auto",
};