import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
// import Safety from "./components/Safety";
import Contact from "./components/Contact";
import WhyChooseUs from "./components/WhyChooseUs";
import Infrastructure from "./components/Infrastructure";
import Promoter from "./components/Promoter";

const Home = () => {
  return (
    <>
      <Hero />
      <Welcome />
      {/* <Safety /> */}
      <Infrastructure />
      <WhyChooseUs />
      <Promoter />
      <Contact />
    </>
  );
};

export default Home;
