export default function Formulario() {
  return (
    <section id="contactForm" style={formSection}>
      <div style={formWrapper}>
        
        {/* Columna IZQUIERDA: Formulario */}
        <div 
          style={formContainer} 
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 style={formTitle}>Formulario de Contacto</h2>

          <form style={formStyle} onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Tu Nombre"
              style={inputStyle}
              required
            />
            <input
              type="email"
              placeholder="Tu Correo Electrónico"
              style={inputStyle}
              required
            />
            <textarea
              placeholder="Escribe tu mensaje aquí..."
              rows={5}
              style={{ ...inputStyle, resize: "none" }}
              required
            />
            <button 
              type="submit" 
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#000";
                e.target.style.color = "#FDC403";
                e.target.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#FDC403";
                e.target.style.color = "#000";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Enviar mensaje ahora
            </button>
          </form>
        </div>

        {/* Columna DERECHA: Texto Informativo */}
        <div 
          style={infoContainer} 
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h3 style={infoTitle}>¿Tiene alguna consulta o comentario?</h3>
          <p style={infoText}>
            Complete el formulario y uno de nuestros especialistas se pondrá en
            contacto con usted a la brevedad. En <strong>Impacto 360</strong> estamos
            listos para asesorarlo y brindarle soluciones digitales adaptadas a
            sus necesidades.
          </p>

          <div style={extraInfoStyle}>
            <p style={infoText}>
              <strong>Ubicación:</strong> Lima, Perú <br />
              <strong>Atención:</strong> Lun - Vie / 9:00 AM - 6:00 PM
            </p>
          </div>

          <p style={{ ...infoText, marginTop: "20px", fontStyle: "italic", color: "#FDC403" }}>
            "Transformamos tu presencia digital con resultados medibles."
          </p>
        </div>

      </div>
    </section>
  );
}

/* ====== ESTILOS ====== */

const formSection = {
  maxWidth: "1200px",
  margin: "80px auto",
  padding: "40px 20px",
  marginBottom: "120px"
};

const formWrapper = {
  display: "flex",
  gap: "60px",
  alignItems: "flex-start",
  justifyContent: "center",
  flexWrap: "wrap",
};

const formContainer = {
  flex: "1 1 450px",
  maxWidth: "550px",
  backgroundColor: "#fff",
  padding: "30px",
  borderRadius: "15px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
};

const formTitle = {
  textAlign: "left",
  marginBottom: "25px",
  fontSize: "28px",
  fontWeight: "700",
  color: "#000"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const inputStyle = {
  padding: "15px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  outline: "none",
  backgroundColor: "#fcfcfc",
  transition: "border-color 0.3s",
};

const buttonStyle = {
  padding: "16px",
  backgroundColor: "#FDC403",
  color: "#000",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "700",
  cursor: "pointer",
  transition: "all 0.3s ease",
  marginTop: "10px"
};

const infoContainer = {
  flex: "1 1 400px",
  maxWidth: "500px",
  paddingTop: "20px"
};

const infoTitle = {
  fontSize: "32px",
  fontWeight: "800",
  lineHeight: "1.2",
  marginBottom: "25px",
  color: "#000"
};

const infoText = {
  fontSize: "18px",
  lineHeight: "1.8",
  color: "#444",
  margin: 0
};

const extraInfoStyle = {
  marginTop: "30px",
  paddingLeft: "15px",
  borderLeft: "4px solid #FDC403"
};