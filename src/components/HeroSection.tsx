import profilePhoto from "@/assets/profile-photo.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Instagram } from "lucide-react";
import { useEffect, useState } from "react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

const stats = [
  { value: "—", label: "SUBSCRIBER" },
  { value: "5+", label: "PROYEK" },
  { value: "2024", label: "AKTIF SEJAK" },
];

const heroSocials = [
  { icon: Github, href: "https://github.com/IvenLagowan", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/tupacopase/", label: "Instagram" },
];

const taglineWords = ["Kreator", "Developer", "Entrepreneur", "Tech Enthusiast"];
const photoWords = ["HAPPY CODING", "MR CHUA LAGOWAN"];

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const typedText = useTypingAnimation(taglineWords);
  const photoTyped = useTypingAnimation(photoWords, 80, 2500);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 overflow-hidden relative">
      {/* Parallax background elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className="space-y-8 animate-fade-up"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            <p className="section-label h-5">
              // <span className="text-primary">{typedText}</span>
              <span className="animate-pulse">|</span> //
            </p>

            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[0.95] tracking-tight">
              Name-Ku{" "}
              <span className="text-gradient italic font-extrabold">
                Mr Chua
              </span>{" "}
              Muda &amp; Berkarya
            </h1>

            <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
              Saya adalah Mr Chua, seorang kreator dan developer muda yang suka
              mengeksplorasi hal baru, terutama yang berkaitan dengan teknologi,
              informasi, dan komunikasi.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium"
              >
                <a href="#profil">
                  Kenal Lebih Dekat <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-border text-foreground hover:bg-secondary px-6 py-3 rounded-lg"
              >
                <a href="#karya">Lihat Karya</a>
              </Button>
            </div>

            <div className="flex gap-10 pt-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-heading font-bold text-gradient">
                    {s.value}
                  </p>
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-2">
              {heroSocials.map((s) => (
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

          <div
            className="flex justify-center lg:justify-end"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 to-transparent blur-sm" />
              <img
                src={profilePhoto}
                alt="Mr Chua"
                width={420}
                height={520}
                className="relative rounded-2xl border-2 border-border object-cover w-[320px] md:w-[400px] aspect-[3/4]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-background/90 via-background/50 to-transparent rounded-b-2xl">
                <p className="font-heading font-bold text-lg md:text-xl text-primary">
                  {photoTyped}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
