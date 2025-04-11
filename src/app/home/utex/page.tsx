import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Contact from "../../components/Contact";
import Safety from "./components/Safety";

const Utex = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <Welcome />
      </section>

      <section>
        <Safety />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Utex;
