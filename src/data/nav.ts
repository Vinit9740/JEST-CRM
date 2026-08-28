export interface NavLink {
  label: string;
  href: string;
}

export interface NavDropdown {
  label: string;
  items: NavLink[];
}

export type NavItem = NavLink | NavDropdown;

export function isDropdown(item: NavItem): item is NavDropdown {
  return 'items' in item;
}

export const solutionsItems: NavLink[] = [
  { label: 'Management',          href: '/solutions/management' },
  { label: 'Sales',               href: '/solutions/sales' },
  { label: 'Renewals & Retention',href: '/solutions/renewals-retention' },
  { label: 'Operations',          href: '/solutions/operations' },
  { label: 'Accounts & Finance',  href: '/solutions/accounts-finance' },
  { label: 'Customer Service',    href: '/solutions/customer-service' },
  { label: 'Admin & Compliance',  href: '/solutions/admin-compliance' },
];

export const modulesItems: NavLink[] = [
  { label: 'Lead Management',   href: '/modules/lead-management' },
  { label: 'Policy Management', href: '/modules/policy-management' },
  { label: 'Renewals',          href: '/modules/renewals' },
  { label: 'Claims',            href: '/modules/claims' },
  { label: 'Reporting',         href: '/modules/reporting' },
];

export const primaryNavItems: NavItem[] = [
  { label: 'Platform',     href: '/platform' },
  { label: 'Solutions',    items: solutionsItems },
  { label: 'Modules',      items: modulesItems },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Security',     href: '/security' },
  { label: 'Resources',    href: '/resources' },
];

export const footerColumns: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Platform',
    links: [
      { label: 'Platform Overview', href: '/platform' },
      { label: 'How It Works',      href: '/how-it-works' },
      { label: 'Security',          href: '/security' },
    ],
  },
  {
    heading: 'Solutions',
    links: solutionsItems,
  },
  {
    heading: 'Modules',
    links: modulesItems,
  },
  {
    heading: 'Company',
    links: [
      { label: 'Resources / FAQ', href: '/resources' },
      { label: 'Contact Us',      href: '/contact' },
      { label: 'Login',           href: '/login' },
    ],
  },
];
