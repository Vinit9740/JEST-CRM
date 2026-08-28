import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { faq, faqCategories } from '../data/faq';

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

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-item-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div
      style={{
        border: '1px solid var(--color-mist)',
        borderRadius: 'var(--radius-md)',
        background: open ? 'var(--color-white)' : 'transparent',
        transition: 'background 160ms ease',
        overflow: 'hidden',
      }}
    >
      <button
        id={id}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.125rem 1.5rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '0.95rem',
            color: 'var(--color-navy)',
            lineHeight: 1.4,
          }}
        >
          {question}
        </span>
        <span style={{ flexShrink: 0, color: open ? 'var(--color-amber)' : 'var(--color-slate)' }}>
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={id}
        style={{
          maxHeight: open ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 260ms ease',
        }}
      >
        <div
          style={{
            padding: '0 1.5rem 1.25rem',
            borderTop: '1px solid var(--color-mist)',
            paddingTop: '1rem',
          }}
        >
          <p style={{ fontSize: '0.9rem', lineHeight: 1.75 }}>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', ...faqCategories];

  const filtered =
    activeCategory === 'All' ? faq : faq.filter((f) => f.category === activeCategory);

  return (
    <main id="main-content" style={{ paddingTop: '64px' }}>
      <Section variant="navy" id="resources-hero">
        <R>
          <span className="eyebrow" style={{ color: 'var(--color-amber)' }}>Resources</span>
          <div className="divider" />
          <h1 style={{ color: 'var(--color-paper)', maxWidth: 560, marginBottom: '1rem' }}>
            Frequently asked questions.
          </h1>
          <p style={{ maxWidth: 520, color: 'rgba(232,228,220,0.8)', fontSize: '1.05rem' }}>
            Answers to the questions we hear most often from agencies evaluating JEST Policy CRM.
          </p>
        </R>
      </Section>

      <Section id="faq-section">
        <R>
          {/* Category filter */}
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap',
              marginBottom: '2.5rem',
            }}
            role="group"
            aria-label="Filter FAQ by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                id={`faq-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '999px',
                  border: '1.5px solid',
                  borderColor: activeCategory === cat ? 'var(--color-navy)' : 'var(--color-mist-dark)',
                  background: activeCategory === cat ? 'var(--color-navy)' : 'transparent',
                  color: activeCategory === cat ? 'var(--color-paper)' : 'var(--color-slate)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 160ms ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ list */}
          <div style={{ maxWidth: 760, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {filtered.map((item, i) => (
              <FaqItem key={`${item.category}-${i}`} question={item.question} answer={item.answer} index={i} />
            ))}
          </div>
        </R>

        {/* CTA */}
        <R style={{ marginTop: '2.5rem', maxWidth: 560 }}>
          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--color-slate)',
              marginBottom: '1.25rem',
              lineHeight: 1.7,
            }}
          >
            Did not find your answer? Our team is happy to answer any specific question about the platform, data handling, or how JEST would work for your agency.
          </p>
          <Button to="/contact" id="resources-contact-cta">
            Contact us <ArrowRight size={16} />
          </Button>
        </R>
      </Section>
    </main>
  );
}
