import React, { useEffect, useRef } from 'react';
import { Mail } from 'lucide-react';
import Section from '../ui/Section';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function R({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useReveal();
  return <div ref={ref} className="reveal" style={style}>{children}</div>;
}

export default function Contact() {
  return (
    <main id="main-content" style={{ paddingTop: '64px' }}>
      {/* Hero */}
      <Section variant="navy" id="contact-hero">
        <R>
          <span className="eyebrow" style={{ color: 'var(--color-amber)' }}>Contact Us</span>
          <div className="divider" />
          <h1 style={{ color: 'var(--color-paper)', maxWidth: 560, marginBottom: '1rem' }}>
            Book a demo or reach out to our team.
          </h1>
          <p style={{ maxWidth: 500, color: 'rgba(232,228,220,0.8)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            We will walk you through JEST Policy CRM in the context of your agency setup — not a generic product tour.
          </p>
        </R>
      </Section>

      {/* Email contact */}
      <Section id="contact-main">
        <R style={{ maxWidth: 520 }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Get in touch</h2>
          <p style={{ marginBottom: '2.5rem', lineHeight: 1.75 }}>
            Drop us an email and our team will get back to you within one business day to arrange your demo.
          </p>

          <a
            id="contact-email-link"
            href="mailto:hello@jestcrm.in"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.875rem',
              padding: '1.25rem 1.75rem',
              background: 'var(--color-white)',
              border: '1.5px solid var(--color-mist-dark)',
              borderRadius: 'var(--radius-md)',
              textDecoration: 'none',
              transition: 'border-color 160ms ease, box-shadow 160ms ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-amber)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(212,134,10,0.15)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-mist-dark)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '10px',
                background: 'rgba(212,134,10,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Mail size={20} color="var(--color-amber)" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--color-amber)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.2rem',
                }}
              >
                Email us
              </div>
              <span
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--color-navy)',
                }}
              >
                jestcrm@jest.com
              </span>
            </div>
          </a>

          <p
            style={{
              marginTop: '2rem',
              fontSize: '0.875rem',
              color: 'var(--color-slate)',
              lineHeight: 1.7,
              padding: '1.125rem 1.375rem',
              background: 'var(--color-white)',
              border: '1px solid var(--color-mist)',
              borderLeft: '3px solid var(--color-amber)',
              borderRadius: 'var(--radius-md)',
              maxWidth: 440,
            }}
          >
            A demo typically takes 30–45 minutes. We will walk through the lifecycle that matters most to your agency — leads, renewals, claims, or all three.
          </p>
        </R>
      </Section>
    </main>
  );
}
