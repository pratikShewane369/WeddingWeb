import { Camera, Sparkles } from 'lucide-react';

const Gallery = () => {
  return (
    <section id="gallery" className="py-32 px-4 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Floating elements */}
      <Sparkles className="absolute top-32 left-10 w-8 h-8 text-primary/20 animate-float" />
      <Sparkles className="absolute bottom-32 right-10 w-6 h-6 text-accent/20 animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto max-w-6xl">
        {/* Modern Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <Camera className="w-12 h-12 text-primary" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Captured Moments
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">Cherished memories of our journey</p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-primary to-transparent"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {/* Main couple photo - Enhanced */}
          <div className="md:col-span-2 lg:col-span-3">
            <div className="relative group">
              {/* Outer glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Photo container */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-primary/20 shadow-2xl">
                <img src="/couple-photo.jpg" alt="A Couple Photo"
                  className="w-full h-[500px] md:h-[600px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
                      <Sparkles className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-medium">Featured Photo</span>
                    </div>
                    <h3 className="text-white text-3xl md:text-4xl font-bold mb-2">Rahul & Sakshi</h3>
                    <p className="text-white/90 text-lg">Our Beautiful Journey Together</p>
                  </div>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Placeholder boxes - Enhanced */}
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="relative group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              
              {/* Main box */}
              <div className="relative overflow-hidden rounded-3xl bg-card/60 backdrop-blur-xl border-2 border-dashed border-primary/30 h-72 flex flex-col items-center justify-center hover:border-primary/50 transition-all duration-300 group-hover:scale-[1.02]">
                <div className="text-center text-muted-foreground">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Camera className="w-10 h-10 opacity-40 group-hover:opacity-60 transition-opacity" />
                  </div>
                  <p className="text-sm font-medium">More photos coming soon</p>
                  <p className="text-xs text-muted-foreground/60 mt-2">Gallery {i}/3</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced bottom note */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 backdrop-blur-sm border border-primary/10">
            <Sparkles className="w-5 h-5 text-primary animate-float" />
            <p className="text-muted-foreground italic font-light">
              More beautiful moments will be added as we get closer to our special day!
            </p>
            <Sparkles className="w-5 h-5 text-accent animate-float" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
