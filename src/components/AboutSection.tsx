import profilePhoto from "@/assets/profile-photo.jpg";
import { Badge } from "@/components/ui/badge";
import { MapPin, School, Calendar, Target } from "lucide-react";

const tags = ["Kreator", "Developer", "Entrepreneur", "Tech Enthusiast"];
const details = [
  { icon: MapPin, label: "Kota", value: "Wamena, Papua Pegunungan" },
  { icon: School, label: "Pendidikan", value: "Mahasiswa" },
  { icon: Calendar, label: "Aktif Sejak", value: "2024" },
  { icon: Target, label: "Fokus", value: "Teknologi & Kreativitas" },
];

const AboutSection = () => {
  return (
    <section id="profil" className="py-24">
      <div className="container">
        <p className="section-label mb-2">Tentang Saya</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
          Profil Singkat
        </h2>

        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          <div className="space-y-4">
            <img
              src={profilePhoto}
              alt="Mr Chua"
              loading="lazy"
              width={300}
              height={300}
              className="rounded-2xl border border-border object-cover w-full aspect-square"
            />
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-semibold">
              Mr Chua — Kreator &amp; Developer Muda
            </h3>
            <blockquote className="text-muted-foreground italic border-l-2 border-primary pl-4">
              "Belajar saja tidak cukup. Kita harus berkarya. Karena karya
              adalah bukti nyata dari apa yang kita pahami."
            </blockquote>

            <p className="text-muted-foreground leading-relaxed">
              Perjalanan saya dimulai saat saya sadar bahwa sukses membutuhkan
              aksi nyata. Sejak saat itu, saya mulai belajar hal-hal baru
              terutama di bidang teknologi. Saya memberanikan diri membuat
              berbagai proyek, mulai dari website hingga konten edukasi.
              Pengalaman mengajar, public speaking, dan mengikuti berbagai lomba
              membentuk saya menjadi pribadi yang terus berkembang.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
                >
                  <d.icon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">{d.label}</p>
                    <p className="text-sm font-medium text-foreground">
                      {d.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
