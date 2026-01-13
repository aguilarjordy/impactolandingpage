import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function ContactoDetalle() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para detectar el ancho de pantalla
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    
    // Ejecutar al inicio y añadir el listener
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const direccion = "Av. Bolivia 942, Breña - Lima - Perú";
  const telefono = "+1 123 444 55 66";
  const email = "gsuarez@impacto360.com.pe";
  const horario = "Lunes a Viernes: 9am - 6pm";

  return (
    <section
      style={{
        ...sectionStyle,
        flexDirection: isMobile ? "column" : "row",
        padding: isMobile ? "40px 15px" : "80px 20px",
        gap: isMobile ? "30px" : "40px",
      }}
    >
      {/* Columna izquierda: Información */}
      <div
        style={{
          ...leftContainer,
          width: isMobile ? "100%" : "420px",
          maxWidth: "100%", // Evita desbordamiento
        }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 style={leftTitle}>Nuestros Datos</h2>
        <div style={infoGrid}>
          <InfoBlock icon={<FaMapMarkerAlt />} label="Dirección" value={direccion} />
          <InfoBlock icon={<FaPhoneAlt />} label="Teléfono" value={telefono} />
          <InfoBlock icon={<FaEnvelope />} label="Correo" value={email} />
          <InfoBlock icon={<FaClock />} label="Horario" value={horario} />
        </div>
      </div>

      {/* Mapa: Responsivo */}
      <div
        style={{
          ...mapWrapper,
          flex: isMobile ? "none" : 1,
          width: "100%",
          height: isMobile ? "350px" : "auto", // Altura mínima en móviles
        }}
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.88452445851!2d-77.0457632!3d-12.051515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c6d48b111b%3A0xc3f8e6b9c9f4d76!2sAv.%20Bolivia%20942%2C%20Bre%C3%B1a%2015082!5e0!3m2!1ses-419!2spe!4v1700000000000"
          style={mapIframeStyle}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Impacto 360"
        ></iframe>
      </div>
    </section>
  );
}

/* Componente Interno para los bloques de información */
function InfoBlock({ icon, label, value }) {
  return (
    <div 
      style={infoBlockStyle}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(10px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0)")}
    >
      <div style={iconStyle}>{icon}</div>
      <div style={textContainer}>
        <span style={labelStyle}>{label}</span>
        <span style={valueStyle}>{value}</span>
      </div>
    </div>
  );
}

/* ================= ESTILOS ================= */

const sectionStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "stretch",
  maxWidth: "1400px",
  margin: "0 auto",
  boxSizing: "border-box", // Crucial para móviles
};

const leftContainer = {
  backgroundColor: "#f9f9f9",
  padding: "40px 25px",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  display: "flex",
  flexDirection: "column",
  gap: "25px",
  transition: "all 0.3s ease",
  boxSizing: "border-box", // Evita que el padding sume al ancho total
};

const leftTitle = {
  fontSize: "24px",
  fontWeight: "800",
  margin: "0 0 10px 0",
  borderLeft: "6px solid #FDC403",
  paddingLeft: "15px",
  color: "#000",
};

const infoGrid = {
  display: "flex",
  flexDirection: "column",
  gap: "22px",
};

const infoBlockStyle = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  transition: "transform 0.3s ease",
};

const iconStyle = {
  fontSize: "24px",
  color: "#FDC403",
  backgroundColor: "#fff",
  minWidth: "50px", // Usar minWidth para que no se aplaste
  height: "50px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
};

const textContainer = {
  display: "flex",
  flexDirection: "column",
  overflow: "hidden", // Para evitar que texto largo rompa el layout
};

const labelStyle = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#888",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const valueStyle = {
  fontSize: "15px",
  fontWeight: "600",
  color: "#222",
  wordBreak: "break-word", // Permite saltos de línea en direcciones largas
};

const mapWrapper = {
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  minHeight: "350px",
};

const mapIframeStyle = {
  width: "100%",
  height: "100%",
  border: 0,
};