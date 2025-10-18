import { useState, useEffect } from 'react';
import { Heart, Calendar, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date('2025-11-10T12:30:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToRSVP = () => {
    const element = document.getElementById('rsvp');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with multiple layers */}
      <div 
  className="absolute inset-0 bg-cover bg-center scale-105"
  style={{ backgroundImage: `url('/hero-background.jpg')` }}
>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-20 left-10 w-6 h-6 text-primary/30 animate-float" />
        <Sparkles className="absolute top-40 right-20 w-8 h-8 text-accent/30 animate-float" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute bottom-40 left-20 w-7 h-7 text-secondary/30 animate-float" style={{ animationDelay: '2s' }} />
        <Heart className="absolute top-1/3 right-10 w-10 h-10 text-primary/20 animate-float" style={{ animationDelay: '0.5s' }} />
        <Heart className="absolute bottom-1/4 left-1/4 w-8 h-8 text-accent/20 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-md border border-primary/20 mb-8 animate-fade-in">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Save the Date • 10th November 2025</span>
          </div>

          {/* Main Heading */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative inline-block mb-6">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tight">
                Rahul
              </h1>
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-primary"></div>
              <Heart className="w-10 h-10 md:w-12 md:h-12 text-primary fill-primary animate-float" />
              <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tight">
                Sakshi
              </h1>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mt-8 mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Arranged by families, united by destiny.
            <br />
            <span className="text-primary font-medium">Join us as we begin our forever.</span>
          </p>

          {/* Modern Couple Photo with glassmorphism */}
          <div className="mb-16 flex justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              
              {/* Photo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <img 
                      src="/couple-photo.jpg"
                      alt="Sakshi and Rahul" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Event Dates */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-card/40 backdrop-blur-xl px-8 py-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all hover:scale-105 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Engagement</p>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-primary">31st October 2025</p>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-secondary/90 to-primary/90 backdrop-blur-xl px-8 py-6 rounded-2xl border border-secondary/30 hover:border-secondary/50 transition-all hover:scale-105 shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-foreground animate-pulse"></div>
                  <p className="text-xs uppercase tracking-widest text-secondary-foreground/80 font-medium">Wedding Day</p>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-secondary-foreground">10th November 2025</p>
              </div>
            </div>
          </div>

          {/* Modern Countdown */}
          <div className="max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '1s' }}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-muted-foreground/50"></div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                Counting Down
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-muted-foreground/50"></div>
            </div>
            
            <div className="grid grid-cols-4 gap-3 md:gap-4">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((item, index) => (
                <div 
                  key={item.label} 
                  className="group relative"
                  style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Countdown box */}
                  <div className="relative bg-card/60 backdrop-blur-xl p-4 md:p-6 rounded-2xl border border-primary/20 group-hover:border-primary/40 transition-all shadow-lg">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary via-accent to-secondary bg-clip-text text-transparent">
                      {item.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider font-medium">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <Button 
              onClick={scrollToRSVP}
              className="bg-gradient-to-r from-primary via-accent to-secondary hover:shadow-2xl hover:scale-105 transition-all text-white font-semibold text-lg px-8 py-6 rounded-full"
            >
              RSVP Now
              <Heart className="ml-2 w-5 h-5 fill-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
