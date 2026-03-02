import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import graphoriaLogo from "@/assets/graphoria-logo.png";

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    const navbarHeight = 64; // Height of fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isOurWorkPage = location.pathname === "/our-work";
  const isOurApproachPage = location.pathname === "/our-approach";
  const isContactPage = location.pathname === "/contact";

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isOurWorkPage) {
      // On Our Work page, scroll to the contact section within the page
      scrollToSection(e, "contact");
    } else {
      // On other pages, use the existing scroll behavior
      scrollToSection(e, "agency");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/">
          <img src={graphoriaLogo} alt="Graphoria" className="h-10 cursor-pointer" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {isHomePage ? (
            <>
              <a href="#why-matters" className="nav-link" onClick={(e) => scrollToSection(e, "why-matters")}>Our Expertise</a>
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About Us</Link>
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 py-6 space-y-4">
          {isHomePage ? (
            <>
              <a href="#why-matters" className="block nav-link" onClick={(e) => { scrollToSection(e, "why-matters"); setMenuOpen(false); }}>Our Expertise</a>
              <Link to="/contact" className="block nav-link" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            </>
          ) : (
            <>
              <Link to="/" className="block nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" className="block nav-link" onClick={() => setMenuOpen(false)}>About Us</Link>
              <Link to="/contact" className="block nav-link" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
