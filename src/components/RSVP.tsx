import { useState } from 'react';
import { Mail, User, Users, MessageSquare, Sparkles, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from './ui/checkbox';

const RSVP = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    events: [] as string[],
    message: '',
  });

  const events = [
    'Engagement (31st Oct)',
    'Sangeet (7th Nov)',
    'Haldi (9th Nov)',
    'Wedding (10th Nov)',
    'Reception (11th Nov)',
  ];

  // ✅ Form Submit Handler (Formspree Integration)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mblzwbnr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          guests: formData.guests,
          events: formData.events.join(", "),
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Thank you for your RSVP! 💕",
          description: "We've received your response and can't wait to celebrate with you!",
        });

        // Reset form
        setFormData({
          name: '',
          guests: '1',
          events: [],
          message: '',
        });
      } else {
        toast({
          title: "Oops! Something went wrong 😞",
          description: "Please try again later or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error ❌",
        description: "Unable to send your RSVP. Please check your internet connection.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEventToggle = (event: string) => {
    setFormData(prev => ({
      ...prev,
      events: prev.events.includes(event)
        ? prev.events.filter(e => e !== event)
        : [...prev.events, event],
    }));
  };

  return (
    <section id="rsvp" className="py-32 px-4 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Floating elements */}
      <Sparkles className="absolute top-20 left-10 w-8 h-8 text-primary/20 animate-float" />
      <Sparkles className="absolute bottom-20 right-10 w-6 h-6 text-accent/20 animate-float" style={{ animationDelay: '1s' }} />
      <Heart className="absolute top-1/2 left-20 w-10 h-10 text-secondary/10 animate-float" style={{ animationDelay: '0.5s' }} />

      <div className="container mx-auto max-w-3xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <Mail className="w-12 h-12 text-primary" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            RSVP
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">We'd love to have you there!</p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-primary to-transparent"></div>
          </div>
        </div>

        {/* Form */}
        <div className="relative group animate-slide-up">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>

          <form onSubmit={handleSubmit} className="relative bg-card/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border-2 border-primary/20 shadow-2xl space-y-8">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>

            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-3 text-foreground">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  Full Name
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="bg-background/50 backdrop-blur-sm border-2 border-primary/20 focus:border-primary/50 h-12 text-base rounded-xl"
                />
              </div>

              {/* Guests */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-3 text-foreground">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                    <Users className="w-4 h-4 text-secondary" />
                  </div>
                  Number of Guests
                </label>
                <Input
                  required
                  type="number"
                  min="1"
                  max="10"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="bg-background/50 backdrop-blur-sm border-2 border-primary/20 focus:border-primary/50 h-12 text-base rounded-xl"
                />
              </div>

              {/* Events */}
              <div>
                <label className="text-sm font-semibold mb-4 block text-foreground">
                  Which event(s) will you attend?
                </label>
                <div className="space-y-4 bg-gradient-to-br from-muted/30 to-muted/10 p-6 rounded-2xl border border-primary/10">
                  {events.map((event) => (
                    <div key={event} className="flex items-center space-x-3 group/check">
                      <Checkbox
                        id={event}
                        checked={formData.events.includes(event)}
                        onCheckedChange={() => handleEventToggle(event)}
                        className="border-2"
                      />
                      <label
                        htmlFor={event}
                        className="text-base leading-none cursor-pointer group-hover/check:text-primary transition-colors flex-1"
                      >
                        {event}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-3 text-foreground">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-accent" />
                  </div>
                  Message or Wishes for the Couple
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your blessings and wishes..."
                  className="bg-background/50 backdrop-blur-sm border-2 border-primary/20 focus:border-primary/50 min-h-40 text-base rounded-xl resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-gradient-to-r from-secondary via-primary to-accent hover:shadow-2xl hover:scale-[1.02] transition-all text-white font-bold text-lg py-7 rounded-2xl group/btn relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {loading ? "Sending..." : "Send Your Blessings"}
                {!loading && <Heart className="w-5 h-5 fill-white group-hover/btn:animate-float" />}
              </span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
