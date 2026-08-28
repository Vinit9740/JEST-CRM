import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Layers, Zap, BarChart2, Users, Shield } from 'lucide-react';
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

const platformPillars = [
  {
    icon: Layers,
    title: 'Unified Data Model',
    description:
      'Every lead, contact, policy, renewal, and claim lives in a single data model. No syncing, no duplication, no divergence between what different teams see.',
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    description:
      'Reminder sequences, task assignments, status triggers, and escalation rules run automatically — freeing your team to focus on client relationships, not administration.',
  },
  {
    icon: BarChart2,
    title: 'Operational Reporting',
    description:
      'Reports that answer real questions: Which leads are about to go cold? Which renewals are at risk? What is our claim settlement rate this quarter?',
  },
  {
    icon: Users,
    title: 'Role-Based Workspaces',
    description:
      'Sales, operations, accounts, and compliance each get an interface matched to their actual job. One platform, seven distinct views.',
  },
  {
    icon: Shield,
    title: 'Built-In Compliance Controls',
    description:
      'Access controls, audit logs, and document governance are built into the platform — not bolted on. Compliance is a feature, not a workaround.',
  },
  {
    icon: CheckCircle,
    title: 'India-First by Design',
    description:
      'Designed for Indian insurance regulations, insurer relationships, and operational realities. Not adapted from a generic Western CRM.',
  },
];

const moduleList = [
  { name: 'Lead Management', description: 'Capture, qualify, and convert leads with a structured pipeline.' },
  { name: 'Policy Management', description: 'One record for every policy — issuance, endorsements, and documents.' },
  { name: 'Renewals', description: 'Proactive renewal reminders and lapse prevention workflows.' },
  { name: 'Claims', description: 'Coordinated claims tracking from registration to settlement.' },
  { name: 'Reporting', description: 'Operational and financial reports across every module.' },
];

export default function Platform() {
  return (
    <main id="main-content" style={{ paddingTop: '64px' }}>
      {/* Page header */}
      <Section variant="navy" id="platform-hero">
        <R>
          <span className="eyebrow" style={{ color: 'var(--color-amber)' }}>Platform Overview</span>
          <div className="divider" />
          <h1 style={{ color: 'var(--color-paper)', maxWidth: 640, marginBottom: '1.25rem' }}>
            One platform for the full insurance lifecycle.
          </h1>
          <p style={{ maxWidth: 560, color: 'rgba(232,228,220,0.8)', fontSize: '1.1rem', marginBottom: '2rem' }}>
            JEST Policy CRM connects every part of an insurance agency's operation — from the first lead to annual renewal — in a single, coherent workspace.
          </p>
          <Button to="/contact" id="platform-hero-cta">
            Book a Demo <ArrowRight size={16} />
          </Button>
        </R>
      </Section>

      {/* Platform pillars */}
      <Section id="platform-pillars">
        <R>
          <span className="eyebrow">What makes JEST different</span>
          <div className="divider" />
          <h2 style={{ maxWidth: 560, marginBottom: '2rem' }}>
            Built for how insurance agencies actually operate.
          </h2>
        </R>
        <R>
          <div className="grid-3" style={{ rowGap: '1.25rem' }}>
            {platformPillars.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '10px',
                    background: 'rgba(15,31,61,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <Icon size={22} color="var(--color-navy)" />
                </div>
                <h4 style={{ marginBottom: '0.5rem' }}>{title}</h4>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.65 }}>{description}</p>
              </Card>
            ))}
          </div>
        </R>
      </Section>

      {/* Modules overview */}
      <Section variant="alt" id="platform-modules">
        <R>
          <span className="eyebrow">Included modules</span>
          <div className="divider" />
          <h2 style={{ maxWidth: 560, marginBottom: '0.5rem' }}>
            Five modules. One connected system.
          </h2>
          <p style={{ maxWidth: 520, marginBottom: '2rem' }}>
            Every module shares the same data — a lead becomes a contact, a contact has policies, policies trigger renewals. Nothing lives in a silo.
          </p>
        </R>
        <R>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: 700 }}>
            {moduleList.map((mod, i) => (
              <div
                key={mod.name}
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  padding: '1.25rem 1.5rem',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-mist)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--color-amber)',
                    marginTop: '0.2rem',
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>{mod.name}</h4>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{mod.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button to="/modules/lead-management" variant="secondary" id="platform-explore-modules">
              Explore modules
            </Button>
            <Button to="/contact" id="platform-book-demo">
              Book a Demo
            </Button>
          </div>
        </R>
      </Section>
    </main>
  );
}
