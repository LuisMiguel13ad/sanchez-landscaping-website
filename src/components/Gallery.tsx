import patioImg from "@/assets/gallery-patio.jpg";
import retainingWallImg from "@/assets/gallery-retaining-wall.jpg";
import lawnImg from "@/assets/gallery-lawn.jpg";
import gardenImg from "@/assets/gallery-garden.jpg";

const galleryImages = [
  { src: patioImg, alt: "Modern patio with stone pavers" },
  { src: retainingWallImg, alt: "Natural stone retaining wall" },
  { src: lawnImg, alt: "Professional lawn maintenance" },
  { src: gardenImg, alt: "Vibrant garden landscaping" },
];

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

        <div className="grid md:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-lg font-semibold">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;