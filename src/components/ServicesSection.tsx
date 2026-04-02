import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    badge: "Murah",
    title: "Paket Basic",
    price: "Rp50.000",
    period: "/ proyek",
    features: ["Website sederhana", "1x revisi", "Deadline 3 hari"],
  },
  {
    badge: "Populer",
    title: "Paket Standar",
    price: "Rp150.000",
    period: "/ proyek",
    features: [
      "Website lengkap & responsif",
      "3x revisi",
      "Deadline 5 hari",
      "Desain custom",
    ],
    highlight: true,
  },
  {
    badge: "Premium",
    title: "Paket Pro",
    price: "Rp300.000",
    period: "/ proyek",
    features: [
      "Semua fitur Standar",
      "Unlimited revisi",
      "SEO optimized",
      "Support 1 bulan",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <p className="section-label mb-2">Layanan</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
          Jasa &amp; Layanan
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div
              key={p.title}
              className={`rounded-2xl p-6 border space-y-4 transition-all ${
                p.highlight
                  ? "border-primary glow-box bg-card"
                  : "border-border bg-card"
              }`}
            >
              <span className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                {p.badge}
              </span>
              <h3 className="text-xl font-heading font-semibold text-foreground">
                {p.title}
              </h3>
              <div>
                <span className="text-3xl font-heading font-bold text-gradient">
                  {p.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {p.period}
                </span>
              </div>
              <ul className="space-y-2">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="h-4 w-4 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`w-full rounded-lg ${
                  p.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <a
                  href="https://wa.me/6285354221251"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pesan Sekarang
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
