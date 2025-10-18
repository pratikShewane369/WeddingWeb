import { Heart, Quote, Sparkles } from 'lucide-react';
import { Card } from './ui/card';

const sampleWishes = [
  {
    name: "Family & Friends",
    message: "Wishing you both a lifetime of love, happiness, and endless blessings. May your journey together be filled with beautiful moments!",
  },
  {
    name: "Well-wishers",
    message: "Congratulations on your special day! May your love story be as magical and charming as you both are. Best wishes for your future together!",
  },
  {
    name: "Loved Ones",
    message: "May your marriage be blessed with love, joy, and companionship. Wishing you all the happiness in the world!",
  },
];

const GuestWishes = () => {
  return (
    <section id="wishes" className="py-32 px-4 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Floating hearts decoration - Enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/5 animate-float"
            style={{
              width: `${60 + i * 10}px`,
              height: `${60 + i * 10}px`,
              left: `${10 + i * 12}%`,
              top: `${5 + i * 11}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>
      
      {/* Floating sparkles */}
      <Sparkles className="absolute top-20 right-20 w-8 h-8 text-primary/20 animate-float" />
      <Sparkles className="absolute bottom-40 left-20 w-6 h-6 text-accent/20 animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <Quote className="w-12 h-12 text-primary" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Your Blessings Mean the World
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">Heartfelt messages from our dear ones</p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-primary to-transparent"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleWishes.map((wish, index) => (
            <div 
              key={index}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <Card className="relative bg-card/60 backdrop-blur-xl p-8 border-2 border-primary/20 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 rounded-3xl h-full">
                {/* Top quote decoration */}
                <div className="absolute -top-4 left-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="pt-6">
                  <p className="text-foreground/90 italic mb-6 leading-relaxed text-base">
                    "{wish.message}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-primary fill-primary animate-float" />
                    </div>
                    <p className="font-bold text-primary">{wish.name}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced call-to-action */}
        <div className="relative mt-20 group animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div className="relative text-center p-10 md:p-12 bg-card/60 backdrop-blur-xl rounded-3xl border-2 border-primary/20 shadow-xl">
            <Sparkles className="w-8 h-8 mx-auto mb-4 text-primary animate-float" />
            <p className="text-xl md:text-2xl text-foreground/90 font-light">
              Share your wishes and blessings through the RSVP form above!
            </p>
            <div className="flex justify-center gap-2 mt-6">
              <Heart className="w-5 h-5 text-primary fill-primary animate-float" />
              <Heart className="w-5 h-5 text-accent fill-accent animate-float" style={{ animationDelay: '0.2s' }} />
              <Heart className="w-5 h-5 text-secondary fill-secondary animate-float" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestWishes;
