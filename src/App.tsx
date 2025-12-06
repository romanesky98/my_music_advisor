import Hero from './components/Hero';
import SocialHub from './components/SocialHub';
import PinnedArticle from './components/PinnedArticle';
import RecentArticles from './components/RecentArticles';
import Discover from './components/Discover';
import WhoWeAre from './components/WhoWeAre';
import Mission from './components/Mission';
import OurMethod from './components/OurMethod';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SocialHub />
      <PinnedArticle />
      <RecentArticles />
      <Discover />
      <WhoWeAre />
      <Mission />
      <OurMethod />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
