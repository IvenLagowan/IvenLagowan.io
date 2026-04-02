import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Instagram, Github } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/IvenLagowan" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/tupacopase/" },
  { icon: Mail, label: "Email", href: "mailto:mrchua@example.com" },
];

const ContactSection = () => {
  return (
    <section id="kontak" className="py-24">
      <div className="container space-y-12">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <p className="section-label">Hubungi Saya</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Mari Berkolaborasi
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Tertarik untuk bekerja sama atau sekadar berdiskusi? Jangan ragu
            untuk menghubungi saya melalui channel di bawah ini.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8"
          >
            <a href="https://wa.me/6285354221251" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat via WhatsApp
            </a>
          </Button>

          <div className="flex justify-center gap-6 pt-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                aria-label={s.label}
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Peta Lokasi */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.7536!2d138.8!3d-4.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x686891b0a65a7c8d%3A0x5036d4a55aa2d40!2sWamena%2C%20Jayawijaya%20Regency%2C%20Papua%20Pegunungan!5e0!3m2!1sid!2sid!4v1700000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Wamena, Papua Pegunungan"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-3">
            📍 Wamena, Papua Pegunungan
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
