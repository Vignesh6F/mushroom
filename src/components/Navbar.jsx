import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { MessageCircle } from 'lucide-react';

const navItems = [
  { label: 'Home',                   id: 'home' },
  { label: 'Infrastructure',         id: 'experience' },
  { label: 'Cultivation',            id: 'process' },
  { label: 'Marketing',              id: 'collection' },
  { label: 'Trainings',              id: 'available-trainings' },
  { label: 'About Us',               id: 'about-us' },
  { label: 'Future Goal',            id: 'future-goal' },
  { label: 'Consultation',           id: 'consultation' },
];

const sectionOrder = navItems.map((n) => n.id);

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const scrollPos = window.scrollY + 120;
      let current = '';
      for (const id of sectionOrder) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= scrollPos) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? 'py-0' : 'py-1'
      }`}
      style={{
        background: scrolled
          ? 'rgba(8, 13, 9, 0.88)'
          : 'rgba(8, 13, 9, 0.52)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderColor: 'rgba(140, 160, 100, 0.14)',
      }}
    >
      <div className="h-16 max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between gap-4">

        {/* Brand Logo */}
        <a
          href="#farm"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 group focus:outline-none shrink-0"
        >
          <img
            src="/pics/updated-udhayan-logo-transparent.png"
            alt="Udhayan Mushroom Cultivation Farm"
            className="h-10 w-auto sm:h-12 object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            style={{ filter: 'brightness(1.1)' }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-current={isActive ? 'location' : undefined}
                className="desktop-nav-link px-3 py-1.5 text-[11.5px] font-medium whitespace-nowrap rounded-md transition-all duration-200"
                style={{
                  color: isActive ? 'var(--gold)' : 'rgba(228, 223, 203, 0.82)',
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* WhatsApp button */}
          <a
            href="https://wa.me/91"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex items-center justify-center w-9 h-9 rounded-full transition-all hover:scale-110"
            style={{ background: '#25D366', color: '#fff', boxShadow: '0 4px 14px rgba(37,211,102,.3)' }}
          >
            <MessageCircle className="w-[18px] h-[18px]" strokeWidth={2.2} />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full transition-colors"
            style={{
              background: 'rgba(167,180,139,.12)',
              border: '1px solid rgba(167,180,139,.22)',
              color: '#e4dfc9',
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-drawer lg:hidden border-b px-5 py-5 shadow-2xl"
          style={{
            background: 'rgba(8, 13, 9, 0.97)',
            backdropFilter: 'blur(20px)',
            borderColor: 'rgba(140, 160, 100, 0.14)',
          }}
        >
          <nav className="flex flex-col gap-1" role="navigation" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  aria-current={isActive ? 'location' : undefined}
                  className="py-2.5 px-4 rounded-xl text-sm font-medium transition-all"
                  style={{
                    background: isActive ? 'rgba(167,180,139,.14)' : 'transparent',
                    color: isActive ? 'var(--gold)' : 'rgba(228,223,203,.8)',
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
