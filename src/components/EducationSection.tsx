import { GraduationCap } from "lucide-react";

const education = [
  {
    period: "2024 – Sekarang",
    school: "Universitas Sains dan Teknologi Jayapura",
    desc: "Aktif di komunitas SaCode dan NITCODE dan mengembangkan berbagai proyek teknologi.",
  },
  {
    period: "2020 – 2023",
    school: "SMA Favorit",
    desc: "Menyelesaikan jenjang SMA dengan prestasi dan mulai mengenal dunia coding.",
  },
];

const EducationSection = () => {
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <p className="section-label mb-2">Pendidikan</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
          Riwayat Pendidikan
        </h2>

        <div className="relative border-l-2 border-border pl-8 space-y-10">
          {education.map((e) => (
            <div key={e.school} className="relative">
              <div className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full bg-primary" />
              <p className="text-xs text-primary font-medium mb-1">
                {e.period}
              </p>
              <h3 className="text-lg font-heading font-semibold text-foreground flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                {e.school}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
