import {
  Navbar,
  About,
  ChooseUs,
  Services,
  Contact,
  Footer,
  Hero,
} from "./components";

const App = () => {
  return (
    <main>
      <header>
        <Navbar />
        <Hero />
      </header>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="choose-us">
        <ChooseUs />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default App;
