// styles
import "./css/plain.css";

// components
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function Plain() {
  return (
    <>
      <Header />
      <About />
      <Contact />
      <Projects />
    </>
  );
}
