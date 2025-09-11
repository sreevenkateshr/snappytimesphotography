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
import Kevinalbum from './pages/Kevinalbum';
import Testimonial from './pages/Testimonial';
import Outdoor from './pages/Outdoor';
import Indoor from './pages/Indoor';
import Hindu from './pages/hindu';
import Muslim from './pages/muslim';
import Christain from './pages/christain';
import Galleryfirst from './pages/galleryone';
import Gallerytwo from './pages/gallerytwo';
import Gallerythree from './pages/gallerythree';
import Galleryfour from './pages/galleryfour';
import Galleryfive from './pages/galleryfive';
import Gallerysix from './pages/gallerysix';
import Galleryseven from './pages/galleryseven';



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
          <Route path="/kevinalbum" element={<Kevinalbum />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/outdoor" element={<Outdoor />} />
          <Route path="/indoor" element={<Indoor />} />
          <Route path="/hindu" element={<Hindu />} />
          <Route path="/muslim" element={<Muslim />} /> 
          <Route path="/christian" element={<Christain />} />
          <Route path="/galleryfirst" element={<Galleryfirst/>}/>
          <Route path="/gallerytwo" element={<Gallerytwo/>}/>
          <Route path="/gallerythree" element={<Gallerythree/>}/>
          <Route path="/galleryfour" element={<Galleryfour/>}/>
          <Route path="/galleryfive" element={<Galleryfive/>}/>
          <Route path="/gallerysix" element={<Gallerysix/>}/>
          <Route path="/galleryseven" element={<Galleryseven/>}/>

          
        </Routes>
     {/* </main>*/}
      <Footer />
    </Router>
  );
}

export default App;


