import { Calendar } from "lucide-react";

const articles = [
  {
    title: "Cara Memulai Karir di Dunia Teknologi",
    date: "26 Mar 2026",
    desc: "Panduan lengkap untuk anak muda yang ingin berkarir di bidang teknologi. Tips dan trik dari pengalaman pribadi.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
  },
  {
    title: "Tips Public Speaking untuk Pemula",
    date: "20 Mar 2026",
    desc: "Belajar cara berbicara di depan umum dengan percaya diri. Teknik-teknik yang terbukti efektif.",
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
  },
  {
    title: "Pentingnya Personal Branding di Era Digital",
    date: "15 Mar 2026",
    desc: "Membangun personal branding yang kuat di era digital. Strategi dan langkah-langkah praktis.",
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24">
      <div className="container">
        <p className="section-label mb-2">Tulisan Terbaru</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
          Blog
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article
              key={a.title}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:glow-box transition-all duration-300 cursor-pointer"
            >
              <div className="overflow-hidden aspect-video">
                <img
                  src={a.img}
                  alt={a.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                  {a.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {a.date}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {a.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
