import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoHorizontal.png";

/* ====== FUNCIONES ====== */
const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/* ====== COMPONENTE ====== */
export default function Footer() {
  const handleHover = (e) => (e.target.style.color = "#FDC403");
  const handleLeave = (e) => (e.target.style.color = "#ffffff");

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>

        {/* Columna 1: Logo y descripción */}
        <div style={columnStyle}>
          <NavLink to="/" onClick={scrollTop} style={logoWrapperStyle}>
            <img src={logo} alt="Impacto360" style={logoStyle} />
          </NavLink>
          <p style={centeredTextStyle}>
            Transformando ideas en resultados digitales de alto impacto.
          </p>
          <div style={socialStyle}>
            <SocialIcon href="https://facebook.com" icon={<FaFacebookF />} />
            <SocialIcon href="https://instagram.com" icon={<FaInstagram />} />
            <SocialIcon href="https://wa.me/51987654321" icon={<FaWhatsapp />} />
          </div>
        </div>

        {/* Columna 2: Contacto */}
        <div style={columnStyle}>
          <h4 style={footerTitleStyle}>Contacto</h4>
          <div style={contactInfoGroup}>
            <p style={centeredTextStyle}>
              <strong>Horario:</strong><br /> Lunes a Viernes: 9am - 6pm
            </p>
            <p style={centeredTextStyle}>
              <strong>Correo:</strong><br />
              <a href="mailto:gsuarez@impacto360.com.pe" style={contactLinkStyle}>
                gsuarez@impacto360.com.pe
              </a>
            </p>
            <p style={centeredTextStyle}>
              <strong>Tel:</strong><br />
              <a href="tel:+51987654321" style={contactLinkStyle}>
                +51 987 654 321
              </a>
            </p>
          </div>
        </div>

        {/* Columna 3: Navegación */}
        <div style={columnStyle}>
          <h4 style={footerTitleStyle}>Navegación</h4>
          <nav style={navStackStyle}>
            {["Inicio", "Nosotros", "Servicios", "Contacto"].map((text) => (
              <NavLink
                key={text}
                to={text === "Inicio" ? "/" : `/${text}`}
                style={linkFooterStyle}
                onClick={scrollTop}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                {text}
              </NavLink>
            ))}
          </nav>
        </div>

      </div>

      <div style={dividerStyle} />
      
      <p style={copyStyle}>
        © {new Date().getFullYear()} <strong>Impacto 360</strong>. Todos los derechos reservados.{" "}
        <NavLink
          to="/PoliticasPrivacidad"
          style={privacyLinkStyle}
          onClick={scrollTop}
        >
          Políticas de Privacidad
        </NavLink>
      </p>
    </footer>
  );
}

/* ====== SUB-COMPONENTE ICONO SOCIAL ====== */
function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={socialLinkStyle}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      {icon}
    </a>
  );
}

/* ====== ESTILOS ====== */

const footerStyle = {
  backgroundColor: "#000",
  color: "#fff",
  padding: "clamp(40px, 8vw, 80px) 20px 30px",
  fontFamily: "sans-serif",
};

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "50px",
  maxWidth: "1300px",
  margin: "0 auto",
};

const columnStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};

const logoWrapperStyle = {
  marginBottom: "15px",
  display: "block",
};

const logoStyle = {
  height: "55px",
  width: "auto",
  objectFit: "contain",
};

const socialStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: "15px",
};

const socialLinkStyle = {
  color: "#FDC403",
  fontSize: "24px",
  transition: "all 0.3s ease",
  display: "inline-block",
};

const footerTitleStyle = {
  fontSize: "19px",
  fontWeight: "700",
  marginBottom: "25px",
  color: "#FDC403",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const navStackStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
};

const linkFooterStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "16px",
  transition: "all 0.3s ease",
};

const contactInfoGroup = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15px",
};

const centeredTextStyle = {
  margin: 0,
  fontSize: "15px",
  lineHeight: 1.6,
  color: "#ccc",
  textAlign: "center",
};

const contactLinkStyle = {
  color: "#FDC403",
  textDecoration: "none",
  fontWeight: "500",
};

const dividerStyle = {
  height: "1px",
  backgroundColor: "#222",
  margin: "40px auto 20px",
  maxWidth: "1300px",
};

const copyStyle = {
  textAlign: "center",
  fontSize: "13px",
  color: "#666",
  margin: 0,
};

const privacyLinkStyle = {
  color: "#FDC403",
  textDecoration: "none",
  marginLeft: "8px",
  fontWeight: "500",
};