import projectWeb from "@/assets/project-web.jpg";
import projectYoutube from "@/assets/project-youtube.jpg";
import projectJournalism from "@/assets/project-journalism.jpg";
import projectCollab from "@/assets/project-collab.jpg";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    img: projectWeb,
    category: "Website",
    title: "Web Developer",
    desc: "Membangun dan mengembangkan berbagai website menggunakan teknologi modern. Fokus pada UI/UX yang menarik dan performa tinggi.",
  },
  {
    img: projectYoutube,
    category: "YouTube",
    title: "Konten Kreator Edukasi",
    desc: "Membuat konten edukasi di YouTube seputar teknologi, coding, dan wawasan umum untuk anak muda.",
  },
  {
    img: projectJournalism,
    category: "Blog",
    title: "Penulis & Blogger",
    desc: "Aktif menulis artikel, opini, dan tutorial di blog pribadi serta platform lainnya.",
  },
  {
    img: projectCollab,
    category: "Kolaborasi",
    title: "Video Kolaborasi",
    desc: "Kolaborasi dalam membuat konten video yang informatif dan mengedukasi bersama kreator lain.",
  },
];

const PortfolioSection = () => {
  return (
    <section id="karya" className="py-24">
      <div className="container">
        <p className="section-label mb-2">Karya Terbaik</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
          Apa yang Sudah Dibuat
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:glow-box transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={768}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <span className="absolute top-4 left-4 text-xs font-medium bg-primary/90 text-primary-foreground px-3 py-1 rounded-full">
                  {p.category}
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-heading font-semibold text-foreground flex items-center gap-2">
                  {p.title}
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
