import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroImpacto from "../componentes/componentesInicio/heroInicio";
import Servicios from "../componentes/componentesInicio/Servicios";
import FAQ from "../componentes/Faq";
import Cursos from "../componentes/componentesInicio/Cursos";
import Formulario from "../componentes/ComponentesContacto/formulario";
import Portafolio from "../componentes/componentesInicio/Portafolio";

export default function Inicio() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main style={{ paddingTop: "80px", overflowX: "hidden" }}> 
      <HeroImpacto />
      <section style={sectionStyle}>
        <Servicios />
        <Cursos />
        <Portafolio />
        <FAQ />
        <Formulario />
      </section>
    </main>
  );
}

const sectionStyle = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "clamp(20px, 5vw, 60px) clamp(15px, 3vw, 40px)",
};