import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import portfolio1 from "@/assets/Blue and red bottle/1z.jpg.jpeg";
import portfolio2 from "@/assets/chocolate/1 jpg.jpg.jpeg";
import portfolio3 from "@/assets/rio bottle/Rio mockup 5.png";
import portfolio4 from "@/assets/KRD/IMG-20250630-WA0162.jpg.jpeg";
import portfolio5 from "@/assets/Say Bridal/IMG-20250512-WA0160.jpg.jpeg";
import portfolio6 from "@/assets/ARK/IMG-20250605-WA0102(1).jpg.jpeg";

type Category = "All" | "Branding" | "Packaging" | "Posters" | "Websites" | "UI Design";

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
  {
    id: 1,
    slug: "touro-energy-rebrand",
    image: portfolio1,
    title: "Touro Energy Rebrand",
    description: "Bold and dynamic packaging concept for Touro Energy, combining vibrant color waves with aggressive typography to create a powerful shelf presence.",
    tags: ["Branding", "Packaging Design", "3D Mockup"],
    category: "Packaging"
  },
  {
    id: 2,
    slug: "madam-chocolate-series",
    image: portfolio2,
    title: "Madam Chocolate Series",
    description: "Premium chocolate packaging system designed with a refined color palette and elegant branding to elevate product perception and visual consistency.",
    tags: ["Luxury Branding", "Product Design", "Packaging"],
    category: "Packaging"
  },
  {
    id: 3,
    slug: "rio-sparkling-campaign",
    image: portfolio3,
    title: "Rio Sparkling Campaign",
    description: "High-energy beverage campaign featuring dynamic liquid splash visuals and vibrant gradients to emphasize freshness and bold flavor identity.",
    tags: ["Advertising", "3D Visualization", "Creative Direction"],
    category: "Branding"
  },
  {
    id: 4,
    slug: "krd-footwear-collection",
    image: portfolio4,
    title: "KRD Footwear Collection",
    description: "Contemporary footwear branding and visual campaign showcasing innovative sneaker designs with dynamic angles and lifestyle positioning.",
    tags: ["Product Photography", "Brand Identity", "Lifestyle Shoot"],
    category: "Branding"
  },
  {
    id: 5,
    slug: "say-bridal-couture",
    image: portfolio5,
    title: "Say Bridal Couture",
    description: "Elegant bridal wear collection featuring exquisite detailing and timeless silhouettes, captured through cinematic photography.",
    tags: ["Fashion Photography", "Editorial", "Bridal Wear"],
    category: "Branding"
  },
  {
    id: 6,
    slug: "ark-architectural-vision",
    image: portfolio6,
    title: "ARK Architectural Vision",
    description: "Modern architectural visualization presenting clean lines and sophisticated spaces through photorealistic 3D rendering.",
    tags: ["Architectural Viz", "3D Rendering", "Interior Design"],
    category: "Websites"
  },
  {
    id: 7,
    slug: "neon-nights-posters",
    image: portfolio1,
    title: "Neon Nights Poster Series",
    description: "Striking poster series for electronic music events featuring bold typography and vibrant neon color gradients.",
    tags: ["Poster Design", "Event Branding", "Typography"],
    category: "Posters"
  },
  {
    id: 8,
    slug: "techflow-website",
    image: portfolio3,
    title: "TechFlow Website",
    description: "Modern website design for a tech startup featuring smooth animations and a clean, user-centric interface.",
    tags: ["Web Design", "UI/UX", "Development"],
    category: "Websites"
  },
  {
    id: 9,
    slug: "artisan-coffee-brand",
    image: portfolio2,
    title: "Artisan Coffee Brand",
    description: "Complete brand identity for an artisan coffee roaster with sustainable packaging and warm, earthy aesthetics.",
    tags: ["Brand Identity", "Packaging", "Visual Design"],
    category: "Branding"
  },
  {
    id: 10,
    slug: "finance-app-ui",
    image: portfolio4,
    title: "Finance App UI",
    description: "Clean and intuitive mobile banking app interface with modern design principles and seamless user experience.",
    tags: ["UI Design", "Mobile App", "UX Research"],
    category: "UI Design"
  },
  {
    id: 11,
    slug: "ecommerce-dashboard",
    image: portfolio5,
    title: "E-commerce Dashboard",
    description: "Comprehensive admin dashboard for online retail with data visualization and inventory management features.",
    tags: ["UI Design", "Dashboard", "Data Visualization"],
    category: "UI Design"
  },
  {
    id: 12,
    slug: "music-festival-posters",
    image: portfolio6,
    title: "Music Festival Posters",
    description: "Vibrant poster designs for summer music festivals featuring bold colors and energetic typography.",
    tags: ["Poster Design", "Event Marketing", "Illustration"],
    category: "Posters"
  },
];

const categories: Category[] = ["All", "Branding", "Packaging", "Posters", "Websites", "UI Design"];

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
