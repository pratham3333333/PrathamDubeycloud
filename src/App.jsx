import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import {
  Marquee, About, Services, Skills, Experience, Projects, Certifications, Contact, Footer,
} from "./components/Sections.jsx";
import { useScrollReveal } from "./hooks.js";

export default function App() {
  useScrollReveal();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
