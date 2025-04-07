import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Contact from "../../components/Contact";

const Swaaditi = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <Welcome />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Swaaditi;
