export default function PoliticaPrivacidad() {
  const pageStyle = {
  backgroundColor: "#f7f7f7",
  minHeight: "100vh",
  paddingTop: "140px", // 👈 MÁS espacio arriba (header fijo)
  paddingLeft: "clamp(12px, 4vw, 24px)",
  paddingRight: "clamp(12px, 4vw, 24px)",
  paddingBottom: "clamp(12px, 4vw, 24px)",
};

  const containerStyle = {
    maxWidth: "900px",
    margin: "clamp(16px, 5vw, 40px) auto",
    padding: "clamp(20px, 5vw, 40px)",
    backgroundColor: "#ffffff",
    borderRadius: "clamp(6px, 2vw, 8px)",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.7",
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "clamp(20px, 4vw, 30px)",
    fontSize: "clamp(22px, 5vw, 32px)",
  };

  const paragraphStyle = {
    marginBottom: "clamp(14px, 3vw, 18px)",
    textAlign: "justify",
    fontSize: "clamp(14px, 3.5vw, 16px)",
  };

  return (
    <section style={pageStyle}>
       
      <div style={containerStyle}>
        <h1 style={titleStyle}>Política de Privacidad</h1>

       <p style={paragraphStyle}>
        El presente sitio web recopila datos personales a través del formulario de contacto, dispuesto con la finalidad de atender consultas, solicitudes de información y requerimientos realizados por los usuarios que acceden al sitio.  
        Los campos del formulario incluyen: <strong>Nombre</strong>, <strong>Correo Electrónico</strong> y un <strong>mensaje adicional opcional</strong>, que permite al usuario proporcionar información complementaria o detallar su solicitud.  
        Esta información será utilizada exclusivamente para dar respuesta a las consultas enviadas y ofrecer la asistencia o información solicitada de manera eficiente y personalizada.
        </p>

        <p style={paragraphStyle}>
        Los datos personales proporcionados por los usuarios serán tratados con estricta confidencialidad y no serán vendidos, compartidos ni utilizados para fines distintos a los establecidos.  
        La información ingresada en el campo de mensaje opcional será considerada de la misma forma, respetando la privacidad del usuario y asegurando que solo se emplee para comprender mejor sus necesidades y ofrecer soluciones adecuadas.
        </p>

        <p style={paragraphStyle}>
        El responsable del tratamiento de los datos es <strong>Gianella</strong>, quien asegura el cumplimiento de la Ley N.º 29733 – Ley de Protección de Datos Personales y su reglamento, garantizando que toda la información recopilada se maneje conforme a las disposiciones legales y los estándares de seguridad requeridos.
        </p>

        <p style={paragraphStyle}>
        El usuario tiene derecho a acceder, rectificar o eliminar sus datos personales en cualquier momento, comunicándose mediante el correo electrónico <strong>gsuarez@impacto360.com.pe</strong>.  
        Al enviar el formulario de contacto, el usuario declara haber leído y comprendido esta Política de Privacidad, aceptando de manera explícita el tratamiento de sus datos bajo los términos aquí establecidos.
        </p>
      </div>
    </section>
  );
}