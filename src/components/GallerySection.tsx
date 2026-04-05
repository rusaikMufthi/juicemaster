import { useState } from "react";
import { X } from "lucide-react";

import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryPrep from "@/assets/gallery-prep.jpg";
import galleryJuices from "@/assets/gallery-juices.jpg";
import galleryFruits from "@/assets/gallery-fruits.jpg";
import galleryServing from "@/assets/gallery-serving.jpg";

const images = [
  { src: galleryInterior, alt: "Our comfortable interior" },
  { src: galleryPrep, alt: "Fresh juice preparation" },
  { src: galleryJuices, alt: "Colorful fresh juices" },
  { src: galleryFruits, alt: "Fresh fruits display" },
  { src: galleryServing, alt: "Serving fresh juice" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="section-title font-display">
          Our <span className="gradient-text">Gallery</span>
        </h2>
        <p className="section-subtitle">A glimpse into our world of freshness</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`overflow-hidden rounded-2xl group cursor-pointer ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] rounded-2xl object-contain animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
