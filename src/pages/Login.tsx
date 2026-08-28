import { ExternalLink, ArrowRight, Lock } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

export default function Login() {
  return (
    <main id="main-content" style={{ paddingTop: '64px' }}>
      <Section
        variant="navy"
        id="login-page"
        style={{ minHeight: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center' }}
      >
        <div style={{ maxWidth: 480, margin: '0 auto', textAlign: 'center' }}>
          {/* Lock icon */}
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: '16px',
              background: 'rgba(212,134,10,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
            }}
          >
            <Lock size={28} color="var(--color-amber)" />
          </div>

          <span
            className="eyebrow"
            style={{ color: 'var(--color-amber)', display: 'block', marginBottom: '1rem' }}
          >
            Secure Access
          </span>

          <h1
            style={{
              color: 'var(--color-paper)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              marginBottom: '1rem',
            }}
          >
            Login to JEST Policy CRM
          </h1>

          <p
            style={{
              color: 'rgba(232,228,220,0.75)',
              marginBottom: '2.5rem',
              lineHeight: 1.7,
            }}
          >
            The JEST Policy CRM application is accessed through our secure portal. Click below to go to the login page.
          </p>

          {/* Primary: go to CRM */}
          <a
            id="login-go-to-crm"
            href="https://app.jestcrm.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            style={{ marginBottom: '1rem', justifyContent: 'center', width: '100%' }}
          >
            Go to JEST CRM Login <ExternalLink size={15} />
          </a>

          <p style={{ color: 'rgba(232,228,220,0.5)', fontSize: '0.8rem', marginBottom: '2.5rem' }}>
            Opens in a new tab · Secured by TLS 1.3
          </p>

          <div
            style={{
              borderTop: '1px solid rgba(232,228,220,0.1)',
              paddingTop: '2rem',
            }}
          >
            <p style={{ color: 'rgba(232,228,220,0.6)', fontSize: '0.875rem', marginBottom: '1rem' }}>
              Not yet a customer?
            </p>
            <Button to="/contact" variant="secondary-light" id="login-book-demo">
              Book a Demo <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
