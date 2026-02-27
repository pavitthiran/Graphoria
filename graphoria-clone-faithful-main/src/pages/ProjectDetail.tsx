import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import portfolio1 from "@/assets/Blue and red bottle/1z.jpg.jpeg";
import portfolio2 from "@/assets/chocolate/1 jpg.jpg.jpeg";
import portfolio3 from "@/assets/rio bottle/Rio mockup 5.png";
import portfolio4 from "@/assets/KRD/IMG-20250630-WA0162.jpg.jpeg";
import portfolio5 from "@/assets/Say Bridal/IMG-20250512-WA0160.jpg.jpeg";
import portfolio6 from "@/assets/ARK/IMG-20250605-WA0102(1).jpg.jpeg";

interface Project {
  id: number;
  slug: string;
  image: string;
  title: string;
  shortSummary: string;
  description: string;
  category: string;
  tags: string[];
  client: string;
  problem: string;
  goals: string[];
  approach: {
    research: string;
    direction: string;
    execution: string;
  };
  images: string[];
  results: {
    impact: string;
    brandImprovement: string;
    positioning: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

const allProjects: Project[] = [
  {
    id: 1,
    slug: "touro-energy-rebrand",
    image: portfolio1,
    title: "Touro Energy Rebrand",
    shortSummary: "Bold and dynamic packaging concept for Touro Energy",
    description: "Bold and dynamic packaging concept for Touro Energy, combining vibrant color waves with aggressive typography to create a powerful shelf presence.",
    category: "Packaging",
    tags: ["Branding", "Packaging Design", "3D Mockup"],
    client: "Touro Energy is a leading energy drink brand seeking to revamp their visual identity to stand out in a crowded marketplace.",
    problem: "The client faced challenges with their outdated brand identity that failed to resonate with younger audiences and lacked shelf presence among competitors.",
    goals: ["Create a bold, dynamic visual identity", "Develop packaging that stands out on shelves", "Appeal to the target demographic of young adults"],
    approach: {
      research: "We conducted market research analyzing competitor packaging, surveyed target demographics, and studied color psychology in energy drink marketing.",
      direction: "Our creative direction focused on aggressive typography combined with vibrant color waves to convey energy and power.",
      execution: "We developed comprehensive brand guidelines, created 3D mockups, and designed packaging that commands attention on retail shelves."
    },
    images: [portfolio1, portfolio1, portfolio1],
    results: {
      impact: "Sales increased by 45% within the first quarter of rebranding",
      brandImprovement: "Brand recognition improved by 60% among target demographics",
      positioning: "Established as a premium, bold choice in the energy drink market"
    },
    testimonial: {
      quote: "Graphoria transformed our brand completely. The new packaging has completely changed how customers perceive us.",
      author: "John Smith",
      role: "CEO, Touro Energy"
    }
  },
  {
    id: 2,
    slug: "madam-chocolate-series",
    image: portfolio2,
    title: "Madam Chocolate Series",
    shortSummary: "Premium chocolate packaging system with refined aesthetics",
    description: "Premium chocolate packaging system designed with a refined color palette and elegant branding to elevate product perception and visual consistency.",
    category: "Packaging",
    tags: ["Luxury Branding", "Product Design", "Packaging"],
    client: "Madam Chocolate is a premium artisanal chocolate brand seeking to elevate their product presentation.",
    problem: "The brand lacked a cohesive packaging system that reflected their premium positioning in the luxury chocolate market.",
    goals: ["Develop a cohesive packaging system", "Create a luxurious unboxing experience", "Ensure visual consistency across product lines"],
    approach: {
      research: "We researched luxury packaging trends, studied premium chocolate brands, and analyzed color psychology in luxury goods.",
      direction: "Our direction emphasized refined color palettes, elegant typography, and premium materials.",
      execution: "We created a complete packaging system with custom boxes, wrappers, and branded materials."
    },
    images: [portfolio2, portfolio2, portfolio2],
    results: {
      impact: "Customer satisfaction scores increased by 35%",
      brandImprovement: "Positioned as a luxury gifting option",
      positioning: "Became the go-to choice for premium chocolate gifts"
    }
  },
  {
    id: 3,
    slug: "rio-sparkling-campaign",
    image: portfolio3,
    title: "Rio Sparkling Campaign",
    shortSummary: "High-energy beverage campaign with dynamic visuals",
    description: "High-energy beverage campaign featuring dynamic liquid splash visuals and vibrant gradients to emphasize freshness and bold flavor identity.",
    category: "Branding",
    tags: ["Advertising", "3D Visualization", "Creative Direction"],
    client: "Rio Sparkling is a new entrant in the premium sparkling water market.",
    problem: "The challenge was to create an instantly recognizable brand that would stand out among established competitors.",
    goals: ["Create a memorable brand identity", "Develop eye-catching advertising materials", "Establish a strong market presence"],
    approach: {
      research: "We analyzed the beverage industry landscape, researched consumer preferences, and studied successful beverage campaigns.",
      direction: "Our creative approach used dynamic liquid splash visuals and vibrant gradients to convey freshness and energy.",
      execution: "We produced a comprehensive advertising campaign including print, digital, and point-of-sale materials."
    },
    images: [portfolio3, portfolio3, portfolio3],
    results: {
      impact: "Achieved 80% brand awareness within 6 months",
      brandImprovement: "Recognized as an innovative new brand in the category",
      positioning: "Positioned as a premium, trendsetting choice"
    },
    testimonial: {
      quote: "The campaign exceeded all our expectations. Graphoria truly understood our vision.",
      author: "Maria Garcia",
      role: "Marketing Director, Rio Sparkling"
    }
  },
  {
    id: 4,
    slug: "krd-footwear-collection",
    image: portfolio4,
    title: "KRD Footwear Collection",
    shortSummary: "Contemporary footwear branding and visual campaign",
    description: "Contemporary footwear branding and visual campaign showcasing innovative sneaker designs with dynamic angles and lifestyle positioning.",
    category: "Branding",
    tags: ["Product Photography", "Brand Identity", "Lifestyle Shoot"],
    client: "KRD is an emerging footwear brand targeting fashion-forward young adults.",
    problem: "The brand needed a complete visual identity that would appeal to their target audience and compete with established sneaker brands.",
    goals: ["Create a distinctive brand identity", "Develop compelling visual content", "Establish a strong social media presence"],
    approach: {
      research: "We researched sneaker culture, studied competitor branding, and identified key lifestyle themes for the target audience.",
      direction: "Our approach featured dynamic angles, lifestyle positioning, and contemporary aesthetics.",
      execution: "We produced a complete brand identity system and lifestyle photography campaign."
    },
    images: [portfolio4, portfolio4, portfolio4],
    results: {
      impact: "Social media engagement increased by 200%",
      brandImprovement: "Established a loyal following among sneaker enthusiasts",
      positioning: "Positioned as a must-have brand for footwear enthusiasts"
    }
  },
  {
    id: 5,
    slug: "say-bridal-couture",
    image: portfolio5,
    title: "Say Bridal Couture",
    shortSummary: "Elegant bridal wear collection with cinematic photography",
    description: "Elegant bridal wear collection featuring exquisite detailing and timeless silhouettes, captured through cinematic photography.",
    category: "Photography",
    tags: ["Fashion Photography", "Editorial", "Brimonial Wear"],
    client: "Say Bridal is a high-end bridal wear designer seeking to showcase their collection.",
    problem: "The challenge was to create visual content that captures the elegance and romance of bridal wear.",
    goals: ["Create stunning visual content", "Showcase collection details", "Build brand awareness in bridal fashion"],
    approach: {
      research: "We studied bridal fashion trends, researched editorial photography styles, and planned cinematic compositions.",
      direction: "Our approach emphasized timeless silhouettes, exquisite details, and romantic lighting.",
      execution: "We produced a comprehensive editorial campaign with cinematic photography."
    },
    images: [portfolio5, portfolio5, portfolio5],
    results: {
      impact: "Featured in 5 major bridal fashion publications",
      brandImprovement: "Established as a top bridal designer",
      positioning: "Go-to choice for elegant bridal wear"
    }
  },
  {
    id: 6,
    slug: "ark-architectural-vision",
    image: portfolio6,
    title: "ARK Architectural Vision",
    shortSummary: "Modern architectural visualization with photorealistic rendering",
    description: "Modern architectural visualization presenting clean lines and sophisticated spaces through photorealistic 3D rendering.",
    category: "Architecture",
    tags: ["Architectural Viz", "3D Rendering", "Interior Design"],
    client: "ARK is an architecture firm specializing in modern residential and commercial projects.",
    problem: "The firm needed high-quality 3D visualizations to help clients understand their architectural designs.",
    goals: ["Create photorealistic renderings", "Showcase design concepts effectively", "Win more client projects"],
    approach: {
      research: "We studied architectural visualization techniques, analyzed client needs, and planned rendering workflows.",
      direction: "Our approach emphasized clean lines, sophisticated spaces, and photorealistic quality.",
      execution: "We produced comprehensive 3D renderings and walkthrough animations."
    },
    images: [portfolio6, portfolio6, portfolio6],
    results: {
      impact: "Client conversion rate improved by 50%",
      brandImprovement: "Positioned as a technology-forward firm",
      positioning: "Established as a leader in architectural visualization"
    }
  }
];

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = allProjects.find(p => p.slug === slug);
  
  const currentIndex = allProjects.findIndex(p => p.slug === slug);
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/our-work" className="text-primary hover:underline">
            Back to Our Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {project.shortSummary}
              </p>
              <div className="flex gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Start a Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-green-glow/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-6 md:px-12 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
            Project{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-green-glow">
              Overview
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4 text-foreground">The Client</h3>
              <p className="text-muted-foreground">{project.client}</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4 text-foreground">The Challenge</h3>
              <p className="text-muted-foreground">{project.problem}</p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-border">
            <h3 className="text-xl font-bold mb-6 text-foreground">Project Goals</h3>
            <ul className="space-y-4">
              {project.goals.map((goal, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-green-glow">
              Approach
            </span>
          </h2>
          
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Research & Strategy</h3>
              </div>
              <p className="text-muted-foreground ml-16">{project.approach.research}</p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Creative Direction</h3>
              </div>
              <p className="text-muted-foreground ml-16">{project.approach.direction}</p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Design Execution</h3>
              </div>
              <p className="text-muted-foreground ml-16">{project.approach.execution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-20 px-6 md:px-12 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
            Visual{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-green-glow">
              Showcase
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((img, index) => (
              <div 
                key={index} 
                className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <img 
                  src={img} 
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
            Project{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-green-glow">
              Results
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 rounded-2xl border border-primary/20">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Impact</h3>
              <p className="text-muted-foreground">{project.results.impact}</p>
            </div>

            <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 rounded-2xl border border-primary/20">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Brand Improvement</h3>
              <p className="text-muted-foreground">{project.results.brandImprovement}</p>
            </div>

            <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 rounded-2xl border border-primary/20">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Market Positioning</h3>
              <p className="text-muted-foreground">{project.results.positioning}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-20 px-6 md:px-12 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-12 rounded-3xl border border-border relative overflow-hidden">
              <div className="absolute top-8 left-8 text-8xl text-primary/10 font-serif">"</div>
              <blockquote className="relative z-10">
                <p className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
                  {project.testimonial.quote}
                </p>
                <footer>
                  <cite className="not-italic">
                    <div className="font-bold text-foreground text-lg">{project.testimonial.author}</div>
                    <div className="text-muted-foreground">{project.testimonial.role}</div>
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      )}

      {/* Bottom Navigation */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <Link 
              to="/our-work"
              className="inline-flex items-center gap-3 px-8 py-4 bg-card border border-border text-foreground rounded-full font-medium hover:bg-card/80 hover:border-primary/50 transition-all group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Work
            </Link>
            <Link 
              to={`/project/${nextProject.slug}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all group"
            >
              Next Project
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-20 bg-gradient-to-b from-background to-card/50">
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

export default ProjectDetail;
