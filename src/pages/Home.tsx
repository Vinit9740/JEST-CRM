import React, { useEffect, useRef } from 'react';
import {
  AlertTriangle,
  Bell,
  BarChart2,
  FolderOpen,
  FileText,
  MessageSquare,
  BookOpen,
  Target,
  RefreshCw,
  Users,
  Settings,
  ClipboardCheck,
  Shield,
  Lock,
  Archive,
  Key,
  Globe,
  ArrowRight,
} from 'lucide-react';
import Hero from '../components/Hero';
import LifecycleVisual from '../components/LifecycleVisual';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { roles } from '../data/roles';

// Scroll reveal hook
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealDiv({ children, style = {}, className = '' }: { children: React.ReactNode; style?: React.CSSProperties; className?: string }) {
  const ref = useScrollReveal();
  return <div ref={ref} className={`reveal ${className}`} style={style}>{children}</div>;
}

const painPoints = [
  { icon: AlertTriangle, text: 'Leads lost between WhatsApp messages and spreadsheet rows' },
  { icon: Bell, text: 'Follow-ups dependent on individual memory, not system reminders' },
  { icon: RefreshCw, text: 'Renewals discovered only when clients call to complain' },
  { icon: BarChart2, text: 'No pipeline visibility — nobody knows which deals are live' },
  { icon: FolderOpen, text: 'Client documents scattered across emails, drives, and desktops' },
  { icon: MessageSquare, text: 'Claims handled through informal channels with no audit trail' },
  { icon: BookOpen, text: 'Reconstructing what happened requires hours of searching' },
];

const pillars = [
  { label: 'Capture', detail: 'Every lead from every source, logged and assigned automatically.' },
  { label: 'Convert', detail: 'Structured qualification and follow-up that turns inquiries into policies.' },
  { label: 'Retain', detail: 'Proactive renewal management so no policy lapses by accident.' },
  { label: 'Serve', detail: 'Full client context for every service interaction, always accessible.' },
  { label: 'Automate', detail: 'Reminders, sequences, and status triggers that run without manual input.' },
  { label: 'Control', detail: 'Role-based access that keeps sensitive data visible only to the right people.' },
  { label: 'Audit', detail: 'A tamper-evident log of every action, accessible for compliance review.' },
];

const trustPoints = [
  { icon: Lock, text: 'Role-based access control — every user sees only what their role permits' },
  { icon: Shield, text: 'Data and documents encrypted at rest and in transit' },
  { icon: ClipboardCheck, text: 'Full audit log of every create, edit, and delete action' },
  { icon: Archive, text: 'Secure document management with access-controlled retrieval' },
  { icon: Key, text: 'API access governed and monitored — no uncontrolled data egress' },
  { icon: Globe, text: 'India-first data residency — your data does not leave Indian infrastructure' },
];

const roleIcons: Record<string, React.ElementType> = {
  management: BarChart2,
  sales: Target,
  'renewals-retention': RefreshCw,
  operations: Settings,
  'accounts-finance': FileText,
  'customer-service': Users,
  'admin-compliance': ClipboardCheck,
};

export default function Home() {
  return (
    <main id="main-content">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Problem section */}
      <Section variant="alt" id="problem-section">
        <RevealDiv>
          <span className="eyebrow">The problem</span>
          <div className="divider" />
          <h2 style={{ maxWidth: 640, marginBottom: '0.5rem' }}>
            Stop running insurance operations across spreadsheets, WhatsApp, and memory.
          </h2>
          <p style={{ maxWidth: 560, marginBottom: '2rem' }}>
            The way most agencies work today creates risk at every stage of the client relationship.
          </p>
        </RevealDiv>
        <RevealDiv>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1rem',
            }}
          >
            {painPoints.map(({ icon: Icon, text }) => (
              <div
                key={text}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.25rem',
                  background: 'var(--color-paper)',
                  border: '1px solid var(--color-mist)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 36,
                    height: 36,
                    borderRadius: '8px',
                    background: 'rgba(212,134,10,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={18} color="var(--color-amber)" />
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.55 }}>{text}</p>
              </div>
            ))}
          </div>
        </RevealDiv>
      </Section>

      {/* 3. Core value proposition — 7 pillars */}
      <Section id="value-proposition">
        <RevealDiv>
          <span className="eyebrow">Why JEST</span>
          <div className="divider" />
          <h2 style={{ maxWidth: 560, marginBottom: '0.5rem' }}>
            Seven principles that run through everything JEST does.
          </h2>
          <p style={{ maxWidth: 520, marginBottom: '2rem' }}>
            Every feature, every workflow, every report in JEST is built around one of these.
          </p>
        </RevealDiv>
        <RevealDiv>
          <div className="grid-4" style={{ rowGap: '1.25rem' }}>
            {pillars.map((p, i) => (
              <Card key={p.label}>
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
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1.05rem', fontFamily: 'var(--font-display)' }}>
                  {p.label}
                </h4>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{p.detail}</p>
              </Card>
            ))}
          </div>
        </RevealDiv>
      </Section>

      {/* 4. Lifecycle visual */}
      <Section variant="alt" id="lifecycle-section">
        <RevealDiv>
          <span className="eyebrow">Full lifecycle coverage</span>
          <div className="divider" />
          <h2 style={{ maxWidth: 560, marginBottom: '0.5rem' }}>
            One connected record from first contact to final settlement.
          </h2>
          <p style={{ maxWidth: 520, marginBottom: '2rem' }}>
            Click any stage to see how JEST handles it.
          </p>
        </RevealDiv>
        <RevealDiv>
          <LifecycleVisual />
        </RevealDiv>
      </Section>

      {/* 5. Role-based section */}
      <Section id="roles-section">
        <RevealDiv>
          <span className="eyebrow">Built for every team</span>
          <div className="divider" />
          <h2 style={{ maxWidth: 560, marginBottom: '0.5rem' }}>
            One platform. Different workspaces for every team.
          </h2>
          <p style={{ maxWidth: 520, marginBottom: '2rem' }}>
            Each role in your agency gets a view designed for their actual job — not a generic interface they have to adapt.
          </p>
        </RevealDiv>
        <RevealDiv>
          <div className="grid-4" style={{ rowGap: '1.25rem' }}>
            {roles.map((role) => {
              const Icon = roleIcons[role.slug] || Users;
              return (
                <Card key={role.slug}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '10px',
                      background: 'rgba(15,31,61,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    <Icon size={20} color="var(--color-navy)" />
                  </div>
                  <h4 style={{ marginBottom: '0.5rem' }}>{role.label}</h4>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {role.oneLiner}
                  </p>
                </Card>
              );
            })}
          </div>
        </RevealDiv>
      </Section>

      {/* 6. Trust section */}
      <Section variant="navy" id="trust-section">
        <RevealDiv>
          <span className="eyebrow" style={{ color: 'var(--color-amber)' }}>Security & control</span>
          <div className="divider" />
          <h2 style={{ color: 'var(--color-paper)', maxWidth: 560, marginBottom: '0.5rem' }}>
            Your agency's data deserves a system built for accountability.
          </h2>
          <p style={{ maxWidth: 520, marginBottom: '2rem', color: 'rgba(232,228,220,0.75)' }}>
            JEST is designed from the ground up for India's insurance operating environment.
          </p>
        </RevealDiv>
        <RevealDiv>
          <div className="grid-3" style={{ rowGap: '1.25rem' }}>
            {trustPoints.map(({ icon: Icon, text }) => (
              <div
                key={text}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.5rem',
                  border: '1px solid rgba(232,228,220,0.12)',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255,255,255,0.04)',
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 36,
                    height: 36,
                    borderRadius: '8px',
                    background: 'rgba(212,134,10,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={18} color="var(--color-amber)" />
                </div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(232,228,220,0.85)', lineHeight: 1.6 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Button to="/security" variant="secondary-light" id="trust-learn-security">
              Read our security approach
            </Button>
          </div>
        </RevealDiv>
      </Section>

      {/* 7. Final CTA */}
      <Section variant="alt" id="final-cta">
        <RevealDiv
          style={{
            maxWidth: 640,
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <span className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>Ready to get started?</span>
          <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
          <h2 style={{ marginBottom: '1rem' }}>
            See how JEST Policy CRM would run your agency.
          </h2>
          <p style={{ marginBottom: '2.5rem', fontSize: '1.05rem', maxWidth: 480, margin: '0 auto 2.5rem' }}>
            Book a guided demo and we will walk you through your specific agency setup — lead pipeline, renewals, and all.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button to="/contact" id="final-cta-book-demo">
              Book a Demo <ArrowRight size={16} />
            </Button>
            <Button to="/contact" variant="secondary" id="final-cta-talk">
              Talk to our team
            </Button>
          </div>
        </RevealDiv>
      </Section>
    </main>
  );
}
