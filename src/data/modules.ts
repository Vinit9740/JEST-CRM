export interface ModuleEntry {
  slug: string;
  label: string;
  headline: string;
  subheadline: string;
  description: string;
  capabilities: { title: string; detail: string }[];
  keyBenefit: string;
  lifecycleStage: string; // which lifecycle stage this maps to
}

export const modules: ModuleEntry[] = [
  {
    slug: 'lead-management',
    label: 'Lead Management',
    headline: 'Every lead captured, every follow-up scheduled.',
    subheadline: 'Turn inquiries into qualified contacts without dropping anything.',
    description:
      'JEST Lead Management gives your sales team a structured pipeline from the moment a prospect makes contact. Capture leads from any source, assign them, qualify them, and move them forward — with full visibility at every stage.',
    lifecycleStage: 'Lead → Qualification',
    capabilities: [
      { title: 'Multi-source capture', detail: 'Web forms, referrals, walk-ins, and call-ins all feed a single lead inbox.' },
      { title: 'Qualification checklist', detail: 'Standardised questions ensure no lead moves forward without the right information.' },
      { title: 'Assignment and routing', detail: 'Auto-assign leads by product type, geography, or round-robin rules.' },
      { title: 'Follow-up task engine', detail: 'Every lead gets a next action — reminders, call-backs, and escalations.' },
      { title: 'Lead source analytics', detail: 'Understand which channels generate the most qualified leads and at what cost.' },
      { title: 'Duplicate detection', detail: 'Automatically surfaces potential duplicate contacts before they pollute your pipeline.' },
    ],
    keyBenefit: 'No lead left behind — every inquiry has an owner, a status, and a next step.',
  },
  {
    slug: 'policy-management',
    label: 'Policy Management',
    headline: 'One record for every policy, from issuance to expiry.',
    subheadline: 'The operational core of your agency\'s book of business.',
    description:
      'Every policy your agency places lives in JEST — with insurer details, coverage data, premium schedules, endorsements, and documents all attached to a single, searchable record. No more scattered folders or half-filled spreadsheets.',
    lifecycleStage: 'Contact → Policy',
    capabilities: [
      { title: 'Policy register', detail: 'Full policy details including insurer, product, sum insured, premium, and dates.' },
      { title: 'Endorsement tracking', detail: 'Log and track every mid-term change with a clear before/after record.' },
      { title: 'Document management', detail: 'Attach policy documents, KYC files, and correspondence to each policy record.' },
      { title: 'Multi-policy client view', detail: 'See all policies across all insurers for any single client at a glance.' },
      { title: 'Premium schedule tracking', detail: 'Monitor premium due dates and payment status for each policy.' },
      { title: 'Insurer and product library', detail: 'Pre-configured insurer and product master for fast, consistent data entry.' },
    ],
    keyBenefit: 'Your entire book of business, structured and searchable — not buried in folders.',
  },
  {
    slug: 'renewals',
    label: 'Renewals',
    headline: 'Renewals handled before they become emergencies.',
    subheadline: 'Automated reminders, expiry tracking, and lapse prevention.',
    description:
      'JEST Renewals turns the most chaotic time of the year into a managed, predictable process. The system surfaces upcoming renewals, sends structured reminders, and tracks every policy through confirmation or lapse.',
    lifecycleStage: 'Policy → Renewal',
    capabilities: [
      { title: 'Renewal calendar', detail: '30, 60, and 90-day expiry views so your team can plan capacity.' },
      { title: 'Automated reminder sequences', detail: 'Configurable reminder cadences — 60, 30, and 7 days before expiry.' },
      { title: 'Lapse risk prioritisation', detail: 'Flag policies most at risk of non-renewal based on payment history and engagement.' },
      { title: 'Renewal confirmation tracking', detail: 'Mark policies as renewed, lapsed, or moved to another insurer.' },
      { title: 'Retention rate reporting', detail: 'Track renewal rates by product, insurer, relationship manager, and team.' },
      { title: 'Cross-sell flag on renewal', detail: 'Identify opportunities to add or upgrade cover at the point of renewal.' },
    ],
    keyBenefit: 'Your renewal rate improves because nothing expires without being actively worked.',
  },
  {
    slug: 'claims',
    label: 'Claims',
    headline: 'Claims coordination that doesn\'t rely on memory.',
    subheadline: 'Track every claim from registration to settlement.',
    description:
      'When a client makes a claim, they need a competent, informed response — fast. JEST Claims gives your team a structured record of every claim, its status, and the documents attached, so no detail is lost and no client is left wondering.',
    lifecycleStage: 'Policy → Claim → Retention',
    capabilities: [
      { title: 'Claim registration', detail: 'Log claims against the relevant policy with incident date, type, and description.' },
      { title: 'Document collection', detail: 'Checklist-driven document gathering ensures nothing is missed before submission.' },
      { title: 'Insurer submission tracking', detail: 'Track submission status, query responses, and insurer turnaround times.' },
      { title: 'Settlement recording', detail: 'Log settlement amounts, dates, and payment methods for full audit trails.' },
      { title: 'Claim status updates to client', detail: 'Internal status stages that map to structured client communications.' },
      { title: 'Claims analytics', detail: 'Understand claim frequency by product, insurer, and client segment.' },
    ],
    keyBenefit: 'Handle every claim with the professionalism that turns one-time clients into loyal ones.',
  },
  {
    slug: 'reporting',
    label: 'Reporting',
    headline: 'Data that explains the business — not just describes it.',
    subheadline: 'Operational and financial reports across every module.',
    description:
      'JEST Reporting brings together data from every module — leads, policies, renewals, claims, and finances — into reports that answer real operational questions, not just fill dashboards.',
    lifecycleStage: 'All stages',
    capabilities: [
      { title: 'Pipeline and conversion report', detail: 'Lead to policy conversion rates by source, product, and team member.' },
      { title: 'Renewal performance report', detail: 'Renewal rates, lapse reasons, and retention trends over time.' },
      { title: 'Premium and commission report', detail: 'Premium volume, commission earned, and outstanding receivables.' },
      { title: 'Claims summary report', detail: 'Claim frequency, settlement rates, and TAT by insurer and product.' },
      { title: 'Team activity report', detail: 'Task completion, follow-up cadence, and contact coverage by team member.' },
      { title: 'Export and scheduling', detail: 'Export any report to CSV. Schedule recurring reports for distribution.' },
    ],
    keyBenefit: 'Stop making decisions based on gut feel — your data is now structured, accessible, and meaningful.',
  },
];

export function getModuleBySlug(slug: string): ModuleEntry | undefined {
  return modules.find((m) => m.slug === slug);
}
