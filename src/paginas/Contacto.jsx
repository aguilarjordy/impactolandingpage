import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactoComponentTitulo from "../componentes/ComponentesContacto/ContactoComponetTitulo";
import ContactoDetalle from "../componentes/ComponentesContacto/ContactoDetalle";
import Formulario from "../componentes/ComponentesContacto/formulario";

export default function Contacto() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main style={{ paddingTop: "clamp(80px, 12vh, 110px)", overflowX: "hidden" }}> 
      <ContactoComponentTitulo />
      <ContactoDetalle />
      <Formulario />
    </main>
  );
}