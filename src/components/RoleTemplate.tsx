import React, { useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import type { RoleEntry } from '../data/roles';
import Section from '../ui/Section';
import Button from '../ui/Button';

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

interface RoleTemplateProps {
  role: RoleEntry;
}

export default function RoleTemplate({ role }: RoleTemplateProps) {
  return (
    <main id="main-content" style={{ paddingTop: '64px' }}>
      {/* Page hero */}
      <Section variant="navy" id={`role-hero-${role.slug}`}>
        <R>
          <span className="eyebrow" style={{ color: 'var(--color-amber)' }}>
            Solutions · {role.label}
          </span>
          <div className="divider" />
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'rgba(232,228,220,0.5)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            {role.subheadline}
          </p>
          <h1 style={{ color: 'var(--color-paper)', maxWidth: 640, marginBottom: '1.5rem' }}>
            {role.headline}
          </h1>
          <p style={{ maxWidth: 560, color: 'rgba(232,228,220,0.8)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2rem' }}>
            {role.description}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button to="/contact" id={`role-${role.slug}-book-demo`}>
              Book a Demo <ArrowRight size={16} />
            </Button>
            <Button to="/platform" variant="secondary-light" id={`role-${role.slug}-platform`}>
              See the platform
            </Button>
          </div>
        </R>
      </Section>

      {/* Features */}
      <Section id={`role-features-${role.slug}`}>
        <R>
          <span className="eyebrow">What {role.label} gets in JEST</span>
          <div className="divider" />
          <h2 style={{ maxWidth: 520, marginBottom: '3rem' }}>
            Designed for how {role.label.toLowerCase()} teams actually work.
          </h2>
        </R>
        <R>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1rem',
              marginBottom: '2.5rem',
            }}
          >
            {role.features.map((feature) => (
              <div
                key={feature}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.875rem',
                  padding: '1.125rem 1.25rem',
                  border: '1px solid var(--color-mist)',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-white)',
                }}
              >
                <CheckCircle size={18} color="var(--color-amber)" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-navy)', lineHeight: 1.5 }}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </R>
      </Section>

      {/* Key benefit */}
      <Section variant="alt" id={`role-benefit-${role.slug}`}>
        <R>
          <div
            style={{
              maxWidth: 680,
              padding: '2.5rem',
              background: 'var(--color-navy)',
              borderRadius: 'var(--radius-lg)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(212,134,10,0.15) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--color-amber)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              The bottom line
            </span>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                color: 'var(--color-paper)',
                lineHeight: 1.5,
                marginBottom: '2rem',
              }}
            >
              "{role.keyBenefit}"
            </p>
            <Button to="/contact" id={`role-${role.slug}-benefit-cta`}>
              Talk to our team <ArrowRight size={16} />
            </Button>
          </div>
        </R>
      </Section>
    </main>
  );
}
