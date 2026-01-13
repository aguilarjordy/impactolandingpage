import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "¿Qué servicios ofrece Impacto 360?",
      answer: "Ofrecemos estrategias digitales completas, incluyendo gestión de redes sociales, publicidad, diseño y desarrollo web, y consultoría digital.",
    },
    {
      question: "¿Cómo puedo contactarlos?",
      answer: "Puedes contactarnos a través de nuestro correo contacto@impacto360.pe, teléfono +51 987 654 321 o mediante nuestro formulario de contacto en la web.",
    },
    {
      question: "¿Ofrecen planes personalizados?",
      answer: "Sí, analizamos cada negocio y ofrecemos planes y estrategias adaptadas a tus necesidades y objetivos específicos.",
    },
    {
      question: "¿Cuál es el tiempo promedio de ejecución de un proyecto?",
      answer: "Dependiendo del servicio, un proyecto puede tomar entre 2 y 6 semanas, siempre manteniendo comunicación constante con el cliente.",
    },
    {
      question: "¿Qué resultados puedo esperar de mi inversión?",
      answer: "Nuestros servicios están orientados a generar crecimiento real: aumento de visibilidad, engagement, leads y conversiones medibles según los objetivos de tu negocio.",
    },
    {
      question: "¿Puedo cambiar o ajustar mi estrategia en cualquier momento?",
      answer: "Sí, trabajamos de manera flexible y ajustamos las estrategias según resultados y objetivos de mejora continua.",
    },
  ];

  return (
    <section style={sectionStyle}>
      <p style={subtitleStyle} data-aos="fade-up">Dudas comunes</p>
      <h2 style={titleStyle} data-aos="fade-up" data-aos-delay="100">Preguntas Frecuentes</h2>

      <div style={faqContainerStyle} data-aos="fade-up" data-aos-delay="200">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div 
      style={{ 
        ...itemStyle, 
        borderLeft: open ? "5px solid #FDC403" : "5px solid transparent",
        backgroundColor: open ? "#fff" : "#f9f9f9"
      }}
    >
      <div 
        style={questionStyle} 
        onClick={() => setOpen(!open)}
      >
        <span style={{ flex: 1 }}>{question}</span>
        <span style={{ 
          ...toggleStyle, 
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          color: open ? "#FDC403" : "#000"
        }}>
          {open ? "−" : "+"}
        </span>
      </div>
      
      {/* Contenedor con transición de altura suave */}
      <div style={{
        maxHeight: open ? "200px" : "0",
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        opacity: open ? 1 : 0
      }}>
        <p style={answerStyle}>{answer}</p>
      </div>
    </div>
  );
}

/* ====== ESTILOS ====== */
const sectionStyle = {
  padding: "80px 20px",
  maxWidth: "900px",
  margin: "0 auto",
  marginBottom: "100px",
};

const subtitleStyle = {
  color: "#FDC403",
  fontSize: "16px",
  fontWeight: "600",
  marginBottom: "10px",
  textTransform: "uppercase",
  textAlign: "center",
};

const titleStyle = {
  fontSize: "clamp(30px, 5vw, 40px)",
  fontWeight: "700",
  marginBottom: "40px",
  textAlign: "center",
};

const faqContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const itemStyle = {
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  transition: "all 0.3s ease",
  cursor: "pointer",
};

const questionStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "18px",
  fontWeight: "600",
  gap: "15px",
};

const toggleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  transition: "transform 0.3s ease",
  display: "inline-block",
};

const answerStyle = {
  marginTop: "15px",
  fontSize: "16px",
  color: "#555",
  lineHeight: "1.6",
  borderTop: "1px solid #eee",
  paddingTop: "15px",
};