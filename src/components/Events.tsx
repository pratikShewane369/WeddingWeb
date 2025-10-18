import { Calendar, MapPin, Clock, Sparkles } from 'lucide-react';
import { Card } from './ui/card';

const events = [
  {
    title: 'Engagement Ceremony',
    date: '31st October 2025',
    time: '01:00 pm',
    location: 'Mahadev Temple, Kasbegavhan',
    address: 'Tq. Anjangaon (Surji), Amravati',
    mapLink: 'https://www.google.com/maps/place/Mahadeva+temple/@21.0975156,77.4072378,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd6e90029011abd:0x91f3c0fb88999fed!8m2!3d21.0975107!4d77.4118512!16s%2Fg%2F11fhyl72sv?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D',
    gradient: 'from-primary/20 to-accent/20',
  },
  {
    title: 'Sangeet (Bride\'s Side)',
    date: '7th November 2025',
    time: '06:00 pm',
    location: 'Kasbegavhan',
    address: 'Tq. Anjangaon (Surji), Amravati',
    mapLink: 'https://maps.google.com/?q=kasbegavhan+Anjangaon+Surji+Amravati',
    gradient: 'from-accent/20 to-secondary/20',
  },
  {
    title: 'Haldi Ceremony (Bride\'s Side)',
    date: '9th November 2025',
    time: '07:00 pm',
    location: 'Ganapati Mandir, Borala',
    address: 'Tq. Anjangaon (Surji), Amravati',
    mapLink: 'https://www.google.com/maps/place/Ganpati+Mandir,+Anjangaon+Surji/@21.1638616,77.3144094,15z/data=!4m10!1m2!2m1!1sGanapati+Mandir+Borala+Anjangaon+Surji+Amravati!3m6!1s0x3bd6e5212d97bd65:0x1292028c19f911a!8m2!3d21.1685171!4d77.3359405!15sCi9HYW5hcGF0aSBNYW5kaXIgQm9yYWxhIEFuamFuZ2FvbiBTdXJqaSBBbXJhdmF0aVoxIi9nYW5hcGF0aSBtYW5kaXIgYm9yYWxhIGFuamFuZ2FvbiBzdXJqaSBhbXJhdmF0aZIBDGhpbmR1X3RlbXBsZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSYWFGQnFNM0YzUlJBQqoBdBABKhoiFmdhbmFwYXRpIG1hbmRpciBib3JhbGEoADIfEAEiGyABf-OOlvmhp5AesZPM9msMD_fs-U8UNP3DKzIzEAIiL2dhbmFwYXRpIG1hbmRpciBib3JhbGEgYW5qYW5nYW9uIHN1cmppIGFtcmF2YXRp4AEA-gEFCM8BECM!16s%2Fg%2F1hc25swsb?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D',
    gradient: 'from-secondary/20 to-primary/20',
  },
  {
    title: 'Haldi Ceremony (Groom\'s Side)',
    date: '9th November 2025',
    time: '07:00 pm',
    location: 'Sultanpoora, Achalpur',
    address: 'Tq. Achalpur, Amravati',
    mapLink: 'https://maps.google.com/?q=Sultanpoora+Achalpur',
    gradient: 'from-primary/20 to-secondary/20',
  },
  {
    title: 'Wedding Ceremony',
    date: '10th November 2025',
    time: '12:30 PM',
    location: 'Ganapati Mandir, Borala',
    address: 'Tq. Anjangaon (Surji), Amravati',
    mapLink: 'https://www.google.com/maps/place/Ganpati+Mandir,+Anjangaon+Surji/@21.1638616,77.3144094,15z/data=!4m10!1m2!2m1!1sGanapati+Mandir+Borala+Anjangaon+Surji+Amravati!3m6!1s0x3bd6e5212d97bd65:0x1292028c19f911a!8m2!3d21.1685171!4d77.3359405!15sCi9HYW5hcGF0aSBNYW5kaXIgQm9yYWxhIEFuamFuZ2FvbiBTdXJqaSBBbXJhdmF0aVoxIi9nYW5hcGF0aSBtYW5kaXIgYm9yYWxhIGFuamFuZ2FvbiBzdXJqaSBhbXJhdmF0aZIBDGhpbmR1X3RlbXBsZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSYWFGQnFNM0YzUlJBQqoBdBABKhoiFmdhbmFwYXRpIG1hbmRpciBib3JhbGEoADIfEAEiGyABf-OOlvmhp5AesZPM9msMD_fs-U8UNP3DKzIzEAIiL2dhbmFwYXRpIG1hbmRpciBib3JhbGEgYW5qYW5nYW9uIHN1cmppIGFtcmF2YXRp4AEA-gEFCM8BECM!16s%2Fg%2F1hc25swsb?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D',
    gradient: 'from-secondary/30 to-primary/30',
    highlight: true,
  },
  {
    title: 'Reception (Groom\'s Side)',
    date: '11th November 2025',
    time: '07:00 pm',
    location: 'Balaji Mahavir Pet, Sultanpoora',
    address: 'Achalapur',
    mapLink: 'https://www.google.com/maps/place/%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80+%E0%A4%AC%E0%A4%BE%E0%A4%B2%E0%A4%BE%E0%A4%9C%E0%A5%80+%E0%A4%8A%E0%A4%B0%E0%A5%8D%E0%A4%AB+%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%82%E0%A4%95%E0%A4%9F%E0%A5%87%E0%A4%B6+%E0%A4%B8%E0%A4%82%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A4%BE%E0%A4%A8+%E0%A4%AE%E0%A4%B9%E0%A4%BE%E0%A4%B5%E0%A5%80%E0%A4%B0+%E0%A4%AA%E0%A5%87%E0%A4%A0,+%E0%A4%B8%E0%A5%81%E0%A4%B2%E0%A4%A4%E0%A4%BE%E0%A4%A8%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A4%BE+%E0%A4%85%E0%A4%9A%E0%A4%B2%E0%A4%AA%E0%A5%82%E0%A4%B0/@21.2414606,77.5067664,16.25z/data=!4m14!1m7!3m6!1s0x3bd6f3006187209f:0x3f0e1f9a87a55b5d!2z4KS24KWN4KSw4KWAIOCkrOCkvuCksuCkvuCknOClgCDgpIrgpLDgpY3gpKsg4KS14KWN4KSv4KSC4KSV4KSf4KWH4KS2IOCkuOCkguCkuOCljeCkpeCkvuCkqCDgpK7gpLngpL7gpLXgpYDgpLAg4KSq4KWH4KSgLCDgpLjgpYHgpLLgpKTgpL7gpKjgpKrgpYLgpLDgpL4g4KSF4KSa4KSy4KSq4KWC4KSw!8m2!3d21.2412613!4d77.5124721!16s%2Fg%2F11w7fr3502!3m5!1s0x3bd6f3006187209f:0x3f0e1f9a87a55b5d!8m2!3d21.2412613!4d77.5124721!16s%2Fg%2F11w7fr3502?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D',
    gradient: 'from-accent/20 to-primary/20',
  },
];

const Events = () => {
  return (
    <section id="events" className="py-32 px-4 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Enhanced Decorative Border */}
      <div className="absolute top-0 left-0 right-0 h-40 opacity-10">
        <img src="/floral-border.jpg" alt="A floral border" className="w-full h-full object-cover" />
      </div>
      
      {/* Floating elements */}
      <Sparkles className="absolute top-20 right-20 w-8 h-8 text-primary/20 animate-float" />
      <Sparkles className="absolute bottom-40 left-20 w-6 h-6 text-accent/20 animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <Calendar className="w-12 h-12 text-primary" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Events & Schedule
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">Join us in our celebration of love</p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-primary to-transparent"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${event.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity ${
                event.highlight ? 'opacity-30 group-hover:opacity-50' : ''
              }`}></div>
              
              <Card 
                className={`relative bg-card/60 backdrop-blur-xl p-8 border-2 ${
                  event.highlight ? 'border-secondary/50 shadow-2xl' : 'border-primary/20'
                } hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 rounded-3xl overflow-hidden`}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  event.highlight ? 'from-secondary via-primary to-accent' : 'from-primary via-accent to-primary'
                }`}></div>
                
                {event.highlight && (
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      Main Event
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                )}
                
                <h3 className={`text-3xl font-bold mb-6 ${
                  event.highlight ? 'bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent' : 'text-foreground'
                }`}>
                  {event.title}
                </h3>
                
                <div className="space-y-4 text-foreground/90">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">{event.date}</p>
                      {event.time && (
                        <p className="text-sm flex items-center gap-2 mt-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">{event.time}</span>
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-secondary/5 to-primary/5 border border-secondary/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">{event.location}</p>
                      {event.address && <p className="text-sm text-muted-foreground mt-1">{event.address}</p>}
                    </div>
                  </div>
                </div>
                
                <a
                  href={event.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-all hover:gap-3 group/link"
                >
                  <MapPin className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                  <span>View on Google Maps</span>
                  <span className="text-xs">→</span>
                </a>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
