import "./App.css";
import "./i18n";
import Hero from "./components/templates/Hero";
import Nav from "./components/templates/Nav";
import About from "./components/templates/About";
import Services from "./components/templates/Services";
import Footer from "./components/templates/Footer";

function App() {
  return (
    <main className="text-justify">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Footer />
    </main>
  );
}

export default App;
