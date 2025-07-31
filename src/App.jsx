import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Galleries from './pages/Galleries';
import Services from './pages/Services';
import Birthday from './pages/Birthday';
import Testimonial from './pages/Testimonial';
import Outdoor from './pages/Outdoor';



function App() {
  return (
    <Router>
      <Header />
    {/*<main className="container my-4">*/}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/wedding" element={<Services />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/outdoor" element={<Outdoor />} />
        </Routes>
     {/* </main>*/}
      <Footer />
    </Router>
  );
}

export default App;
