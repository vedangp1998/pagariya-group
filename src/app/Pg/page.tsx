import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Contact from "../components/Contact";
import WhyChooseUs from "./components/WhyChooseUs";
import Infrastructure from "./components/Infrastructure";
import Promoter from "./components/Promoter";
import StatsAndBrands from "./components/StatsAndBrands";

const PagariyaGroupPage = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <Welcome />
      </section>
      <section>
        <StatsAndBrands />
      </section>
      <section id="infrastructure">
        <Infrastructure />
      </section>
      <section>
        <WhyChooseUs />
      </section>
      <section id="team">
        <Promoter />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default PagariyaGroupPage;
