import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { primaryNavItems, isDropdown } from '../data/nav';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  // Detect scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard handling for dropdowns
  function handleDropdownKeyDown(e: React.KeyboardEvent, label: string) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpenDropdown(openDropdown === label ? null : label);
    }
    if (e.key === 'Escape') {
      setOpenDropdown(null);
    }
  }

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled
            ? 'rgba(247, 245, 240, 0.97)'
            : 'rgba(247, 245, 240, 0.95)',
          borderBottom: scrolled
            ? '1px solid var(--color-mist-dark)'
            : '1px solid transparent',
          backdropFilter: 'blur(12px)',
          transition: 'border-color 200ms ease, box-shadow 200ms ease',
          boxShadow: scrolled ? '0 2px 16px rgba(15,31,61,0.08)' : 'none',
        }}
        role="banner"
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '64px',
            gap: '2rem',
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            id="site-logo"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              flexShrink: 0,
            }}
            aria-label="JEST Policy CRM – Home"
          >
            <span
              style={{
                width: 32,
                height: 32,
                background: 'var(--color-navy)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: 'var(--color-amber)',
                  letterSpacing: '-0.02em',
                }}
              >
                J
              </span>
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '1rem',
                color: 'var(--color-navy)',
                letterSpacing: '-0.01em',
              }}
            >
              JEST <span style={{ fontWeight: 400, color: 'var(--color-slate)' }}>Policy CRM</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            ref={dropdownRef}
            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', flex: 1 }}
            aria-label="Primary navigation"
          >
            {primaryNavItems.map((item) => {
              if (isDropdown(item)) {
                const isOpen = openDropdown === item.label;
                return (
                  <div
                    key={item.label}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      id={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      onKeyDown={(e) => handleDropdownKeyDown(e, item.label)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        padding: '0.5rem 0.75rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: isOpen ? 'var(--color-amber)' : 'var(--color-navy)',
                        borderRadius: 'var(--radius-sm)',
                        transition: 'color 140ms ease',
                        whiteSpace: 'nowrap',
                      }}
                      className="desktop-nav-item"
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'none',
                          transition: 'transform 200ms ease',
                        }}
                      />
                    </button>

                    {/* Dropdown menu */}
                    <div
                      role="menu"
                      aria-label={`${item.label} submenu`}
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 8px)',
                        left: 0,
                        minWidth: '220px',
                        background: 'var(--color-white)',
                        border: '1px solid var(--color-mist)',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: '0 8px 32px rgba(15,31,61,0.12)',
                        padding: '0.5rem',
                        opacity: isOpen ? 1 : 0,
                        visibility: isOpen ? 'visible' : 'hidden',
                        transform: isOpen ? 'translateY(0)' : 'translateY(-6px)',
                        transition: 'opacity 160ms ease, transform 160ms ease, visibility 160ms',
                        zIndex: 100,
                      }}
                    >
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          role="menuitem"
                          style={{
                            display: 'block',
                            padding: '0.5rem 0.875rem',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            color: 'var(--color-navy)',
                            textDecoration: 'none',
                            transition: 'background 120ms ease, color 120ms ease',
                          }}
                          onMouseEnter={(e) => {
                            (e.target as HTMLElement).style.background = 'var(--color-paper)';
                            (e.target as HTMLElement).style.color = 'var(--color-amber)';
                          }}
                          onMouseLeave={(e) => {
                            (e.target as HTMLElement).style.background = 'transparent';
                            (e.target as HTMLElement).style.color = 'var(--color-navy)';
                          }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              // Regular link
              return (
                <NavLink
                  key={item.href}
                  to={item.href!}
                  id={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  style={({ isActive }) => ({
                    padding: '0.5rem 0.75rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: isActive ? 'var(--color-amber)' : 'var(--color-navy)',
                    textDecoration: 'none',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'color 140ms ease',
                    whiteSpace: 'nowrap',
                  })}
                  className="desktop-nav-item"
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Right-side actions */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              flexShrink: 0,
              marginLeft: 'auto',
            }}
          >
            <NavLink
              to="/login"
              id="nav-login"
              style={({ isActive }) => ({
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: isActive ? 'var(--color-amber)' : 'var(--color-navy)',
                textDecoration: 'none',
                padding: '0.5rem 0.75rem',
              })}
              className="desktop-only"
            >
              Login
            </NavLink>
            <Button to="/contact" size="sm" id="nav-book-demo" className="desktop-only">
              Book a Demo
            </Button>

            {/* Mobile: Book a Demo + hamburger */}
            <Button to="/contact" size="sm" id="nav-book-demo-mobile" className="mobile-only">
              Book a Demo
            </Button>
            <button
              id="hamburger-btn"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-only"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              <span
                style={{
                  display: 'block',
                  width: 22,
                  height: 2,
                  background: 'var(--color-navy)',
                  borderRadius: 1,
                  transition: 'transform 200ms ease, opacity 200ms ease',
                  transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: 22,
                  height: 2,
                  background: 'var(--color-navy)',
                  borderRadius: 1,
                  opacity: mobileOpen ? 0 : 1,
                  transition: 'opacity 200ms ease',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: 22,
                  height: 2,
                  background: 'var(--color-navy)',
                  borderRadius: 1,
                  transition: 'transform 200ms ease, opacity 200ms ease',
                  transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <style>{`
        @media (min-width: 769px) { .mobile-only { display: none !important; } }
        @media (max-width: 768px) { .desktop-only { display: none !important; } }
        @media (max-width: 900px) {
          nav .desktop-nav-item { font-size: 0.8rem; padding: 0.4rem 0.5rem; }
        }
        .desktop-nav-item:hover { color: var(--color-amber) !important; }
      `}</style>
    </>
  );
}
