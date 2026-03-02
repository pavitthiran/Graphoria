import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
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
  // ARK - Show ALL ARK images
  {
    id: 1,
    slug: "ark-architectural",
    image: ar1,
    title: "ARK Architectural Vision",
    shortSummary: "Modern architectural visualization with clean lines",
    description: "Modern architectural visualization presenting clean lines and sophisticated spaces through photorealistic 3D rendering.",
    category: "Branding",
    tags: ["Architectural Viz", "3D Rendering", "Interior Design"],
    client: "ARK is an architecture firm specializing in modern residential and commercial projects.",
    problem: "The firm needed high-quality 3D visualizations to help clients understand their architectural designs.",
    goals: ["Create photorealistic renderings", "Showcase design concepts effectively", "Win more client projects"],
    approach: {
      research: "We studied architectural visualization techniques, analyzed client needs, and planned rendering workflows.",
      direction: "Our approach emphasized clean lines, sophisticated spaces, and photorealistic quality.",
      execution: "We produced comprehensive 3D renderings and walkthrough animations."
    },
    images: [ar1, ar2, ar3, ar4, ar5],
    results: {
      impact: "Client conversion rate improved by 50%",
      brandImprovement: "Positioned as a technology-forward firm",
      positioning: "Established as a leader in architectural visualization"
    }
  },
  // KRD - Show ALL KRD images
  {
    id: 2,
    slug: "krd-footwear",
    image: krd1,
    title: "KRD Natural Food Collection",
    shortSummary: "Contemporary  Natural food branding and visual campaign",
    description: "Contemporary natural food branding and visual campaign showcasing innovative food products with dynamic angles and lifestyle positioning.",
    category: "Branding",
    tags: ["Product Photography", "Brand Identity", "Lifestyle Shoot"],
    client: "KRD is an emerging natural food brand targeting health-conscious consumers.",
    problem: "The brand needed a complete visual identity that would appeal to their target audience and compete with established natural food brands.",
    goals: ["Create a distinctive brand identity", "Develop compelling visual content", "Establish a strong social media presence"],
    approach: {
      research: "We researched natural food trends, studied competitor branding, and identified key lifestyle themes for the target audience.",
      direction: "Our approach featured dynamic angles, lifestyle positioning, and contemporary aesthetics.",
      execution: "We produced a complete brand identity system and lifestyle photography campaign."
    },
    images: [krd1, krd2, krd3, krd4, krd5, krd6, krd7, krd8, krd9, krd10, krd11, krd12],
    results: {
      impact: "Social media engagement increased by 200%",
      brandImprovement: "Established a loyal following among natural food enthusiasts",
      positioning: "Positioned as a must-have brand for natural food consumers"
    }
  },
  // Say Bridal - Show ALL Say Bridal images
  {
    id: 3,
    slug: "say-bridal",
    image: sb1,
    title: "Say Bridal Couture",
    shortSummary: "Elegant bridal wear collection with cinematic photography",
    description: "Elegant bridal wear collection featuring exquisite detailing and timeless silhouettes, captured through cinematic photography.",
    category: "Branding",
    tags: ["Fashion Photography", "Editorial", "Bridal Wear"],
    client: "Say Bridal is a high-end bridal wear designer seeking to showcase their collection.",
    problem: "The challenge was to create visual content that captures the elegance and romance of bridal wear.",
    goals: ["Create stunning visual content", "Showcase collection details", "Build brand awareness in bridal fashion"],
    approach: {
      research: "We studied bridal fashion trends, researched editorial photography styles, and planned cinematic compositions.",
      direction: "Our approach emphasized timeless silhouettes, exquisite details, and romantic lighting.",
      execution: "We produced a comprehensive editorial campaign with cinematic photography."
    },
    images: [sb1, sb2, sb3, sb4, sb5, sb6, sb7, sb8, sb9, sb10, sb11, sb12, sb13],
    results: {
      impact: "Featured in 5 major bridal fashion publications",
      brandImprovement: "Established as a top bridal designer",
      positioning: "Go-to choice for elegant bridal wear"
    }
  },
  // Vasan Argo - Show ALL Vasan Argo images
  {
    id: 4,
    slug: "vasan-argo",
    image: va1,
    title: "Vasan Argo Brand Identity",
    shortSummary: "Professional corporate brand identity design",
    description: "Professional brand identity design for Vasan Argo with modern aesthetics and innovative visual solutions.",
    category: "Branding",
    tags: ["Brand Identity", "Visual Design", "Corporate"],
    client: "Vasan Argo is a corporate entity seeking to establish a strong brand presence.",
    problem: "The company needed a comprehensive brand identity that communicates professionalism and innovation.",
    goals: ["Create a distinctive brand identity", "Develop visual guidelines", "Establish market presence"],
    approach: {
      research: "We analyzed industry trends, studied target audience preferences, and researched competitor branding.",
      direction: "Our approach focused on modern aesthetics with professional undertones.",
      execution: "We developed comprehensive brand guidelines and visual assets."
    },
    images: [va1, va2, va3, va4, va5, va6],
    results: {
      impact: "Brand recognition increased by 75%",
      brandImprovement: "Established as a professional industry leader",
      positioning: "Positioned as a premium corporate choice"
    }
  },
  // Packaging - Individual entries
  {
    id: 5,
    slug: "packaging-1",
    image: pkg1,
    title: "Nikol Premium Packaging Design",
    shortSummary: "Bold and dynamic packaging concept",
    description: "Bold and dynamic packaging concept combining vibrant design with innovative typography to create a powerful shelf presence.",
    category: "Packaging",
    tags: ["Packaging Design", "3D Mockup", "Product Design"],
    client: "A leading brand seeking to revamp their visual identity.",
    problem: "The client faced challenges with their outdated packaging that lacked shelf presence among competitors.",
    goals: ["Create a bold, dynamic visual identity", "Develop packaging that stands out on shelves", "Appeal to target demographics"],
    approach: {
      research: "We conducted market research analyzing competitor packaging and target demographics.",
      direction: "Our creative direction focused on innovative design combined with vibrant visuals.",
      execution: "We developed comprehensive brand guidelines, created 3D mockups, and designed packaging."
    },
    images: [pkg1],
    results: {
      impact: "Sales increased by 45% within the first quarter",
      brandImprovement: "Brand recognition improved by 60%",
      positioning: "Established as a premium, bold choice in the market"
    }
  },
  {
    id: 6,
    slug: "packaging-2",
    image: pkg2,
    title: "Nikol Premium Packaging Design 2",
    shortSummary: "Creative packaging solution",
    description: "Creative packaging solution with modern design elements and striking visual appeal.",
    category: "Packaging",
    tags: ["Packaging Design", "Branding", "Product Design"],
    client: "A leading brand seeking to revamp their visual identity.",
    problem: "The client needed innovative packaging design.",
    goals: ["Create innovative packaging", "Develop unique visual identity", "Stand out on shelves"],
    approach: {
      research: "We researched packaging trends and consumer preferences.",
      direction: "Modern design with striking visuals.",
      execution: "We created innovative packaging solutions."
    },
    images: [pkg2],
    results: {
      impact: "Customer engagement increased",
      brandImprovement: "Brand visibility improved",
      positioning: "Positioned as innovative"
    }
  },
  {
    id: 7,
    slug: "packaging-3",
    image: pkg3,
    title: "Mettle Packaging Design",
    shortSummary: "Innovative packaging concept",
    description: "Innovative packaging concept with unique structural design and vibrant graphics.",
    category: "Packaging",
    tags: ["Packaging", "Graphic Design", "Product"],
    client: "A brand seeking unique packaging.",
    problem: "Needed unique packaging to differentiate.",
    goals: ["Create unique design", "Differentiate from competitors"],
    approach: {
      research: "Market analysis.",
      direction: "Unique structural design.",
      execution: "Created innovative packaging."
    },
    images: [pkg3],
    results: {
      impact: "Differentiation achieved",
      brandImprovement: "Visual identity strengthened",
      positioning: "Market presence increased"
    }
  },
  {
    id: 8,
    slug: "packaging-4",
    image: pkg4,
    title: "Mettle Packaging Design 2",
    shortSummary: "Eye-catching packaging design",
    description: "Eye-catching packaging design that stands out on shelves with bold colors.",
    category: "Packaging",
    tags: ["Packaging", "Brand Design", "Visual"],
    client: "A brand seeking bold packaging.",
    problem: "Needed bold colors to attract attention.",
    goals: ["Create bold design", "Attract consumer attention"],
    approach: {
      research: "Color psychology research.",
      direction: "Bold color scheme.",
      execution: "Designed eye-catching packaging."
    },
    images: [pkg4],
    results: {
      impact: "Attention captured",
      brandImprovement: "Brand recall improved",
      positioning: "Positioned as bold"
    }
  },
  {
    id: 9,
    slug: "packaging-5",
    image: pkg5,
    title: "Poptail Packaging Design",
    shortSummary: "Professional packaging solution",
    description: "Professional packaging solution with elegant typography and layout.",
    category: "Packaging",
    tags: ["Packaging", "Typography", "Design"],
    client: "A professional brand.",
    problem: "Needed professional packaging.",
    goals: ["Create professional design", "Convey professionalism"],
    approach: {
      research: "Professional design standards.",
      direction: "Elegant typography.",
      execution: "Created professional packaging."
    },
    images: [pkg5],
    results: {
      impact: "Professional image enhanced",
      brandImprovement: "Credibility increased",
      positioning: "Positioned as professional"
    }
  },
  {
    id: 10,
    slug: "packaging-6",
    image: pkg6,
    title: "Vacay Packaging Design",
    shortSummary: "Modern packaging design",
    description: "Modern packaging design featuring clean lines and contemporary aesthetics.",
    category: "Packaging",
    tags: ["Packaging", "Modern Design", "Product"],
    client: "A modern brand.",
    problem: "Needed modern packaging.",
    goals: ["Create modern design"],
    approach: {
      research: "Modern design trends.",
      direction: "Clean lines.",
      execution: "Created modern packaging."
    },
    images: [pkg6],
    results: {
      impact: "Modern appeal achieved",
      brandImprovement: "Contemporary image",
      positioning: "Positioned as modern"
    }
  },
  {
    id: 11,
    slug: "packaging-7",
    image: pkg7,
    title: "Vacay Packaging Design 2",
    shortSummary: "Premium packaging design",
    description: "Premium packaging design with sophisticated visual elements.",
    category: "Packaging",
    tags: ["Packaging", "Premium", "Design"],
    client: "A premium brand.",
    problem: "Needed premium packaging.",
    goals: ["Create premium design"],
    approach: {
      research: "Premium design standards.",
      direction: "Sophisticated elements.",
      execution: "Created premium packaging."
    },
    images: [pkg7],
    results: {
      impact: "Premium image enhanced",
      brandImprovement: "Luxury positioning",
      positioning: "Positioned as premium"
    }
  },
  // Poster - Individual entries
  {
    id: 12,
    slug: "poster-1",
    image: pst1,
    title: "Joystick Poster Design",
    shortSummary: "Striking poster design with bold typography",
    description: "Striking poster design with bold typography and vibrant color gradients for impactful visual communication.",
    category: "Posters",
    tags: ["Poster Design", "Event Branding", "Typography"],
    client: "Event organizers seeking impactful promotional materials.",
    problem: "Needed eye-catching designs to attract attention and communicate event themes effectively.",
    goals: ["Create visually striking designs", "Communicate event themes", "Attract target audience"],
    approach: {
      research: "We analyzed event themes, studied target audience preferences, and researched design trends.",
      direction: "Our approach used bold typography combined with vibrant colors.",
      execution: "We produced comprehensive poster designs for various media."
    },
    images: [pst1],
    results: {
      impact: "Event attendance increased by 60%",
      brandImprovement: "Established strong visual presence",
      positioning: "Positioned as a premium event brand"
    }
  },
  {
    id: 13,
    slug: "poster-2",
    image: pst2,
    title: "Earbuds Poster Design",
    shortSummary: "Creative poster design",
    description: "Creative poster design featuring dynamic composition and eye-catching visuals.",
    category: "Posters",
    tags: ["Poster", "Graphic Design", "Visual"],
    client: "Event organizers.",
    problem: "Needed creative poster designs.",
    goals: ["Create creative designs"],
    approach: {
      research: "Design research.",
      direction: "Dynamic composition.",
      execution: "Created posters."
    },
    images: [pst2],
    results: {
      impact: "Engagement increased",
      brandImprovement: "Visual appeal improved",
      positioning: "Positioned as creative"
    }
  },
  {
    id: 14,
    slug: "poster-3",
    image: pst3,
    title: "Gaming mouse Poster Design",
    shortSummary: "Bold poster design",
    description: "Bold poster design with strong visual impact and modern aesthetics.",
    category: "Posters",
    tags: ["Poster Design", "Branding", "Art"],
    client: "Event organizers.",
    problem: "Needed bold designs.",
    goals: ["Create bold designs"],
    approach: {
      research: "Bold design research.",
      direction: "Strong visual impact.",
      execution: "Created bold posters."
    },
    images: [pst3],
    results: {
      impact: "Impact achieved",
      brandImprovement: "Visual impact increased",
      positioning: "Positioned as bold"
    }
  },
  {
    id: 15,
    slug: "poster-4",
    image: pst4,
    title: "Bluetooth speaker Poster Design",
    shortSummary: "Contemporary poster design",
    description: "Contemporary poster design with innovative layout and color scheme.",
    category: "Posters",
    tags: ["Poster", "Modern Design", "Graphics"],
    client: "Event organizers.",
    problem: "Needed contemporary designs.",
    goals: ["Create contemporary designs"],
    approach: {
      research: "Contemporary trends.",
      direction: "Innovative layout.",
      execution: "Created contemporary posters."
    },
    images: [pst4],
    results: {
      impact: "Contemporary appeal achieved",
      brandImprovement: "Modern image",
      positioning: "Positioned as contemporary"
    }
  },
  {
    id: 16,
    slug: "poster-5",
    image: pst5,
    title: "Fastion Poster Design",
    shortSummary: "Artistic poster design",
    description: "Artistic poster design showcasing creative expression and visual storytelling.",
    category: "Posters",
    tags: ["Poster Design", "Artistic", "Creative"],
    client: "Event organizers.",
    problem: "Needed artistic designs.",
    goals: ["Create artistic designs"],
    approach: {
      research: "Artistic research.",
      direction: "Creative expression.",
      execution: "Created artistic posters."
    },
    images: [pst5],
    results: {
      impact: "Artistic expression achieved",
      brandImprovement: "Creative image",
      positioning: "Positioned as artistic"
    }
  },
  {
    id: 17,
    slug: "poster-6",
    image: pst6,
    title: "Orange juice Poster Design",
    shortSummary: "Dynamic poster design",
    description: "Dynamic poster design with energetic visuals and compelling composition.",
    category: "Posters",
    tags: ["Poster", "Dynamic", "Design"],
    client: "Event organizers.",
    problem: "Needed dynamic designs.",
    goals: ["Create dynamic designs"],
    approach: {
      research: "Dynamic design research.",
      direction: "Energetic visuals.",
      execution: "Created dynamic posters."
    },
    images: [pst6],
    results: {
      impact: "Energy conveyed",
      brandImprovement: "Dynamic image",
      positioning: "Positioned as dynamic"
    }
  },
  {
    id: 18,
    slug: "poster-7",
    image: pst7,
    title: "Watter bottle Poster Design",
    shortSummary: "Professional poster design",
    description: "Professional poster design for events and promotions.",
    category: "Posters",
    tags: ["Poster Design", "Event", "Promotion"],
    client: "Event organizers.",
    problem: "Needed professional designs.",
    goals: ["Create professional designs"],
    approach: {
      research: "Professional design.",
      direction: "Event focus.",
      execution: "Created professional posters."
    },
    images: [pst7],
    results: {
      impact: "Professional image enhanced",
      brandImprovement: "Event success",
      positioning: "Positioned as professional"
    }
  },
  {
    id: 19,
    slug: "poster-8",
    image: pst8,
    title: "Monster Drink Poster Design",
    shortSummary: "Vibrant poster design",
    description: "Vibrant poster design with bold colors and impactful messaging.",
    category: "Posters",
    tags: ["Poster", "Vibrant", "Marketing"],
    client: "Event organizers.",
    problem: "Needed vibrant designs.",
    goals: ["Create vibrant designs"],
    approach: {
      research: "Color research.",
      direction: "Bold colors.",
      execution: "Created vibrant posters."
    },
    images: [pst8],
    results: {
      impact: "Vibrant message conveyed",
      brandImprovement: "Marketing effectiveness",
      positioning: "Positioned as vibrant"
    }
  },
  {
    id: 20,
    slug: "poster-9",
    image: pst9,
    title: "Beer Poster Design",
    shortSummary: "Modern poster design",
    description: "Modern poster design with clean typography and contemporary style.",
    category: "Posters",
    tags: ["Poster Design", "Modern", "Clean"],
    client: "Event organizers.",
    problem: "Needed modern designs.",
    goals: ["Create modern designs"],
    approach: {
      research: "Modern trends.",
      direction: "Clean typography.",
      execution: "Created modern posters."
    },
    images: [pst9],
    results: {
      impact: "Modern appeal achieved",
      brandImprovement: "Contemporary image",
      positioning: "Positioned as modern"
    }
  },
  {
    id: 21,
    slug: "poster-10",
    image: pst10,
    title: "Camera Poster Design",
    shortSummary: "Creative poster design",
    description: "Creative poster design with unique visual approach.",
    category: "Posters",
    tags: ["Poster", "Creative", "Visual"],
    client: "Event organizers.",
    problem: "Needed unique designs.",
    goals: ["Create unique designs"],
    approach: {
      research: "Unique approach.",
      direction: "Visual distinction.",
      execution: "Created unique posters."
    },
    images: [pst10],
    results: {
      impact: "Uniqueness achieved",
      brandImprovement: "Distinctive image",
      positioning: "Positioned as unique"
    }
  },
  {
    id: 22,
    slug: "poster-11",
    image: pst11,
    title: "Blueberry juice Poster Design",
    shortSummary: "Stylish poster design",
    description: "Stylish poster design featuring elegant design elements.",
    category: "Posters",
    tags: ["Poster Design", "Stylish", "Elegant"],
    client: "Event organizers.",
    problem: "Needed stylish designs.",
    goals: ["Create stylish designs"],
    approach: {
      research: "Style research.",
      direction: "Elegant elements.",
      execution: "Created stylish posters."
    },
    images: [pst11],
    results: {
      impact: "Style conveyed",
      brandImprovement: "Elegant image",
      positioning: "Positioned as stylish"
    }
  },
  {
    id: 23,
    slug: "poster-12",
    image: pst12,
    title: "Car Poster Design",
    shortSummary: "Innovative poster design",
    description: "Innovative poster design with creative visual solutions.",
    category: "Posters",
    tags: ["Poster", "Innovative", "Design"],
    client: "Event organizers.",
    problem: "Needed innovative designs.",
    goals: ["Create innovative designs"],
    approach: {
      research: "Innovation research.",
      direction: "Creative solutions.",
      execution: "Created innovative posters."
    },
    images: [pst12],
    results: {
      impact: "Innovation achieved",
      brandImprovement: "Creative image",
      positioning: "Positioned as innovative"
    }
  },
  {
    id: 24,
    slug: "poster-13",
    image: pst13,
    title: "Gym Poster Design",
    shortSummary: "Eye-catching poster design",
    description: "Eye-catching poster design with striking visual effects.",
    category: "Posters",
    tags: ["Poster Design", "Eye-Catching", "Effects"],
    client: "Event organizers.",
    problem: "Needed eye-catching designs.",
    goals: ["Create eye-catching designs"],
    approach: {
      research: "Eye-catching research.",
      direction: "Striking effects.",
      execution: "Created eye-catching posters."
    },
    images: [pst13],
    results: {
      impact: "Attention captured",
      brandImprovement: "Visual impact",
      positioning: "Positioned as eye-catching"
    }
  },
  {
    id: 25,
    slug: "poster-14",
    image: pst14,
    title: "Professional Poster Design",
    shortSummary: "Professional poster design",
    description: "Professional poster design with polished aesthetics.",
    category: "Posters",
    tags: ["Poster", "Professional", "Polished"],
    client: "Event organizers.",
    problem: "Needed polished designs.",
    goals: ["Create polished designs"],
    approach: {
      research: "Polished standards.",
      direction: "Professional aesthetics.",
      execution: "Created polished posters."
    },
    images: [pst14],
    results: {
      impact: "Professional image enhanced",
      brandImprovement: "Polished appearance",
      positioning: "Positioned as professional"
    }
  },
  // Website - Individual entries
  {
    id: 26,
    slug: "website-1",
    image: web1,
    title: "vacay Website Design",
    shortSummary: "Clean and user-centric website interface",
    description: "Modern website design featuring smooth animations and clean, user-centric interface for digital presence.",
    category: "Websites",
    tags: ["Web Design", "UI/UX", "Development"],
    client: "A tech startup seeking to establish their digital presence.",
    problem: "Needed a modern website that effectively communicates their value proposition.",
    goals: ["Create a modern, user-friendly website", "Improve user experience", "Establish digital presence"],
    approach: {
      research: "We analyzed user needs, studied competitor websites, and researched design trends.",
      direction: "Our approach focused on clean aesthetics with intuitive navigation.",
      execution: "We developed a complete website with responsive design and smooth animations."
    },
    images: [web1],
    results: {
      impact: "User engagement increased by 80%",
      brandImprovement: "Established strong digital presence",
      positioning: "Positioned as a modern tech brand"
    }
  },
  {
    id: 27,
    slug: "website-2",
    image: web2,
    title: "Say bridal Website Design",
    shortSummary: "Responsive website design",
    description: "Responsive website design with intuitive navigation and modern aesthetics.",
    category: "Websites",
    tags: ["Web Design", "Responsive", "UI"],
    client: "A business seeking responsive design.",
    problem: "Needed responsive website.",
    goals: ["Create responsive design"],
    approach: {
      research: "Responsive design research.",
      direction: "Intuitive navigation.",
      execution: "Created responsive website."
    },
    images: [web2],
    results: {
      impact: "Mobile users increased",
      brandImprovement: "Better user experience",
      positioning: "Positioned as responsive"
    }
  },
  {
    id: 28,
    slug: "website-3",
    image: web3,
    title: "ARk Website Design",
    shortSummary: "Creative website design",
    description: "Creative website design with innovative features and engaging user experience.",
    category: "Websites",
    tags: ["Web Design", "Creative", "UX"],
    client: "A creative business.",
    problem: "Needed creative website.",
    goals: ["Create creative design"],
    approach: {
      research: "Creative design research.",
      direction: "Innovative features.",
      execution: "Created creative website."
    },
    images: [web3],
    results: {
      impact: "Engagement increased",
      brandImprovement: "Creative image",
      positioning: "Positioned as creative"
    }
  },
  {
    id: 29,
    slug: "website-4",
    image: web4,
    title: "KRD Website Design",
    shortSummary: "Professional website design",
    description: "Professional website design with elegant layout and seamless functionality.",
    category: "Websites",
    tags: ["Web Design", "Professional", "Development"],
    client: "A professional business.",
    problem: "Needed professional website.",
    goals: ["Create professional design"],
    approach: {
      research: "Professional standards.",
      direction: "Elegant layout.",
      execution: "Created professional website."
    },
    images: [web4],
    results: {
      impact: "Professional image enhanced",
      brandImprovement: "Credibility increased",
      positioning: "Positioned as professional"
    }
  },
  {
    id: 30,
    slug: "website-5",
    image: web5,
    title: "Vasan Agro Website Design",
    shortSummary: "Sleek website design",
    description: "Sleek website design with modern interface and optimized performance.",
    category: "Websites",
    tags: ["Web Design", "Sleek", "Performance"],
    client: "A modern business.",
    problem: "Needed sleek website.",
    goals: ["Create sleek design"],
    approach: {
      research: "Sleek design research.",
      direction: "Modern interface.",
      execution: "Created sleek website."
    },
    images: [web5],
    results: {
      impact: "Performance optimized",
      brandImprovement: "Modern image",
      positioning: "Positioned as sleek"
    }
  }
];

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = allProjects.find(p => p.slug === slug);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
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
          
          <div className="flex flex-col gap-6">
            {project.images.map((img, index) => (
              <div 
                key={index} 
                className="w-full rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img 
                  src={img} 
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-auto hover:opacity-90 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-white hover:text-primary transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(null);
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          {project.images.length > 1 && (
            <button 
              className="absolute left-4 w-12 h-12 flex items-center justify-center text-white hover:text-primary transition-colors bg-black/50 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : project.images.length - 1);
              }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next Button */}
          {project.images.length > 1 && (
            <button 
              className="absolute right-4 w-12 h-12 flex items-center justify-center text-white hover:text-primary transition-colors bg-black/50 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex(selectedImageIndex < project.images.length - 1 ? selectedImageIndex + 1 : 0);
              }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
          
          {/* Full Screen Image */}
          <img 
            src={project.images[selectedImageIndex]} 
            alt="Full screen view"
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Image Counter */}
          {project.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
              {selectedImageIndex + 1} / {project.images.length}
            </div>
          )}
        </div>
      )}

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
