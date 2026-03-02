import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import portfolio1 from "@/assets/images/Branding/KRD/IMG-20250630-WA0162.jpg.jpeg";
import portfolio2 from "@/assets/images/Branding/Say Bridal/IMG-20250512-WA0160.jpg.jpeg";
import portfolio3 from "@/assets/images/Branding/ARK/IMG-20250605-WA0105.jpg.jpeg";
import portfolio4 from "@/assets/images/Packaging/IMG_20260208_112007.png";
import portfolio5 from "@/assets/images/Poster/IMG-20250927-WA0037.jpg.jpeg";
import portfolio6 from "@/assets/images/Website/Screenshot_2025-12-05-05-24-59-81_68cd479deaf2bd6348b7adee292d9ba9.jpg.jpeg";

const projects = [
  {
    slug: "krd-footwear-1",
    image: portfolio1,
    title: "KRD Natural Food Collection",
    description: "Contemporary natural food branding and visual campaign showcasing innovative food products with dynamic angles and lifestyle positioning.",
    tags: ["Product Photography", "Brand Identity", "Lifestyle Shoot"]
  },
  
  {
    slug: "say-bridal-1",
    image: portfolio2,
    title: "Say Bridal Couture",
    description: "Elegant bridal wear collection featuring exquisite detailing and timeless silhouettes, captured through cinematic photography.",
    tags: ["Fashion Photography", "Editorial", "Bridal Wear"]
  },

  {
    slug: "ark-architectural-1",
    image: portfolio3,
    title: "ARK Architectural Design",
    description: "Modern architectural visualization presenting clean lines and sophisticated spaces through photorealistic 3D rendering.",
    tags: ["Architectural Viz", "3D Rendering", "Interior Design"]
  },

  {
    slug: "packaging-1",
    image: portfolio4,
    title: "Premium Packaging Design",
    description: "Bold and dynamic packaging concept combining vibrant design with innovative typography to create a powerful shelf presence.",
    tags: ["Packaging Design", "3D Mockup", "Product Design"]
  },

  {
    slug: "poster-1",
    image: portfolio5,
    title: "Poster Design",
    description: "Striking poster design with bold typography and vibrant color gradients for impactful visual communication.",
    tags: ["Poster Design", "Event Branding", "Typography"]
  },

  {
    slug: "website-1",
    image: portfolio6,
    title: "Website Design",
    description: "Modern website design featuring smooth animations and clean, user-centric interface for digital presence.",
    tags: ["Web Design", "UI/UX", "Development"]
  },

];

const SelectedWorksSection = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  // Auto-scroll images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));

  const project = projects[current];

  return (
    <section className="py-20 px-6" id="work">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="section-heading">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-green-glow">
            Work
          </span>
        </h2>
        <div className="green-underline mt-4" />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative h-[480px] md:h-[560px] rounded-3xl overflow-hidden shadow-2xl border border-foreground/10 carousel-content cursor-pointer" onClick={() => navigate("/our-work")}>
          {/* Image */}
          <img
            alt={project.title}
            className="w-full h-full object-cover"
            src={project.image}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            style={{ willChange: 'opacity' }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-background/5" />

          {/* Content */}
          <div className="absolute bottom-2 left-12 md:left-20 right-8 md:right-0 p-4 md:p-12">
            <h3 className="text-3xl md:text-5xl font-bold mb-3 text-foreground">{project.title}</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-xl">{project.description}</p>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-badge">{tag}</span>
              ))}
            </div>
          </div>

          {/* Nav buttons */}
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="carousel-nav-btn absolute left-1 md:left-4 top-1/2 -translate-y-1/2 group z-10">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-foreground group-hover:text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="carousel-nav-btn absolute right-1 md:right-4 top-1/2 -translate-y-1/2 group z-10">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-foreground group-hover:text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 ${i === current ? "carousel-dot-active" : "carousel-dot"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorksSection;
