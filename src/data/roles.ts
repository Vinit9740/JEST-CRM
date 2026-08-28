export interface RoleEntry {
  slug: string;
  label: string;
  headline: string;
  subheadline: string;
  description: string;
  oneLiner: string; // used on homepage grid
  features: string[];
  keyBenefit: string;
}

export const roles: RoleEntry[] = [
  {
    slug: 'management',
    label: 'Management',
    headline: 'Visibility across every policy, team, and rupee.',
    subheadline: 'For principals, CEOs, and senior managers.',
    description:
      'Get a real-time operating picture of your agency. Track pipeline health, renewal exposure, team performance, and premium volume — all without chasing reports.',
    oneLiner: 'See your full agency operation in one dashboard.',
    features: [
      'Agency-wide pipeline and revenue dashboard',
      'Team performance scorecards',
      'Renewal exposure calendar',
      'Premium and commission tracking',
      'Audit trail and activity logs',
      'Cross-team policy visibility',
    ],
    keyBenefit: 'Stop relying on end-of-month reports. Know where you stand today.',
  },
  {
    slug: 'sales',
    label: 'Sales',
    headline: 'From first inquiry to bound policy, in one place.',
    subheadline: 'For advisors, relationship managers, and sales executives.',
    description:
      'Manage your lead pipeline, schedule follow-ups, and convert prospects to policies without switching between WhatsApp, spreadsheets, and memory.',
    oneLiner: 'Manage leads, follow-ups, and conversions without the chaos.',
    features: [
      'Lead capture from web, referral, and walk-in',
      'Qualification checklist and contact timeline',
      'Follow-up reminders and task queue',
      'Quote comparison and proposal generation',
      'Policy issuance and document upload',
      'Commission and incentive visibility',
    ],
    keyBenefit: 'Never drop a lead again — every prospect has a clear next action.',
  },
  {
    slug: 'renewals-retention',
    label: 'Renewals & Retention',
    headline: 'Renewals that happen on time, every time.',
    subheadline: 'For renewal desks, relationship managers, and retention teams.',
    description:
      'Proactively manage every policy renewal with automated reminders, expiry calendars, and a clear view of at-risk policies before they lapse.',
    oneLiner: 'Catch every renewal before it slips through.',
    features: [
      '30/7/1-day renewal reminder sequences',
      'Lapse risk scoring and prioritisation',
      'Bulk renewal outreach tools',
      'Renewal vs. lapse rate tracking',
      'Customer preference and insurer loyalty data',
      'Cross-sell and upsell opportunity flags',
    ],
    keyBenefit: 'Turn renewal season from a crisis into a managed, predictable process.',
  },
  {
    slug: 'operations',
    label: 'Operations',
    headline: 'Run the back-office without the paperwork pile.',
    subheadline: 'For ops executives, policy processors, and team leads.',
    description:
      'Coordinate policy issuance, document collection, insurer coordination, and status updates — all tracked in one place so nothing falls through the gaps.',
    oneLiner: 'Coordinate policy processing and document collection with clarity.',
    features: [
      'Policy issuance and endorsement tracking',
      'Document collection checklist per policy',
      'Insurer coordination and TAT tracking',
      'Team task assignment and status updates',
      'Exception and error queue management',
      'Workflow status dashboards',
    ],
    keyBenefit: 'Every policy has a clear owner, a clear status, and a clear deadline.',
  },
  {
    slug: 'accounts-finance',
    label: 'Accounts & Finance',
    headline: 'Premiums, commissions, and reconciliation — tracked.',
    subheadline: 'For accounts executives, finance managers, and compliance leads.',
    description:
      'Track premium collections, commission receivables, and payment statuses without manual reconciliation across bank statements and policy registers.',
    oneLiner: 'Track premium collections and commissions without manual reconciliation.',
    features: [
      'Premium collection and payment status',
      'Commission receivable tracking per policy',
      'Insurer-wise reconciliation view',
      'Outstanding balance alerts',
      'Receipt and voucher generation',
      'Finance reports and exports',
    ],
    keyBenefit: 'Know what you are owed, what you have collected, and what is overdue — at a glance.',
  },
  {
    slug: 'customer-service',
    label: 'Customer Service',
    headline: 'Every client query answered with context.',
    subheadline: 'For servicing executives and relationship managers.',
    description:
      "Pull up any client's full policy history, active cover details, and past interactions instantly — so no customer ever has to repeat their story.",
    oneLiner: 'Resolve client queries with full policy context, instantly.',
    features: [
      '360° client profile with all policies',
      'Interaction and call log history',
      'Document retrieval in seconds',
      'Claim status visibility',
      'Servicing request ticket management',
      'Endorsement and correction tracking',
    ],
    keyBenefit: 'Your team answers with confidence because everything they need is right there.',
  },
  {
    slug: 'admin-compliance',
    label: 'Admin & Compliance',
    headline: 'Control who sees what, and prove it.',
    subheadline: 'For administrators, compliance officers, and principals.',
    description:
      'Configure role-based access, manage user permissions, and maintain a complete audit trail for every action taken in the system.',
    oneLiner: 'Configure access, audit actions, and stay in control.',
    features: [
      'Role-based access control configuration',
      'User and team management',
      'Full audit trail per record',
      'Data export and backup controls',
      'Document access permissions',
      'Compliance activity reports',
    ],
    keyBenefit: 'Demonstrate accountability for every action, every policy, every document.',
  },
];

export function getRoleBySlug(slug: string): RoleEntry | undefined {
  return roles.find((r) => r.slug === slug);
}
