import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import LifecycleVisual from '../components/LifecycleVisual';

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

const steps = [
  {
    number: '01',
    stage: 'Lead',
    title: 'Prospect gets in touch.',
    description:
      'A potential client submits a web form, calls in, walks in, or is referred by an existing client. JEST captures the inquiry, assigns it to a sales executive, and creates the first task: make contact within 24 hours.',
  },
  {
    number: '02',
    stage: 'Qualification',
    title: 'The lead is assessed.',
    description:
      'The assigned executive works through a qualification checklist — insurance need, cover type, sum insured, timeline, and budget. Qualified leads move forward. Unqualified leads are parked with a reason.',
  },
  {
    number: '03',
    stage: 'Contact',
    title: 'A client record is created.',
    description:
      'The qualified lead becomes a Contact. KYC documents are collected, personal and professional details are filled in, and the contact\'s full history — every interaction, every policy — lives in one profile.',
  },
  {
    number: '04',
    stage: 'Policy',
    title: 'Cover is placed.',
    description:
      'Once the client selects a product, the policy is issued. JEST records all cover details, premium schedule, and insurer information. Documents are attached. Endorsements are tracked against the base record.',
  },
  {
    number: '05',
    stage: 'Renewal',
    title: 'The renewal cycle starts.',
    description:
      'Sixty days before expiry, JEST flags the policy and begins the renewal sequence — reminders to the relationship manager, outreach to the client, and status tracking through to confirmation or lapse.',
  },
  {
    number: '06',
    stage: 'Claim',
    title: 'A claim is filed.',
    description:
      'When a client needs to claim, the process is logged in JEST. Documents are collected, insurer submission is tracked, queries are managed, and the settlement is recorded — with the full trail available for the client.',
  },
  {
    number: '07',
    stage: 'Retention',
    title: 'The relationship deepens.',
    description:
      'A client whose claim was handled well, who renewed on time, and who received proactive service is a long-term client. JEST tracks cross-sell opportunities and relationship health at the contact level.',
  },
];

export default function HowItWorks() {
  return (
    <main id="main-content" style={{ paddingTop: '64px' }}>
      {/* About blurb */}
      <Section variant="navy" id="about-jest">
        <R>
          <span className="eyebrow" style={{ color: 'var(--color-amber)' }}>About JEST</span>
          <div className="divider" />
          <h1 style={{ color: 'var(--color-paper)', maxWidth: 640, marginBottom: '1.25rem' }}>
            Built by people who understand insurance operations.
          </h1>
          <p style={{ maxWidth: 580, color: 'rgba(232,228,220,0.8)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            JEST Policy CRM was created specifically for Indian insurance agencies and brokers — businesses that manage complex, multi-product client relationships but have historically had to piece together their operations with generic tools, spreadsheets, and institutional memory.
          </p>
          <p style={{ maxWidth: 580, color: 'rgba(232,228,220,0.75)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            We built JEST to give agencies a single, coherent workspace that reflects how insurance actually works — from the first lead inquiry through policy issuance, renewal management, and claims coordination. Every workflow, every report, and every data field was designed with the realities of Indian insurance distribution in mind.
          </p>
          <p style={{ maxWidth: 580, color: 'rgba(232,228,220,0.7)', fontSize: '1rem', lineHeight: 1.75 }}>
            Our clients are principals, sales managers, operations executives, accounts teams, and customer service representatives who need a system that works the way their agency does — not the way a Silicon Valley SaaS team imagined an insurance company might work.
          </p>
        </R>
      </Section>

      {/* Lifecycle visual */}
      <Section variant="alt" id="lifecycle-overview">
        <R>
          <span className="eyebrow">The lifecycle at a glance</span>
          <div className="divider" />
          <h2 style={{ maxWidth: 560, marginBottom: '0.5rem' }}>
            Seven connected stages. One continuous record.
          </h2>
          <p style={{ maxWidth: 520, marginBottom: '2rem' }}>
            Click any stage to explore how JEST handles it.
          </p>
        </R>
        <R>
          <LifecycleVisual />
        </R>
      </Section>

      {/* Step-by-step walkthrough */}
      <Section id="lifecycle-walkthrough">
        <R>
          <span className="eyebrow">How it works</span>
          <div className="divider" />
          <h2 style={{ maxWidth: 560, marginBottom: '0.5rem' }}>
            The lead-to-renewal flow, step by step.
          </h2>
          <p style={{ maxWidth: 520, marginBottom: '2.5rem' }}>
            Every stage is handled inside JEST — no switching between tools, no lost context.
          </p>
        </R>
        <div style={{ position: 'relative', maxWidth: 720 }}>
          {/* Vertical line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '1.75rem',
              top: 0,
              bottom: 0,
              width: 2,
              background: 'var(--color-mist)',
              zIndex: 0,
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative' }}>
            {steps.map((step) => (
              <R key={step.number}>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                  {/* Number node */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      background: 'var(--color-navy)',
                      border: '3px solid var(--color-paper)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        fontWeight: 500,
                        color: 'var(--color-amber)',
                      }}
                    >
                      {step.number}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.55rem',
                        color: 'rgba(232,228,220,0.6)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {step.stage}
                    </span>
                  </div>
                  {/* Content */}
                  <div style={{ paddingTop: '0.5rem' }}>
                    <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{step.title}</h4>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 580 }}>{step.description}</p>
                  </div>
                </div>
              </R>
            ))}
          </div>
        </div>
        <R style={{ marginTop: '2.5rem' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button to="/contact" id="how-it-works-cta">
              Book a Demo <ArrowRight size={16} />
            </Button>
            <Button to="/platform" variant="secondary" id="how-it-works-platform">
              Platform Overview
            </Button>
          </div>
        </R>
      </Section>
    </main>
  );
}
