import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';
import { primaryNavItems, isDropdown } from '../data/nav';
import Button from '../ui/Button';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [openAccordions, setOpenAccordions] = useState<Set<string>>(new Set());

  // Trap scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setOpenAccordions(new Set());
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  function toggleAccordion(label: string) {
    setOpenAccordions((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  }

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden={!open}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15,31,61,0.5)',
          zIndex: 998,
          opacity: open ? 1 : 0,
          visibility: open ? 'visible' : 'hidden',
          transition: 'opacity 250ms ease, visibility 250ms',
        }}
      />

      {/* Drawer */}
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(320px, 88vw)',
          background: 'var(--color-white)',
          zIndex: 999,
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 280ms cubic-bezier(0.4, 0, 0.2, 1)',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Drawer header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.25rem',
            borderBottom: '1px solid var(--color-mist)',
          }}
        >
          <Link
            to="/"
            onClick={onClose}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '1rem',
              color: 'var(--color-navy)',
              textDecoration: 'none',
            }}
          >
            JEST <span style={{ fontWeight: 400, color: 'var(--color-slate)' }}>Policy CRM</span>
          </Link>
          <button
            id="mobile-menu-close"
            onClick={onClose}
            aria-label="Close menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.375rem',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-navy)',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav items */}
        <ul
          style={{
            listStyle: 'none',
            padding: '0.75rem 0',
            flex: 1,
          }}
        >
          {primaryNavItems.map((item) => {
            if (isDropdown(item)) {
              const isOpen = openAccordions.has(item.label);
              return (
                <li key={item.label}>
                  <button
                    id={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    aria-expanded={isOpen}
                    onClick={() => toggleAccordion(item.label)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.875rem 1.25rem',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--color-navy)',
                      textAlign: 'left',
                    }}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 200ms ease',
                        color: 'var(--color-slate)',
                      }}
                    />
                  </button>
                  {/* Accordion content */}
                  <div
                    style={{
                      maxHeight: isOpen ? '500px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 280ms ease',
                      background: 'var(--color-paper)',
                    }}
                  >
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        to={subItem.href}
                        onClick={onClose}
                        id={`mobile-nav-${subItem.label.toLowerCase().replace(/[\s&/]+/g, '-')}`}
                        style={{
                          display: 'block',
                          padding: '0.625rem 1.25rem 0.625rem 2rem',
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          color: 'var(--color-navy-light)',
                          textDecoration: 'none',
                          borderLeft: '2px solid var(--color-mist)',
                          marginLeft: '1.25rem',
                        }}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </li>
              );
            }

            return (
              <li key={item.href}>
                <Link
                  to={item.href!}
                  onClick={onClose}
                  id={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  style={{
                    display: 'block',
                    padding: '0.875rem 1.25rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--color-navy)',
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Bottom actions */}
        <div
          style={{
            padding: '1rem 1.25rem',
            borderTop: '1px solid var(--color-mist)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          <Link
            to="/login"
            onClick={onClose}
            id="mobile-nav-login"
            style={{
              textAlign: 'center',
              padding: '0.75rem',
              fontWeight: 600,
              fontSize: '0.9375rem',
              color: 'var(--color-navy)',
              textDecoration: 'none',
              border: '2px solid var(--color-mist-dark)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            Login
          </Link>
          <Button to="/contact" id="mobile-nav-book-demo" className="w-full text-center">
            Book a Demo
          </Button>
        </div>
      </nav>
    </>
  );
}
