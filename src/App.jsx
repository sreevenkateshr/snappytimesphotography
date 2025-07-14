import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Galleries from './pages/Galleries';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Header />
      <main className="container my-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
