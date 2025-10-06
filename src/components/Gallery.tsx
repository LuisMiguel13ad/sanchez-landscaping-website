import React from "react";
import patioImg from "@/assets/gallery-patio.jpg";
import retainingWallImg from "@/assets/gallery-retaining-wall.jpg";
import lawnImg from "@/assets/gallery-lawn.jpg";
import gardenImg from "@/assets/gallery-garden.jpg";
// Images in exact order 1-9
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Real before/after images from Sanches Landscaping
import patioBeforeImg from "@/assets/gallery-patio-before.jpg";
import patioAfterImg from "@/assets/gallery-patio-after.jpg";
import wallAfterImg from "@/assets/gallery-retaining-wall-after.jpg";
import lawnBeforeImg from "@/assets/gallery-lawn-before.jpg";
import lawnAfterImg from "@/assets/gallery-lawn-after.jpg";
import gardenBeforeImg from "@/assets/gallery-garden-before.jpg";
import gardenAfterImg from "@/assets/gallery-garden-after.jpg";

const galleryImages = [
  // Images in exact order 1-9 as specified
  { src: gallery1, alt: "Image 1" },
  { src: gallery2, alt: "Image 2" },
  { src: gallery3, alt: "Image 3" },
  { src: gallery4, alt: "Image 4" },
  { src: gallery5, alt: "Image 5" },
  { src: gallery6, alt: "Image 6" },
  { src: gallery7, alt: "Image 7" },
  { src: gallery8, alt: "Image 8" },
  { src: gallery9, alt: "Image 9" },
];

// Lightbox Gallery
const LightboxGallery = ({ images }: { images: { src: string; alt: string; title: string }[] }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const openAt = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openAt(index)}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-left"
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-lg font-semibold">{image.title}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl p-0 bg-black/90">
          <div className="relative">
            <img
              src={images[currentIndex]?.src}
              alt={images[currentIndex]?.alt}
              className="w-full h-[70vh] object-contain bg-black"
            />
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <button
                onClick={prev}
                aria-label="Previous"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white text-base font-semibold text-center">{images[currentIndex]?.title}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            See the quality craftsmanship we bring to every outdoor space
          </p>
        </div>

        <LightboxGallery images={galleryImages.map(({ src, alt }) => ({ src, alt, title: alt }))} />
      </div>
    </section>
  );
};

export default Gallery;