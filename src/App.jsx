import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Service from "./components/Service";
import Resume from "./components/Resume"; // Create this file inside /pages folder

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Service />
    <Projects />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
