import { Phone, MapPin, User, Sparkles } from 'lucide-react';
import { Card } from './ui/card';

const contacts = [
  {
    name: "Shri. Mohan Shewane",
    role: "Bride's Family",
    phone: ["9921573319"],
  },
  {
    name: "Shri. Nandkumar Ingale",
    role: "Groom's Family",
    phone: ["9921573319"],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Floating elements */}
      <Sparkles className="absolute top-32 left-20 w-8 h-8 text-primary/20 animate-float" />
      <Sparkles className="absolute bottom-32 right-20 w-6 h-6 text-accent/20 animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <Phone className="w-12 h-12 text-primary" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Contact & Directions
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">For any queries or assistance</p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-primary to-transparent"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {contacts.map((contact, index) => (
            <div 
              key={index}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <Card className="relative bg-card/60 backdrop-blur-xl p-8 md:p-10 border-2 border-primary/20 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 rounded-3xl">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">{contact.name}</h3>
                    <p className="text-sm font-medium text-muted-foreground bg-primary/5 px-3 py-1 rounded-full inline-block">{contact.role}</p>
                  </div>
                </div>
                
                {contact.phone.length > 0 && (
                  <div className="space-y-3 pl-20">
                    {contact.phone.map((number, i) => (
                      <a
                        key={i}
                        href={`tel:${number}`}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-secondary/5 to-primary/5 border border-secondary/10 text-foreground hover:border-secondary/30 hover:scale-[1.02] transition-all group/phone"
                      >
                        <Phone className="w-5 h-5 text-secondary group-hover/phone:scale-110 transition-transform" />
                        <span className="font-semibold">{number}</span>
                      </a>
                    ))}
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Location Cards */}
        <div className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Event Locations
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative animate-slide-up">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <Card className="relative bg-card/60 backdrop-blur-xl p-8 border-2 border-primary/20 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 rounded-3xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl md:text-2xl mb-2 text-foreground">Main Wedding Venue</h4>
                    <p className="text-muted-foreground font-medium">Ganapati Mandir, Borala</p>
                    <p className="text-sm text-muted-foreground/80">Tq. Anjangaon (Surji), Amravati</p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/place/Ganpati+Mandir,+Anjangaon+Surji/@21.1685894,77.3145254,15z/data=!4m10!1m2!2m1!1sGanapati+Mandir+Borala+Anjangaon+Surji+Amravati!3m6!1s0x3bd6e5212d97bd65:0x1292028c19f911a!8m2!3d21.1685171!4d77.3359405!15sCi9HYW5hcGF0aSBNYW5kaXIgQm9yYWxhIEFuamFuZ2FvbiBTdXJqaSBBbXJhdmF0aVoxIi9nYW5hcGF0aSBtYW5kaXIgYm9yYWxhIGFuamFuZ2FvbiBzdXJqaSBhbXJhdmF0aZIBDGhpbmR1X3RlbXBsZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSYWFGQnFNM0YzUlJBQqoBdBABKhoiFmdhbmFwYXRpIG1hbmRpciBib3JhbGEoADIfEAEiGyABf-OOlvmhp5AesZPM9msMD_fs-U8UNP3DKzIzEAIiL2dhbmFwYXRpIG1hbmRpciBib3JhbGEgYW5qYW5nYW9uIHN1cmppIGFtcmF2YXRp4AEA-gEFCM8BECM!16s%2Fg%2F1hc25swsb?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold transition-all hover:gap-3 group/link"
                >
                  <span>View on Map</span>
                  <span className="text-lg">→</span>
                </a>
              </Card>
            </div>

            <div className="group relative animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="absolute -inset-1 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <Card className="relative bg-card/60 backdrop-blur-xl p-8 border-2 border-secondary/20 hover:border-secondary/30 hover:shadow-2xl transition-all duration-300 rounded-3xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl md:text-2xl mb-2 text-foreground">Reception Venue</h4>
                    <p className="text-muted-foreground font-medium">Balaji Mahavir Pet, Sultanpoora</p>
                    <p className="text-sm text-muted-foreground/80">Achalapur</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Balaji+Mahavir+Pet+Sultanpoora+Achalapur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-bold transition-all hover:gap-3 group/link"
                >
                  <span>View on Map</span>
                  <span className="text-lg">→</span>
                </a>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
