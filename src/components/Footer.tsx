import { Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-secondary via-primary to-accent text-white py-16 px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-10 left-10 w-8 h-8 text-white/10 animate-float" />
        <Sparkles className="absolute bottom-20 right-20 w-6 h-6 text-white/10 animate-float" style={{ animationDelay: '1s' }} />
        <Heart className="absolute top-1/3 right-10 w-12 h-12 text-white/5 animate-float" style={{ animationDelay: '0.5s' }} />
        <Heart className="absolute bottom-1/3 left-20 w-10 h-10 text-white/5 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main content */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-white/30"></div>
            <Heart className="w-10 h-10 fill-white animate-float" />
            <h3 className="text-4xl md:text-5xl font-bold font-playfair">Rahul & Sakshi</h3>
            <Heart className="w-10 h-10 fill-white animate-float" style={{ animationDelay: '0.5s' }} />
            <div className="h-px w-12 bg-white/30"></div>
          </div>
          
          <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
            <Sparkles className="w-5 h-5" />
            <p className="text-2xl md:text-3xl font-semibold">10th November 2025</p>
            <Sparkles className="w-5 h-5" />
          </div>
          
          <p className="text-white/90 text-lg italic mt-4">With love, from our hearts to yours</p>
        </div>

        {/* Navigation Links - Modern */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { label: 'Our Story', id: 'our-story' },
            { label: 'Events', id: 'events' },
            { label: 'Gallery', id: 'gallery' },
            { label: 'RSVP', id: 'rsvp' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all text-sm font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="relative mb-10">
          <div className="h-px bg-white/20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center text-white/80 text-sm space-y-3">
          <p className="text-base">Thank you for being part of our special day</p>
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 fill-white/60" />
            <p>© 2025 Sakshi & Rahul Wedding • All Rights Reserved</p>
            <Heart className="w-4 h-4 fill-white/60" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
