const stages = [
  {
    id: 'lead',
    label: 'Lead',
    number: '01',
    description:
      'A prospect reaches out via web form, referral, walk-in, or phone. JEST captures the inquiry, assigns it to a team member, and ensures no inquiry goes without an owner or a next action.',
  },
  {
    id: 'qualification',
    label: 'Qualification',
    number: '02',
    description:
      'The sales team qualifies the lead through a structured checklist — product need, sum insured, insurer preference, and budget. Unqualified leads are parked; qualified ones move forward.',
  },
  {
    id: 'contact',
    label: 'Contact',
    number: '03',
    description:
      'A qualified lead becomes a Contact with a full profile: personal details, KYC documents, relationship history, and all policies linked in one view. Every interaction is logged.',
  },
  {
    id: 'policy',
    label: 'Policy',
    number: '04',
    description:
      'Once a quote is accepted, a policy record is created — insurer, product, cover details, premium schedule, and documents all attached. Endorsements are tracked against the base policy.',
  },
  {
    id: 'renewal',
    label: 'Renewal',
    number: '05',
    description:
      'JEST surfaces policies approaching expiry — 60, 30, and 7 days out. Renewal reminders are sent, status is tracked (renewed, lapsed, moved), and retention rate is reported automatically.',
  },
  {
    id: 'claim',
    label: 'Claim',
    number: '06',
    description:
      'A claim is registered against the policy, documents are collected, insurer submission is tracked, and settlement is recorded. Every step is logged for the client and for audit.',
  },
  {
    id: 'retention',
    label: 'Retention',
    number: '07',
    description:
      'Clients who renew on time and whose claims are handled well become long-term relationships. JEST tracks cross-sell opportunities, engagement history, and loyalty signals.',
  },
];

export default function LifecycleVisual() {
  return (
    <div id="lifecycle-visual">

      {/* ── Horizontal flow bar ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '2rem',
          overflowX: 'auto',
          paddingBottom: '0.25rem',
        }}
        aria-label="Insurance lifecycle stages"
      >
        {stages.map((stage, index) => (
          <div
            key={stage.id}
            style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
          >
            {/* Stage pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.4rem 0.875rem',
                borderRadius: '999px',
                background: 'var(--color-navy)',
                border: '1.5px solid var(--color-navy)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  fontWeight: 500,
                  color: 'var(--color-amber)',
                }}
              >
                {stage.number}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: 'var(--color-paper)',
                  whiteSpace: 'nowrap',
                }}
              >
                {stage.label}
              </span>
            </div>

            {/* Arrow connector */}
            {index < stages.length - 1 && (
              <div
                aria-hidden="true"
                style={{ display: 'flex', alignItems: 'center', padding: '0 0.2rem' }}
              >
                <div style={{ width: 18, height: 1.5, background: 'var(--color-mist-dark)' }} />
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: '4px solid transparent',
                    borderBottom: '4px solid transparent',
                    borderLeft: '5px solid var(--color-mist-dark)',
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── All stage cards visible at once ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
        }}
        className="lifecycle-grid"
      >
        {stages.map((stage) => (
          <div
            key={stage.id}
            id={`lifecycle-card-${stage.id}`}
            style={{
              padding: '1.25rem',
              background: 'var(--color-white)',
              border: '1px solid var(--color-mist)',
              borderTop: '3px solid var(--color-navy)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.625rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  fontWeight: 500,
                  color: 'var(--color-amber)',
                  letterSpacing: '0.1em',
                }}
              >
                {stage.number}
              </span>
              <h4
                style={{
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  color: 'var(--color-navy)',
                }}
              >
                {stage.label}
              </h4>
            </div>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.65, color: 'var(--color-slate)' }}>
              {stage.description}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .lifecycle-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .lifecycle-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .lifecycle-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
