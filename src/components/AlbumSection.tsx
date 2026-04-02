import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { useState } from "react";
import { X } from "lucide-react";

const photos = [
  { src: gallery1, caption: "Kegiatan & Event" },
  { src: gallery2, caption: "Kegiatan Mengajar" },
  { src: gallery3, caption: "Kegiatan Mengajar" },
  { src: gallery4, caption: "Prestasi & Pencapaian" },
];

const AlbumSection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="album" className="py-24">
      <div className="container">
        <p className="section-label mb-2">Galeri</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
          Album Foto
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((p) => (
            <div
              key={p.caption}
              className="group relative rounded-xl overflow-hidden cursor-pointer aspect-square"
              onClick={() => setSelected(p.src)}
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                width={512}
                height={512}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="absolute bottom-3 left-3 text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                {p.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary"
            onClick={() => setSelected(null)}
          >
            <X size={28} />
          </button>
          <img
            src={selected}
            alt=""
            className="max-w-[90vw] max-h-[80vh] rounded-xl object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default AlbumSection;
