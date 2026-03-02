import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Branding - ARK
import ar1 from "@/assets/images/Branding/ARK/IMG-20250605-WA0090.jpg.jpeg";
import ar2 from "@/assets/images/Branding/ARK/IMG-20250605-WA0093.jpg.jpeg";
import ar3 from "@/assets/images/Branding/ARK/IMG-20250605-WA0096.jpg.jpeg";
import ar4 from "@/assets/images/Branding/ARK/IMG-20250605-WA0104.jpg.jpeg";
import ar5 from "@/assets/images/Branding/ARK/IMG-20250605-WA0105.jpg.jpeg";

// Branding - KRD
import krd1 from "@/assets/images/Branding/KRD/IMG-20250627-WA0157.jpg.jpeg";
import krd2 from "@/assets/images/Branding/KRD/IMG-20250627-WA0158.jpg.jpeg";
import krd3 from "@/assets/images/Branding/KRD/IMG-20250627-WA0162.jpg.jpeg";
import krd4 from "@/assets/images/Branding/KRD/IMG-20250627-WA0166.jpg.jpeg";
import krd5 from "@/assets/images/Branding/KRD/IMG-20250627-WA0167.jpg.jpeg";
import krd6 from "@/assets/images/Branding/KRD/IMG-20250627-WA0172.jpg.jpeg";
import krd7 from "@/assets/images/Branding/KRD/IMG-20250627-WA0173.jpg.jpeg";
import krd8 from "@/assets/images/Branding/KRD/IMG-20250627-WA0174.jpg.jpeg";
import krd9 from "@/assets/images/Branding/KRD/IMG-20250627-WA0176.jpg.jpeg";
import krd10 from "@/assets/images/Branding/KRD/IMG-20250630-WA0162.jpg.jpeg";
import krd11 from "@/assets/images/Branding/KRD/IMG-20250630-WA0163.jpg.jpeg";
import krd12 from "@/assets/images/Branding/KRD/IMG-20250630-WA0170.jpg.jpeg";

// Branding - Say Bridal
import sb1 from "@/assets/images/Branding/Say Bridal/IMG-20250425-WA0164(1).jpg.jpeg";
import sb2 from "@/assets/images/Branding/Say Bridal/IMG-20250507-WA0142.jpg.jpeg";
import sb3 from "@/assets/images/Branding/Say Bridal/IMG-20250512-WA0152.jpg.jpeg";
import sb4 from "@/assets/images/Branding/Say Bridal/IMG-20250512-WA0158.jpg.jpeg";
import sb5 from "@/assets/images/Branding/Say Bridal/IMG-20250512-WA0159.jpg.jpeg";
import sb6 from "@/assets/images/Branding/Say Bridal/IMG-20250512-WA0160.jpg.jpeg";
import sb7 from "@/assets/images/Branding/Say Bridal/IMG-20250512-WA0162.jpg.jpeg";
import sb8 from "@/assets/images/Branding/Say Bridal/IMG-20250512-WA0164.jpg.jpeg";
import sb9 from "@/assets/images/Branding/Say Bridal/IMG-20250512-WA0166.jpg.jpeg";
import sb10 from "@/assets/images/Branding/Say Bridal/IMG-20250512-WA0169.jpg.jpeg";
import sb11 from "@/assets/images/Branding/Say Bridal/IMG-20250513-WA0173.jpg.jpeg";
import sb12 from "@/assets/images/Branding/Say Bridal/IMG-20250513-WA0174.jpg.jpeg";
import sb13 from "@/assets/images/Branding/Say Bridal/IMG-20250513-WA0175.jpg.jpeg";

// Branding - Vasan Argo
import va1 from "@/assets/images/Branding/Vasan argo/IMG_20260225_215311.jpg.jpeg";
import va2 from "@/assets/images/Branding/Vasan argo/IMG_20260225_215324.jpg.jpeg";
import va3 from "@/assets/images/Branding/Vasan argo/IMG_20260225_215336.jpg.jpeg";
import va4 from "@/assets/images/Branding/Vasan argo/IMG_20260225_215349.jpg.jpeg";
import va5 from "@/assets/images/Branding/Vasan argo/IMG_20260225_215402.jpg.jpeg";
import va6 from "@/assets/images/Branding/Vasan argo/IMG_20260225_215414.jpg.jpeg";

// Packaging
import pkg1 from "@/assets/images/Packaging/IMG_20260208_112007.png";
import pkg2 from "@/assets/images/Packaging/IMG_20260208_113615.png";
import pkg3 from "@/assets/images/Packaging/IMG-20251008-WA0007.jpg.jpeg";
import pkg4 from "@/assets/images/Packaging/IMG-20251008-WA0009.jpg.jpeg";
import pkg5 from "@/assets/images/Packaging/IMG-20260220-WA0008.jpg.jpeg";
import pkg6 from "@/assets/images/Packaging/IMG-20260224-WA0028.jpg.jpeg";
import pkg7 from "@/assets/images/Packaging/IMG-20260224-WA0035.jpg.jpeg";

// Poster
import pst1 from "@/assets/images/Poster/IMG-20250927-WA0037.jpg.jpeg";
import pst2 from "@/assets/images/Poster/IMG-20250927-WA0039.jpg.jpeg";
import pst3 from "@/assets/images/Poster/IMG-20250927-WA0041.jpg.jpeg";
import pst4 from "@/assets/images/Poster/IMG-20250927-WA0045.jpg.jpeg";
import pst5 from "@/assets/images/Poster/IMG-20251026-WA0013.jpg.jpeg";
import pst6 from "@/assets/images/Poster/IMG-20251031-WA0105.jpg.jpeg";
import pst7 from "@/assets/images/Poster/IMG-20251109-WA0000.jpg.jpeg";
import pst8 from "@/assets/images/Poster/IMG-20251109-WA0002.jpg.jpeg";
import pst9 from "@/assets/images/Poster/IMG-20251109-WA0004.jpg.jpeg";
import pst10 from "@/assets/images/Poster/IMG-20251110-WA0061.jpg.jpeg";
import pst11 from "@/assets/images/Poster/IMG-20251115-WA0096.jpg.jpeg";
import pst12 from "@/assets/images/Poster/IMG-20251123-WA0125.jpg.jpeg";
import pst13 from "@/assets/images/Poster/IMG-20251124-WA0065.jpg.jpeg";
import pst14 from "@/assets/images/Poster/IMG-20251129-WA0045.jpg.jpeg";

// Website
import web1 from "@/assets/images/Website/IMG_20260226_224229.jpg.jpeg";
import web2 from "@/assets/images/Website/IMG-20250512-WA0165.jpg.jpeg";
import web3 from "@/assets/images/Website/IMG-20250605-WA0110.jpg.jpeg";
import web4 from "@/assets/images/Website/IMG-20250630-WA0164.jpg.jpeg";
import web5 from "@/assets/images/Website/Screenshot_2025-12-05-05-24-59-81_68cd479deaf2bd6348b7adee292d9ba9.jpg.jpeg";

type Category = "All" | "Branding" | "Packaging" | "Posters" | "Websites & UI Design";

interface Project {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
  category: Category;
}

const allProjects: Project[] = [
  // ARK - One main project with all ARK images
  {
    id: 1,
    slug: "ark-architectural",
    image: ar1,
    title: "ARK Architectural Vision",
    description: "Modern architectural visualization presenting clean lines and sophisticated spaces through photorealistic 3D rendering.",
    tags: ["Architectural Viz", "3D Rendering", "Interior Design"],
    category: "Branding"
  },
  // KRD - One main project with all KRD images
  {
    id: 2,
    slug: "krd-footwear",
    image: krd1,
    title: "KRD Natural Food Collection",
    description: "Contemporary footwear branding and visual campaign showcasing innovative sneaker designs with dynamic angles and lifestyle positioning.",
    tags: ["Product Photography", "Brand Identity", "Lifestyle Shoot"],
    category: "Branding"
  },
  // Say Bridal - One main project with all images
  {
    id: 3,
    slug: "say-bridal",
    image: sb1,
    title: "Say Bridal Couture",
    description: "Elegant bridal wear collection featuring exquisite detailing and timeless silhouettes, captured through cinematic photography.",
    tags: ["Fashion Photography", "Editorial", "Bridal Wear"],
    category: "Branding"
  },
  // Vasan Argo - One main project with all images
  {
    id: 4,
    slug: "vasan-argo",
    image: va1,
    title: "Vasan Argo Brand Identity",
    description: "Professional brand identity design for Vasan Argo with modern aesthetics and innovative visual solutions.",
    tags: ["Brand Identity", "Visual Design", "Corporate"],
    category: "Branding"
  },
  // Packaging - Individual entries for each packaging image
  {
    id: 5,
    slug: "packaging-1",
    image: pkg1,
    title: " Nikol Premium Packaging Design",
    description: "Bold and dynamic packaging concept combining vibrant design with innovative typography to create a powerful shelf presence.",
    tags: ["Packaging Design", "3D Mockup", "Product Design"],
    category: "Packaging"
  },
  {
    id: 6,
    slug: "packaging-2",
    image: pkg2,
    title: " Nikol Premium Packaging Design 2",
    description: "Creative packaging solution with modern design elements and striking visual appeal.",
    tags: ["Packaging Design", "Branding", "Product Design"],
    category: "Packaging"
  },
  {
    id: 7,
    slug: "packaging-3",
    image: pkg3,
    title: " Mettle Packaging Design",
    description: "Innovative packaging concept with unique structural design and vibrant graphics.",
    tags: ["Packaging", "Graphic Design", "Product"],
    category: "Packaging"
  },
  {
    id: 8,
    slug: "packaging-4",
    image: pkg4,
    title: " Mettle Packaging Design 2",
    description: "Eye-catching packaging design that stands out on shelves with bold colors.",
    tags: ["Packaging", "Brand Design", "Visual"],
    category: "Packaging"
  },
  {
    id: 9,
    slug: "packaging-5",
    image: pkg5,
    title: "Poptail Packaging Design",
    description: "Professional packaging solution with elegant typography and layout.",
    tags: ["Packaging", "Typography", "Design"],
    category: "Packaging"
  },
  {
    id: 10,
    slug: "packaging-6",
    image: pkg6,
    title: "Vacay Packaging Design",
    description: "Modern packaging design featuring clean lines and contemporary aesthetics.",
    tags: ["Packaging", "Modern Design", "Product"],
    category: "Packaging"
  },
  {
    id: 11,
    slug: "packaging-7",
    image: pkg7,
    title: " Vacay Packaging Design 2",
    description: "Premium packaging design with sophisticated visual elements.",
    tags: ["Packaging", "Premium", "Design"],
    category: "Packaging"
  },
  // Poster - Individual entries for each poster image
  {
    id: 12,
    slug: "poster-1",
    image: pst1,
    title: "Joystick Poster Design",
    description: "Striking poster design with bold typography and vibrant color gradients for impactful visual communication.",
    tags: ["Poster Design", "Event Branding", "Typography"],
    category: "Posters"
  },
  {
    id: 13,
    slug: "poster-2",
    image: pst2,
    title: " Earbuds Poster Design",
    description: "Creative poster design featuring dynamic composition and eye-catching visuals.",
    tags: ["Poster", "Graphic Design", "Visual"],
    category: "Posters"
  },
  {
    id: 14,
    slug: "poster-3",
    image: pst3,
    title: "Gaming mouse Poster Design",
    description: "Bold poster design with strong visual impact and modern aesthetics.",
    tags: ["Poster Design", "Branding", "Art"],
    category: "Posters"
  },
  {
    id: 15,
    slug: "poster-4",
    image: pst4,
    title: "Bluetooth speaker Poster Design",
    description: "Contemporary poster design with innovative layout and color scheme.",
    tags: ["Poster", "Modern Design", "Graphics"],
    category: "Posters"
  },
  {
    id: 16,
    slug: "poster-5",
    image: pst5,
    title: "Fastion Poster Design",
    description: "Artistic poster design showcasing creative expression and visual storytelling.",
    tags: ["Poster Design", "Artistic", "Creative"],
    category: "Posters"
  },
  {
    id: 17,
    slug: "poster-6",
    image: pst6,
    title: " Orange juice Poster Design",
    description: "Dynamic poster design with energetic visuals and compelling composition.",
    tags: ["Poster", "Dynamic", "Design"],
    category: "Posters"
  },
  {
    id: 18,
    slug: "poster-7",
    image: pst7,
    title: "Watter bottle Poster Design",
    description: "Professional poster design for events and promotions.",
    tags: ["Poster Design", "Event", "Promotion"],
    category: "Posters"
  },
  {
    id: 19,
    slug: "poster-8",
    image: pst8,
    title: "Monster Drink Poster Design",
    description: "Vibrant poster design with bold colors and impactful messaging.",
    tags: ["Poster", "Vibrant", "Marketing"],
    category: "Posters"
  },
  {
    id: 20,
    slug: "poster-9",
    image: pst9,
    title: "Beer Poster Design",
    description: "Modern poster design with clean typography and contemporary style.",
    tags: ["Poster Design", "Modern", "Clean"],
    category: "Posters"
  },
  {
    id: 21,
    slug: "poster-10",
    image: pst10,
    title: "Camera Poster Design",
    description: "Creative poster design with unique visual approach.",
    tags: ["Poster", "Creative", "Visual"],
    category: "Posters"
  },
  {
    id: 22,
    slug: "poster-11",
    image: pst11,
    title: "Blueberry juice Poster Design",
    description: "Stylish poster design featuring elegant design elements.",
    tags: ["Poster Design", "Stylish", "Elegant"],
    category: "Posters"
  },
  {
    id: 23,
    slug: "poster-12",
    image: pst12,
    title: "Car Poster Design",
    description: "Innovative poster design with creative visual solutions.",
    tags: ["Poster", "Innovative", "Design"],
    category: "Posters"
  },
  {
    id: 24,
    slug: "poster-13",
    image: pst13,
    title: "Gym Poster Design",
    description: "Eye-catching poster design with striking visual effects.",
    tags: ["Poster Design", "Eye-Catching", "Effects"],
    category: "Posters"
  },
  {
    id: 25,
    slug: "poster-14",
    image: pst14,
    title: "Professional Poster Design",
    description: "Professional poster design with polished aesthetics.",
    tags: ["Poster", "Professional", "Polished"],
    category: "Posters"
  },
  // Website - Individual entries for each website image
  {
    id: 26,
    slug: "website-1",
    image: web1,
    title: "vacay Website Design",
    description: "Modern website design featuring smooth animations and clean, user-centric interface for digital presence.",
    tags: ["Web Design", "UI/UX", "Development"],
    category: "Websites & UI Design"
  },
  {
    id: 27,
    slug: "website-2",
    image: web2,
    title: "Say bridal Website Design",
    description: "Responsive website design with intuitive navigation and modern aesthetics.",
    tags: ["Web Design", "Responsive", "UI"],
    category: "Websites & UI Design"
  },
  {
    id: 28,
    slug: "website-3",
    image: web3,
    title: " ARk Website Design",
    description: "Creative website design with innovative features and engaging user experience.",
    tags: ["Web Design", "Creative", "UX"],
    category: "Websites & UI Design"
  },
  {
    id: 29,
    slug: "website-4",
    image: web4,
    title: "KRD Website Design",
    description: "Professional website design with elegant layout and seamless functionality.",
    tags: ["Web Design", "Professional", "Development"],
    category: "Websites & UI Design"
  },
  {
    id: 30,
    slug: "website-5",
    image: web5,
    title: " Vasan Agro Website Design",
    description: "Sleek website design with modern interface and optimized performance.",
    tags: ["Web Design", "Sleek", "Performance"],
    category: "Websites & UI Design"
  },
];

const categories: Category[] = ["All", "Branding", "Packaging", "Posters", "Websites & UI Design"];

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category");
    if (category && categories.includes(category as Category)) {
      setActiveCategory(category as Category);
    }
  }, [searchParams]);

  const filteredProjects = activeCategory === "All"
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-green-glow">
                Work
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We deliver impactful design solutions that transform brands and captivate audiences. 
              From bold identities to stunning digital experiences, every project is crafted with precision and passion.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 md:px-12 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-card text-muted-foreground hover:bg-card/80 hover:text-foreground border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {filteredProjects.map((project, index) => (
              <Link
                to={`/project/${project.slug}`}
                key={project.id}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer animate-fade-in w-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* View Project Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View Project
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-background border border-border rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="px-6 md:px-12 py-20 bg-gradient-to-b from-background to-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build Your Brand
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to transform your brand? Let's create something extraordinary together. 
            Our team is here to bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 cursor-pointer"
          >
            Contact Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurWork;
