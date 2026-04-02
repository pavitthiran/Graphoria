# Graphoria Studio

A modern digital design studio website built with React, TypeScript, and Tailwind CSS, featuring a Spring Boot backend for contact form management.

## 🎨 About Graphoria

Graphoria is a digital design laboratory crafting the future of user interfaces. We merge art with code to create impossible experiences. Our studio specializes in:

- **Brand Identity** - Crafting unique brand identities that tell your story
- **Packaging Design** - From concept to shelf, designing packaging that stands out
- **Digital Experiences** - Building immersive web experiences and digital campaigns
- **Poster Design** - Striking poster designs with bold typography and vibrant colors

## 🚀 Features

### Frontend
- **Modern UI** - Built with React 18 + TypeScript
- **Responsive Design** - Fully responsive across all devices
- **Smooth Animations** - GPU-accelerated animations for smooth scrolling
- **Image Carousel** - Auto-scrolling portfolio carousel with manual navigation
- **Dark Theme** - Elegant dark theme with green accent colors
- **Contact Form** - Integrated contact form with validation
- **Portfolio Gallery** - Filterable portfolio by category (Branding, Packaging, Posters, Websites)
- **Project Details** - Detailed project pages with case studies

### Backend
- **Spring Boot 3.2** - Java 21 backend with Spring Boot
- **RESTful API** - Clean REST API for contact form submissions
- **Database Integration** - PostgreSQL database with JPA/Hibernate
- **PDF Generation** - Automatic PDF generation for contact inquiries using iText
- **Validation** - Request validation with Jakarta Bean Validation
- **Error Handling** - Global exception handling with detailed error responses

## 📁 Project Structure

```
graphoria-clone-faithful-main/
├── src/                          # Frontend source code
│   ├── components/               # React components
│   │   ├── ui/                  # Shadcn UI components
│   │   ├── Navbar.tsx           # Navigation bar
│   │   ├── Footer.tsx           # Footer component
│   │   ├── HeroSection.tsx      # Hero section
│   │   ├── SelectedWorksSection.tsx  # Portfolio carousel
│   │   └── WhyMattersSection.tsx     # Features section
│   ├── pages/                   # Page components
│   │   ├── Index.tsx            # Home page
│   │   ├── AboutUs.tsx          # About page
│   │   ├── OurWork.tsx          # Portfolio page
│   │   ├── OurApproach.tsx      # Process page
│   │   ├── Contact.tsx          # Contact form
│   │   ├── ProjectDetail.tsx    # Project case study
│   │   └── NotFound.tsx         # 404 page
│   ├── assets/                  # Images and static assets
│   │   └── images/             # Portfolio images
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utility functions
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── backend/                     # Backend source code
│   ├── src/main/java/com/graphoria/
│   │   ├── controller/         # REST controllers
│   │   ├── dto/                # Data Transfer Objects
│   │   ├── entity/             # JPA entities
│   │   ├── repository/         # JPA repositories
│   │   └── service/            # Business logic services
│   ├── src/main/resources/
│   │   └── application.properties  # Backend configuration
│   ├── pom.xml                 # Maven dependencies
│   └── Dockerfile              # Docker configuration
├── public/                      # Public static files
├── package.json                 # Frontend dependencies
├── vite.config.ts              # Vite configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Shadcn/ui** - Re-usable UI components
- **Radix UI** - Accessible UI primitives
- **Lucide React** - Beautiful icons
- **React Query** - Data fetching and caching
- **Zod** - Schema validation

### Backend
- **Spring Boot 3.2** - Java framework
- **Java 21** - Programming language
- **Spring Data JPA** - Database ORM
- **PostgreSQL** - Production database
- **H2** - Development database
- **iText 7** - PDF generation library
- **Lombok** - Java boilerplate reduction
- **Maven** - Build tool

### Dev Tools
- **ESLint** - JavaScript/TypeScript linter
- **Vitest** - Unit testing framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm/bun
- **Java** 21+
- **Maven** 3.8+
- **PostgreSQL** (for production)

### Frontend Setup

1. **Install dependencies:**
```bash
npm install
# or
bun install
```

2. **Run development server:**
```bash
npm run dev
# or
bun run dev
```

3. **Open** http://localhost:8080 in your browser

### Backend Setup

1. **Navigate to backend directory:**
```bash
cd backend
```

2. **Configure environment variables:**
```bash
cp .env.example .env
# Edit .env with your email credentials
```

3. **Run with Maven:**
```bash
mvn spring-boot:run
```

4. **Backend will start on** http://localhost:8081

### Docker Setup (Backend)

```bash
cd backend
docker build -t graphoria-backend .
docker run -p 8081:8080 graphoria-backend
```

## 📝 Available Scripts

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

### Backend
```bash
mvn spring-boot:run           # Run Spring Boot app
mvn clean package             # Build JAR file
mvn test                      # Run tests
```

## 🎨 Design System

### Colors
- **Primary**: Green (#00FF00) - Main brand color
- **Background**: Dark (#0A0A0A) - Main background
- **Foreground**: White (#FFFFFF) - Text color
- **Muted**: Gray (#6B7280) - Secondary text
- **Accent**: Green glow effect

### Typography
- **Font Family**: Inter, system-ui, sans-serif
- **Headings**: Bold, large sizes (3xl-7xl)
- **Body**: Regular weight, readable sizes

### Components
- **Glass Panels** - Frosted glass effect with backdrop blur
- **Green Underlines** - Decorative accent underlines
- **Feature Cards** - Hover-animated feature cards
- **Carousel** - Auto-scrolling image carousel
- **Navigation** - Fixed navbar with smooth scroll

## 📧 Contact Form

The contact form includes:
- **Full Name** (required)
- **Email Address** (required, validated)
- **Phone** (optional)
- **Project Type** (required, dropdown)
- **Budget Range** (optional, dropdown)
- **Message** (required)

Form submissions are:
1. Validated on frontend and backend
2. Saved to PostgreSQL database
3. Generated as PDF documents
4. Returned with success/error responses

## 🖼️ Portfolio Categories

- **Branding** - ARK, KRD, Say Bridal, Vasan Argo
- **Packaging** - Nikol, Mettle, Poptail, Vacay
- **Posters** - Various product and event posters
- **Websites & UI Design** - Web design projects

## 🔧 Configuration

### Frontend Environment Variables
Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=http://localhost:8081
```

### Backend Environment Variables
Create a `.env` file in the backend directory:
```env
EMAIL_USERNAME=your-email@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/graphoria
SPRING_DATASOURCE_USERNAME=postgres
SPRING_DATASOURCE_PASSWORD=your-password
```

## 📄 License

© 2026 Graphoria Inc. All rights reserved.

## 👥 Contact

- **Email**: hello@graphoria.com
- **Phone**: +91 9360073899
- **WhatsApp**: +91 93600 73899
- **Instagram**: [@graphoria](https://www.instagram.com/graphoria_gcd)
- **Location**: Chennai, Tamil Nadu

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com) for UI components
- [Radix UI](https://www.radix-ui.com) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Vite](https://vitejs.dev) for build tooling
- [Spring Boot](https://spring.io/projects/spring-boot) for backend framework
