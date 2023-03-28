import { Routes, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Projects from 'pages/Projects';
import About from 'pages/About';
import Contact from 'pages/Contact';
import ScrollToTop from 'components/ScrollToTop';
import 'styles/normalize.css';
import 'fonts/font.css';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
