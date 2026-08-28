import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--color-navy)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '64px', // header height
      }}
    >
      {/* Subtle grid pattern */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(232,228,220,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232,228,220,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(212,134,10,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '760px' }}>
          {/* Eyebrow */}
          <span
            className="eyebrow"
            style={{
              color: 'var(--color-amber)',
              marginBottom: '1.5rem',
              display: 'block',
            }}
          >
            Insurance CRM · India-first · Lead to Renewal
          </span>

          {/* Headline */}
          <h1
            style={{
              color: 'var(--color-paper)',
              marginBottom: '1.5rem',
              lineHeight: 1.1,
            }}
          >
            Insurance operations,{' '}
            <span style={{ color: 'var(--color-amber)' }}>connected</span>{' '}
            from lead to renewal.
          </h1>

          {/* Subcopy */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(232,228,220,0.8)',
              maxWidth: '600px',
              marginBottom: '2rem',
              lineHeight: 1.7,
            }}
          >
            JEST Policy CRM gives Indian insurance agencies and brokers one
            workspace for every stage of the policy lifecycle — from the first
            inquiry to claim settlement and renewal. No spreadsheets. No memory
            gaps. No dropped leads.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button to="/contact" id="hero-book-demo">
              Book a Demo <ArrowRight size={16} />
            </Button>
            <Button to="/platform" variant="secondary-light" id="hero-explore-platform">
              Explore the Platform
            </Button>
          </div>

          {/* Stats row */}
          <div
            style={{
              marginTop: '3rem',
              display: 'flex',
              gap: '3rem',
              flexWrap: 'wrap',
            }}
          >
            {[
              { stat: '5+', label: 'Lifecycle stages managed' },
              { stat: '7', label: 'Role-based workspaces' },

            ].map(({ stat, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.75rem',
                    fontWeight: 500,
                    color: 'var(--color-amber)',
                  }}
                >
                  {stat}
                </div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'rgba(232,228,220,0.6)',
                    marginTop: '0.25rem',
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
