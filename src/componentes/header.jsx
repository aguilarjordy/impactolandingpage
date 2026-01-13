import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/logoHorizontal.png";

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  /* Inicializar AOS */
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  /* Manejar cambio de tamaño de pantalla */
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 960;
      setIsMobile(mobile);
      if (!mobile) setOpen(false); // Cerrar sidebar si se expande la pantalla
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Cerrar al hacer click fuera del sidebar */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      <header style={headerStyle} data-aos="fade-down" data-aos-duration="800">
        <div style={headerInnerStyle}>
          {/* LOGO */}
          <div style={logoDivStyle}>
            <NavLink to="/" onClick={() => setOpen(false)}>
              <img
                src={logo}
                alt="Logo"
                style={logoImageStyle}
              />
            </NavLink>
          </div>

          {/* NAV DESKTOP - Oculto en móviles */}
          {!isMobile && (
            <nav style={navLinksStyle}>
              <NavItems close={() => {}} />
            </nav>
          )}

          {/* BOTÓN HAMBURGUESA - Solo en móviles */}
          {isMobile && (
            <button
              style={menuButtonStyle}
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
            >
              ☰
            </button>
          )}
        </div>
      </header>

      {/* OVERLAY (Fondo oscuro al abrir menú) */}
      <div 
        style={{
          ...overlayStyle,
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
        }} 
        onClick={() => setOpen(false)} 
      />

      {/* SIDEBAR MOBILE */}
      <aside
        ref={sidebarRef}
        style={{
          ...sidebarStyle,
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <button 
            onClick={() => setOpen(false)} 
            style={closeButtonStyle}
        >
            ✕
        </button>
        <nav style={mobileNavContainer}>
          <NavItems close={() => setOpen(false)} isMobile={true} />
        </nav>
      </aside>
    </>
  );
}

/* ================= COMPONENTE DE LINKS ================= */

function NavItems({ close, isMobile }) {
  const activeStyle = { color: "#FDC403" };
  const baseStyle = isMobile ? mobileNavLinkStyle : navLinkStyle;

  return (
    <>
      {["Inicio", "Nosotros", "Servicios", "Contacto"].map((item) => (
        <NavLink
          key={item}
          to={item === "Inicio" ? "/" : `/${item}`}
          style={({ isActive }) => ({
            ...baseStyle,
            ...(isActive ? activeStyle : {}),
          })}
          onClick={close}
          onMouseEnter={(e) => (e.target.style.color = "#FDC403")}
          onMouseLeave={(e) => {
            // Solo vuelve a blanco si no está activo
            if (!e.target.classList.contains("active")) {
              e.target.style.color = "#ffffff";
            }
          }}
        >
          {item}
        </NavLink>
      ))}
    </>
  );
}

/* ================= ESTILOS (OBJETOS) ================= */

const headerStyle = {
  width: "100%",
  backgroundColor: "#000",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 2000,
  boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
  height: "80px",
  display: "flex",
  alignItems: "center",
};

const headerInnerStyle = {
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "0 clamp(20px, 5vw, 60px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const logoDivStyle = {
  display: "flex",
  alignItems: "center",
};

const logoImageStyle = {
  height: "clamp(40px, 6vw, 55px)", // Tamaño fluido según pantalla
  objectFit: "contain",
};

const navLinksStyle = {
  display: "flex",
  gap: "clamp(20px, 3vw, 50px)", // Espaciado fluido entre links
};

const navLinkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "16px",
  transition: "all 0.3s ease",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
};

const menuButtonStyle = {
  fontSize: "35px",
  background: "none",
  border: "none",
  color: "#FDC403", // Amarillo para que resalte el botón
  cursor: "pointer",
};

const closeButtonStyle = {
  position: "absolute",
  top: "25px",
  right: "25px",
  fontSize: "30px",
  background: "none",
  border: "none",
  color: "#fff",
  cursor: "pointer",
};

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.8)",
  zIndex: 2500,
  transition: "all 0.4s ease",
};

const sidebarStyle = {
  position: "fixed",
  top: 0,
  right: 0,
  width: "min(300px, 80%)", // No ocupa más del 80% en pantallas muy pequeñas
  height: "100vh",
  backgroundColor: "#0a0a0a",
  display: "flex",
  flexDirection: "column",
  padding: "100px 40px",
  transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  zIndex: 3000,
  boxShadow: "-5px 0 15px rgba(0,0,0,0.5)",
};

const mobileNavContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "30px",
};

const mobileNavLinkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: "700",
  fontSize: "22px",
  transition: "0.3s",
};