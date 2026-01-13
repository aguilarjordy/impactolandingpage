import { useState } from "react";
import img1 from "../../assets/1.svg";
import img2 from "../../assets/2.svg";
import landigpage from "../../assets/landigpage.svg";
import img4 from "../../assets/4.svg";

const CATEGORIES = {
  diseno: {
    label: "Diseño",
    items: [
      { title: "Diseño Publicitario", image: img2 },
      { title: "Branding", image: img4 },
    ],
  },
  branding: {
    label: "Branding",
    items: [{ title: "Identidad Visual", image: img1 }],
  },
  web: {
    label: "Web",
    items: [{ title: "Landing Page", image: landigpage }],
  },
};

export default function Portafolio() {
  const [activeTab, setActiveTab] = useState("diseno");
  const itemsLength = CATEGORIES[activeTab].items.length;

  return (
    <section style={{ padding: "60px 0" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(30px, 5vw, 40px)",
          marginBottom: "30px",
        }}
        data-aos="fade-up"
      >
        Portafolio
      </h2>

      {/* Tabs */}
      <div style={tabsStyle} data-aos="fade-up">
        {Object.keys(CATEGORIES).map((id) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            style={{
              ...tabButtonStyle,
              ...(activeTab === id ? tabActiveStyle : {}),
            }}
          >
            {CATEGORIES[id].label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={gridStyle(itemsLength)}>
        {CATEGORIES[activeTab].items.map((item, index) => (
          <div key={index} style={cardStyle} data-aos="zoom-in">
            <div style={imgWrapperStyle}>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  style={imgStyle}
                />
              )}
            </div>
            <h4 style={titleStyle}>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ====== ESTILOS ====== */

const tabsStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  flexWrap: "wrap",
  marginBottom: "40px",
};

const tabButtonStyle = {
  padding: "10px 25px",
  borderRadius: "30px",
  border: "2px solid #FDC403",
  cursor: "pointer",
  background: "none",
  fontWeight: "600",
  transition: "0.3s",
};

const tabActiveStyle = {
  backgroundColor: "#FDC403",
  color: "#000",
};

/* Grid dinámico según cantidad */
const gridStyle = (itemsLength) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "25px",
  maxWidth: itemsLength === 1 ? "600px" : "100%",
  margin: itemsLength === 1 ? "0 auto" : "0",
});

/* Card */
const cardStyle = {
  borderRadius: "15px",
  overflow: "hidden",
  backgroundColor: "#fff",
  boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
};

/* Contenedor de imagen */
const imgWrapperStyle = {
  width: "100%",
  aspectRatio: "16 / 9",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f7f7f7",
};

/* Imagen */
const imgStyle = {
  maxWidth: "90%",
  maxHeight: "90%",
  objectFit: "contain",
};

/* Título */
const titleStyle = {
  padding: "14px",
  textAlign: "center",
  fontWeight: "600",
};