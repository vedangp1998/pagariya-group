import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Contact from "../../components/Contact";
import Quality from "./components/Quality";

const PagariyaExports = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <Welcome />
      </section>

      <section>
        <Quality />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default PagariyaExports;
