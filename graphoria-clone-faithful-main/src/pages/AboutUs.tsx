import { useEffect } from "react";
import { Link } from "react-router-dom";
import graphoriaLogo from "@/assets/graphoria-logo.png";
import portfolio1 from "@/assets/Blue and red bottle/1z.jpg.jpeg";
import portfolio2 from "@/assets/chocolate/1 jpg.jpg.jpeg";
import portfolio3 from "@/assets/rio bottle/Rio mockup 5.png";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full mix-blend-overlay filter blur-[150px] z-0" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full mix-blend-overlay filter blur-[150px] z-0" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link to="/">
            <img src={graphoriaLogo} alt="Graphoria" className="h-10" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link text-primary">About Us</Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Group Image Section */}
        <section className="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              About Graphoria
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              The Studio Behind{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-green-glow">
                the Vision
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are a collective of designers, developers, and dreamers pushing the boundaries of digital creativity.
            </p>
          </div>

          {/* Group Image Grid */}
          <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto rounded-3xl overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={portfolio1}
                alt="Touro Energy Project"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={portfolio2}
                alt="Madam Chocolate Project"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={portfolio3}
                alt="Rio Sparkling Project"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-heading text-left mb-6">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-green-glow">
                  Story
                </span>
              </h2>
              <div className="green-underline !mx-0 mb-8" />
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Graphoria was born from a simple belief: design should be fearless. Founded by a team of passionate creatives, we set out to challenge the ordinary and craft digital experiences that leave lasting impressions.
                </p>
                <p>
                  From bold packaging concepts to immersive brand identities, every project we take on is an opportunity to push creative boundaries. We don't just design — we engineer visual stories that connect brands with their audiences on a deeper level.
                </p>
                <p>
                  Our studio thrives on collaboration, innovation, and an unwavering commitment to excellence. Whether it's a startup looking for its first identity or an established brand seeking a fresh perspective, we bring the same energy and dedication to every brief.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full" />
              <div className="glass-panel rounded-3xl p-8 relative">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-foreground font-bold text-2xl">3+</div>
                      <div className="text-muted-foreground text-sm">Years of Experience</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-foreground font-bold text-2xl">50+</div>
                      <div className="text-muted-foreground text-sm">Projects Delivered</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-foreground font-bold text-2xl">30+</div>
                      <div className="text-muted-foreground text-sm">Happy Clients</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-foreground font-bold text-2xl">10+</div>
                      <div className="text-muted-foreground text-sm">Countries Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">
              What We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-green-glow">
                Do
              </span>
            </h2>
            <div className="green-underline" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card group">
              <div className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <svg className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                Brand Identity
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                We craft unique brand identities that tell your story, from logo design to complete visual systems that resonate with your target audience.
              </p>
            </div>
            <div className="feature-card group">
              <div className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <svg className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                Packaging Design
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                From concept to shelf, we design packaging that stands out. Our 3D mockups and print-ready designs ensure your product makes a powerful first impression.
              </p>
            </div>
            <div className="feature-card group">
              <div className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <svg className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                Digital Experiences
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                We build immersive web experiences and digital campaigns that captivate users, combining cutting-edge technology with stunning visual design.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-green-glow">
                Values
              </span>
            </h2>
            <div className="green-underline" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-panel rounded-2xl p-8 border-primary/10">
              <h3 className="text-xl font-bold text-foreground mb-3">🎨 Creativity First</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every pixel matters. We approach each project with fresh eyes and bold ideas, ensuring our designs are never ordinary.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-8 border-primary/10">
              <h3 className="text-xl font-bold text-foreground mb-3">🤝 Client Partnership</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We believe in building lasting relationships. Your vision is our mission, and we work closely with you at every stage.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-8 border-primary/10">
              <h3 className="text-xl font-bold text-foreground mb-3">⚡ Innovation Driven</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We stay ahead of trends and leverage the latest tools and techniques to deliver designs that are future-proof.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-8 border-primary/10">
              <h3 className="text-xl font-bold text-foreground mb-3">✨ Quality Obsessed</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We never compromise on quality. Every deliverable goes through rigorous review to ensure it meets our high standards.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
          <div className="glass-panel rounded-3xl p-12 md:p-16 border-primary/20">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Create Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-green-glow">
                Amazing?
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Let's collaborate and bring your vision to life. Whether you need a complete rebrand or a single campaign, we're here to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/" className="glass-button">Back to Home</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
            <span>© 2026 Graphoria Inc. All rights reserved.</span>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
