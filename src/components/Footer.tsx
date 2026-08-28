import { Link } from 'react-router-dom';
import { footerColumns } from '../data/nav';
import Button from '../ui/Button';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--color-navy)',
        color: 'var(--color-mist)',
        padding: '4rem 0 2rem',
      }}
      role="contentinfo"
    >
      <div className="container">
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr 1fr 1fr 1fr',
            gap: '3rem',
            marginBottom: '3rem',
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div style={{ minWidth: 180 }}>
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                marginBottom: '1rem',
              }}
            >
              <span
                style={{
                  width: 32,
                  height: 32,
                  background: 'var(--color-amber)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: 'var(--color-white)',
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
                  fontSize: '0.95rem',
                  color: 'var(--color-paper)',
                }}
              >
                JEST Policy CRM
              </span>
            </Link>
            <p
              style={{
                fontSize: '0.85rem',
                lineHeight: 1.6,
                color: 'var(--color-mist)',
                marginBottom: '1.5rem',
                maxWidth: 200,
              }}
            >
              Insurance operations, connected from lead to renewal.
            </p>
            <Button to="/contact" size="sm" id="footer-book-demo">
              Book a Demo
            </Button>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-amber)',
                  marginBottom: '1rem',
                }}
              >
                {col.heading}
              </h4>
              <ul style={{ listStyle: 'none' }}>
                {col.links.map((link) => (
                  <li key={link.href} style={{ marginBottom: '0.625rem' }}>
                    <Link
                      to={link.href}
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--color-mist)',
                        textDecoration: 'none',
                        transition: 'color 140ms ease',
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = 'var(--color-paper)')
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = 'var(--color-mist)')
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(232,228,220,0.15)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <p
            style={{
              fontSize: '0.8rem',
              color: 'rgba(232,228,220,0.5)',
            }}
          >
            © {year} JEST Policy CRM. All rights reserved. Built for Indian insurance agencies.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              { label: 'Privacy Policy', href: '/contact' },
              { label: 'Terms of Use', href: '/contact' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.href}
                style={{
                  fontSize: '0.8rem',
                  color: 'rgba(232,228,220,0.5)',
                  textDecoration: 'none',
                  transition: 'color 140ms ease',
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--color-mist)')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = 'rgba(232,228,220,0.5)')
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
