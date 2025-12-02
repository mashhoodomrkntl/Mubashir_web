'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: 'Message Sent!',
          description: 'Thank you for reaching out. I will get back to you soon.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again or contact directly via email.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
              Get In <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's discuss how I can help your business achieve its financial goals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Mail,
                title: 'Email',
                value: 'mubashirkntl@gmail.com',
                link: 'mailto:mubashirkntl@gmail.com',
              },
              {
                icon: Phone,
                title: 'Phone',
                value: '+97466437523',
                link: 'tel:+919876543210',
              },
              {
                icon: MapPin,
                title: 'Location',
                value: 'Kerala, India',
                link: null,
              },
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-semibold mb-2">{contact.title}</h3>
                  {contact.link ? (
                    <a
                      href={contact.link}
                      className="text-sm text-muted-foreground hover:text-blue-500 transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{contact.value}</p>
                  )}
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-2xl font-bold font-space-grotesk mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background/50 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full gap-2 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-8 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border-blue-500/20">
                <h3 className="text-2xl font-bold font-space-grotesk mb-4">Connect With Me</h3>
                <p className="text-muted-foreground mb-6">
                  Follow me on social media for updates on financial insights, tips, and industry trends.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                    <a href="mailto:mubashirkntl@gmail.com">
                      <Mail className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </Card>

              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                <h3 className="text-xl font-bold mb-4">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond to all inquiries within 24 hours during business days.
                  For urgent matters, please call directly.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
