export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const faq: FaqItem[] = [
  // Product
  {
    category: 'Product',
    question: 'What is JEST Policy CRM?',
    answer:
      'JEST Policy CRM is a purpose-built CRM platform for insurance agencies and brokers in India. It manages the full insurance lifecycle — from lead capture through qualification, policy issuance, renewals, and claims — in one connected workspace.',
  },
  {
    category: 'Product',
    question: 'Is JEST a generic CRM or insurance-specific?',
    answer:
      'JEST is built specifically for insurance. The data model, workflows, reminders, and reports are designed around how insurance agencies actually operate — not adapted from a generic sales CRM. You will not spend weeks configuring it to fit your process.',
  },
  {
    category: 'Product',
    question: 'Which modules are included?',
    answer:
      'JEST includes Lead Management, Policy Management, Renewals, Claims, and Reporting as core modules. All modules are connected — a lead becomes a contact, a contact gets policies, policies trigger renewals, and so on. There is no need to integrate separate tools.',
  },
  {
    category: 'Product',
    question: 'Does JEST support multiple lines of insurance?',
    answer:
      'Yes. JEST handles life, health, motor, commercial, and specialty lines. The product and insurer library covers major Indian insurers across all categories, and new products can be added by your administrator.',
  },

  // Onboarding & Setup
  {
    category: 'Onboarding & Setup',
    question: 'How long does it take to get started?',
    answer:
      'Most agencies are operational within a week. Your JEST onboarding specialist will help you configure your insurer list, set up your team, and import your existing policy register. There is no long implementation project.',
  },
  {
    category: 'Onboarding & Setup',
    question: 'Can we migrate our existing data into JEST?',
    answer:
      'Yes. JEST supports data import from spreadsheets (CSV/Excel) for contacts, policies, and renewal registers. Your onboarding specialist will guide you through the import process and validate the data before it goes live.',
  },
  {
    category: 'Onboarding & Setup',
    question: 'Do we need an IT team to set up JEST?',
    answer:
      'No. JEST is a cloud-based SaaS platform. There is nothing to install, no server to manage, and no IT team needed. Your administrator can set up users, roles, and permissions through a web browser.',
  },

  // Security & Compliance
  {
    category: 'Security & Compliance',
    question: 'Where is our data stored?',
    answer:
      'All JEST data is stored in India, on servers hosted within Indian data centre boundaries. We do not route your data through overseas infrastructure.',
  },
  {
    category: 'Security & Compliance',
    question: 'How is our client data protected?',
    answer:
      'Client data is encrypted at rest and in transit. Access is controlled through role-based permissions — every user sees only what their role allows. All actions are logged to a tamper-evident audit trail.',
  },
  {
    category: 'Security & Compliance',
    question: 'Can we control who sees which policies?',
    answer:
      'Yes. JEST\'s role-based access control lets administrators define exactly what each role — sales, operations, accounts, service, compliance — can view, create, edit, or delete. You can also restrict visibility by team or branch.',
  },
  {
    category: 'Security & Compliance',
    question: 'Does JEST maintain an audit trail?',
    answer:
      'Yes. Every create, update, and delete action is logged with a timestamp, user identity, and record reference. Audit logs are read-only and cannot be modified by any user, including administrators.',
  },

  // Pricing & Access
  {
    category: 'Pricing & Access',
    question: 'How is JEST priced?',
    answer:
      'JEST is priced per seat, with plans calibrated for different agency sizes. Contact our team or book a demo for a pricing conversation — we do not publish a public price list because the right plan depends on your team structure and modules needed.',
  },
  {
    category: 'Pricing & Access',
    question: 'Is there a free trial?',
    answer:
      'We offer a guided demo and a structured pilot for qualifying agencies. Book a demo to start that conversation — we will walk you through the product and discuss next steps.',
  },
  {
    category: 'Pricing & Access',
    question: 'Can we add users as our team grows?',
    answer:
      'Yes. Seats can be added at any time. Your account manager will handle the change and your billing will adjust from the next cycle.',
  },

  // Support
  {
    category: 'Support',
    question: 'What support is available after go-live?',
    answer:
      'All JEST customers have access to email and chat support. Depending on your plan, you may also have a dedicated account manager and priority support SLAs. We also maintain a help centre with guides, how-tos, and release notes.',
  },
  {
    category: 'Support',
    question: 'Who do we contact if something goes wrong?',
    answer:
      'Your primary contact is your dedicated account manager. For urgent technical issues, our support team is reachable via in-app chat and email. Response SLAs depend on your plan tier.',
  },
];

export const faqCategories = [...new Set(faq.map((f) => f.category))];
