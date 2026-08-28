import { ArrowLeft } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

export default function NotFound() {
  return (
    <main id="main-content" style={{ paddingTop: '64px' }}>
      <Section
        variant="navy"
        id="not-found-page"
        style={{ minHeight: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center' }}
      >
        <div style={{ maxWidth: 480, margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '5rem',
              fontWeight: 500,
              color: 'rgba(212,134,10,0.3)',
              lineHeight: 1,
              marginBottom: '1.5rem',
            }}
          >
            404
          </div>

          <h1
            style={{
              color: 'var(--color-paper)',
              fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
              marginBottom: '1rem',
            }}
          >
            Page not found.
          </h1>

          <p style={{ color: 'rgba(232,228,220,0.7)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            The page you are looking for does not exist or may have been moved. Try navigating from the home page.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button to="/" id="not-found-home">
              <ArrowLeft size={16} /> Go home
            </Button>
            <Button to="/contact" variant="secondary-light" id="not-found-contact">
              Contact us
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
