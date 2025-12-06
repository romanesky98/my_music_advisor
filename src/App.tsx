import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Articles from './pages/Articles';
import DiscoverPage from './pages/DiscoverPage';
import About from './pages/About';
import NewsletterPage from './pages/NewsletterPage';
import ContactPage from './pages/ContactPage';
import SocialPage from './pages/SocialPage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/social" element={<SocialPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
