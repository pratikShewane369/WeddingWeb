import { Heart, Sparkles } from 'lucide-react';

const OurStory = () => {
  return (
    <section id="our-story" className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Enhanced Decorative Background */}
      <div className="absolute top-10 right-10 w-80 h-80 opacity-5">
        <img src="/mandala-pattern.jpg" alt="" className="w-full h-full object-contain animate-float" />
      </div>
      <div className="absolute bottom-10 left-10 w-80 h-80 opacity-5">
        <img src="/mandala-pattern.jpg" alt="" className="w-full h-full object-contain animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Floating sparkles */}
      <Sparkles className="absolute top-1/4 left-20 w-8 h-8 text-primary/20 animate-float" style={{ animationDelay: '0.5s' }} />
      <Sparkles className="absolute bottom-1/3 right-32 w-6 h-6 text-accent/20 animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <Heart className="w-12 h-12 text-primary fill-primary animate-float" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Our Journey Begins
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-primary to-transparent"></div>
          </div>
        </div>

        {/* Modern Story Card */}
        <div className="relative group animate-slide-up">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          
          {/* Main card */}
          <div className="relative bg-card/60 backdrop-blur-xl p-10 md:p-16 rounded-3xl border border-primary/20 shadow-2xl">
            {/* Quote icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-center text-foreground font-light">
                "Arranged by families, <span className="font-semibold text-primary">united by destiny</span>. 
                Our love story might be short, but the <span className="font-semibold text-secondary">depth of our commitment is endless</span>. 
                We are so excited to formalize this beautiful bond and look forward to creating a <span className="font-semibold text-accent">lifetime of memories together</span>."
              </p>
              
              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
              
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-center text-muted-foreground font-light italic">
                Step into this new chapter and celebrate the beginning of our forever with us.
              </p>
            </div>

            {/* Decorative Hearts - Modern version */}
            <div className="flex justify-center gap-6 mt-12">
              {[
                { color: 'primary', delay: '0s' },
                { color: 'secondary', delay: '0.2s' },
                { color: 'accent', delay: '0.4s' },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group/heart relative"
                  style={{ animationDelay: item.delay }}
                >
                  <div className={`absolute inset-0 bg-${item.color} rounded-full blur-xl opacity-30 group-hover/heart:opacity-50 transition-opacity`}></div>
                  <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br from-${item.color}/20 to-${item.color}/10 backdrop-blur-sm border border-${item.color}/30 flex items-center justify-center hover:scale-110 transition-transform`}>
                    <Heart className={`w-7 h-7 text-${item.color} fill-${item.color} animate-float`} style={{ animationDelay: item.delay }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative bottom element */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/50"></div>
            <div className="w-2 h-2 rounded-full bg-accent/50"></div>
            <div className="w-2 h-2 rounded-full bg-secondary/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
