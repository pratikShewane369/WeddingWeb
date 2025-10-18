import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import RSVP from '../components/RSVP';
import GuestWishes from '../components/GuestWishes';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <OurStory />
      <Events />
      <Gallery />
      <RSVP />
      <GuestWishes />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
