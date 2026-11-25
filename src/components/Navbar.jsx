import React, { useState, useEffect } from 'react';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';

const navItems = [
  { label: 'Infrastructure', id: 'experience' },
  { label: 'Cultivation Methodology', id: 'process' },
  { label: 'Marketing', id: 'collection' },
  { label: 'Available Trainings', id: 'available-trainings' },
  { label: 'About Us', id: 'about-us' },
  { label: 'Future Goal', id: 'future-goal' },
  { label: 'Consultation', id: 'consultation' },
];

const sectionOrder = [
  'process',
  'experience',
  'collection',
  'available-trainings',
  'about-us',
  'future-goal',
  'consultation',
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('experience');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 200;
      let currentSection = navItems[0].id;

      for (const id of sectionOrder) {
        const el = document.getElementById(id);
        const sectionTop = el ? el.getBoundingClientRect().top + window.scrollY : Infinity;
        if (sectionTop <= scrollPos) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 bg-[#F5EDE2]/90 backdrop-blur-xl border-b border-outline-variant/50 transition-all duration-300 ${scrolled ? 'shadow-sm py-0' : 'py-1'}`}>
      <div className="h-16 max-w-7xl mx-auto px-5 lg:px-12 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a 
          href="#farm" 
          onClick={(e) => handleNavClick(e, 'farm')} 
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <img
            src="/pics/updated-udhayan-logo-transparent.png"
            alt="Udhayan Mushroom Cultivation Farm"
            className="h-11 w-[132px] sm:h-14 sm:w-[168px] object-contain transition-transform group-hover:scale-[1.02]"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-current={isActive ? 'location' : undefined}
                className={`desktop-nav-link text-[12px] whitespace-nowrap ${
                  isActive
                    ? 'font-semibold'
                    : 'font-normal'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3.5">
          <a
            href="https://wa.me/91"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            title="Chat with us on WhatsApp"
            className="w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#1DA851] flex items-center justify-center shadow-sm text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span className="relative flex items-center justify-center">
              <MessageCircle className="w-[23px] h-[23px]" strokeWidth={2.5} />
              <Phone className="absolute w-[10px] h-[10px]" strokeWidth={3} />
            </span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-full bg-white/80 border border-outline-variant flex items-center justify-center text-primary"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer lg:hidden border-b px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-current={activeSection === item.id ? 'location' : undefined}
                className={`py-2 px-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-secondary-container text-secondary font-semibold'
                    : 'text-on-surface-variant hover:text-primary hover:bg-white/50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
