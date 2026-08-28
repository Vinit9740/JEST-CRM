import React, { useEffect, useRef } from 'react';
import { Lock, Shield, ClipboardCheck, Archive, Key, Globe, ArrowRight, Eye, Server, AlertCircle } from 'lucide-react';
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

const securityPillars = [
  {
    icon: Lock,
    title: 'Role-Based Access Control',
    description:
      'Every user is assigned a role that defines exactly what they can view, create, edit, and delete. Roles are configurable by your administrator. No user can access data outside their permitted scope.',
  },
  {
    icon: Shield,
    title: 'Data Encryption',
    description:
      'All data stored in JEST — client information, policy records, financial data, and documents — is encrypted at rest using AES-256. All data in transit is protected by TLS 1.3.',
  },
  {
    icon: ClipboardCheck,
    title: 'Tamper-Evident Audit Log',
    description:
      'Every create, update, and delete operation is recorded with a timestamp, user identity, and the specific record affected. Audit logs are read-only — not modifiable by any user, including system administrators.',
  },
  {
    icon: Archive,
    title: 'Secure Document Management',
    description:
      'Documents uploaded to JEST — KYC files, policy certificates, claim documents — are stored with access controls that mirror your role configuration. A user who cannot see a policy cannot see its documents.',
  },
  {
    icon: Key,
    title: 'Controlled API Access',
    description:
      'Any integration with external systems is governed by authenticated, scoped API keys. Access is logged, rate-limited, and can be revoked by your administrator at any time.',
  },
  {
    icon: Globe,
    title: 'India-First Data Residency',
    description:
      'All JEST data is stored and processed within Indian data centre infrastructure. Your client data does not leave India for any processing or storage purpose.',
  },
];

const additionalPoints = [
  {
    icon: Eye,
    title: 'Visibility by Design',
    description:
      'We do not build features that obscure what is happening in your system. Every action is traceable, every user is accountable, and every piece of data has a clear owner.',
  },
  {
    icon: Server,
    title: 'Infrastructure Reliability',
    description:
      'JEST runs on enterprise-grade cloud infrastructure with daily backups, failover capability, and an uptime commitment. Your operational data is always available when you need it.',
  },
  {
    icon: AlertCircle,
    title: 'No Compliance Theatre',
    description:
      'We do not display certification badges we cannot substantiate. Our security posture is described plainly and honestly — and we are happy to walk through the specifics with your compliance team.',
  },
];

export default function Security() {
  return (
    <main id="main-content" style={{ paddingTop: '64px' }}>
      <Section variant="navy" id="security-hero">
        <R>
          <span className="eyebrow" style={{ color: 'var(--color-amber)' }}>Security & Trust</span>
          <div className="divider" />
          <h1 style={{ color: 'var(--color-paper)', maxWidth: 640, marginBottom: '1.25rem' }}>
            Your clients trust you with sensitive data. We treat it accordingly.
          </h1>
          <p style={{ maxWidth: 560, color: 'rgba(232,228,220,0.8)', fontSize: '1.05rem', lineHeight: 1.75 }}>
            JEST was designed from the start for an industry that handles personal financial data, health records, and legal documents. Security and access control are core to the platform — not add-ons.
          </p>
        </R>
      </Section>

      <Section id="security-pillars">
        <R>
          <span className="eyebrow">Security controls</span>
          <div className="divider" />
          <h2 style={{ maxWidth: 560, marginBottom: '2rem' }}>
            Six areas of security, built into the platform.
          </h2>
        </R>
        <R>
          <div className="grid-3" style={{ rowGap: '1.25rem' }}>
            {securityPillars.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    background: 'rgba(15,31,61,0.06)',
                  }}
                >
                  <Icon size={22} color="var(--color-navy)" />
                </div>
                <h4 style={{ marginBottom: '0.5rem' }}>{title}</h4>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.65 }}>{description}</p>
              </Card>
            ))}
          </div>
        </R>
      </Section>

      <Section variant="alt" id="security-principles">
        <R>
          <span className="eyebrow">Our approach</span>
          <div className="divider" />
          <h2 style={{ maxWidth: 560, marginBottom: '2rem' }}>
            How we think about security at JEST.
          </h2>
        </R>
        <R>
          <div className="grid-3" style={{ rowGap: '1.25rem', marginBottom: '2.5rem' }}>
            {additionalPoints.map(({ icon: Icon, title, description }) => (
              <Card key={title} variant="paper">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '10px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-mist)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <Icon size={20} color="var(--color-navy)" />
                </div>
                <h4 style={{ marginBottom: '0.5rem' }}>{title}</h4>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.65 }}>{description}</p>
              </Card>
            ))}
          </div>
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--color-slate)',
              maxWidth: 620,
              lineHeight: 1.75,
              marginBottom: '2rem',
              padding: '1.25rem 1.5rem',
              background: 'var(--color-white)',
              border: '1px solid var(--color-mist)',
              borderLeft: '4px solid var(--color-amber)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            If your agency has specific compliance requirements or you want to walk through our security architecture in detail before signing up, our team is available for a technical review. Contact us and we will arrange it.
          </p>
          <Button to="/contact" id="security-contact-cta">
            Talk to our team <ArrowRight size={16} />
          </Button>
        </R>
      </Section>
    </main>
  );
}
