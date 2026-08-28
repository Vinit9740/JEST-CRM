import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import type { ModuleEntry } from '../data/modules';
import Section from '../ui/Section';
import Card from '../ui/Card';
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

interface ModuleTemplateProps {
  module: ModuleEntry;
}

export default function ModuleTemplate({ module: mod }: ModuleTemplateProps) {
  return (
    <main id="main-content" style={{ paddingTop: '64px' }}>
      {/* Hero */}
      <Section variant="navy" id={`module-hero-${mod.slug}`}>
        <R>
          <span className="eyebrow" style={{ color: 'var(--color-amber)' }}>
            Module · {mod.label}
          </span>
          <div className="divider" />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'rgba(212,134,10,0.7)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.75rem',
            }}
          >
            Lifecycle stage: {mod.lifecycleStage}
          </span>
          <h1 style={{ color: 'var(--color-paper)', maxWidth: 640, marginBottom: '1.25rem' }}>
            {mod.headline}
          </h1>
          <p
            style={{
              maxWidth: 540,
              color: 'rgba(232,228,220,0.75)',
              fontSize: '1.05rem',
              marginBottom: '0.75rem',
              fontStyle: 'italic',
            }}
          >
            {mod.subheadline}
          </p>
          <p style={{ maxWidth: 560, color: 'rgba(232,228,220,0.8)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '2rem' }}>
            {mod.description}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button to="/contact" id={`module-${mod.slug}-book-demo`}>
              Book a Demo <ArrowRight size={16} />
            </Button>
            <Button to="/how-it-works" variant="secondary-light" id={`module-${mod.slug}-how`}>
              How it works
            </Button>
          </div>
        </R>
      </Section>

      {/* Capabilities */}
      <Section id={`module-capabilities-${mod.slug}`}>
        <R>
          <span className="eyebrow">Module capabilities</span>
          <div className="divider" />
          <h2 style={{ maxWidth: 520, marginBottom: '3rem' }}>
            What {mod.label} includes.
          </h2>
        </R>
        <R>
          <div className="grid-3" style={{ rowGap: '1.25rem', marginBottom: '3rem' }}>
            {mod.capabilities.map((cap, i) => (
              <Card key={cap.title}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--color-amber)',
                    letterSpacing: '0.1em',
                    marginBottom: '0.5rem',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 style={{ marginBottom: '0.5rem' }}>{cap.title}</h4>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.65 }}>{cap.detail}</p>
              </Card>
            ))}
          </div>
        </R>
      </Section>

      {/* Key benefit */}
      <Section variant="alt" id={`module-benefit-${mod.slug}`}>
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
              The result
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
              "{mod.keyBenefit}"
            </p>
            <Button to="/contact" id={`module-${mod.slug}-benefit-cta`}>
              See it in action <ArrowRight size={16} />
            </Button>
          </div>
        </R>
      </Section>
    </main>
  );
}
