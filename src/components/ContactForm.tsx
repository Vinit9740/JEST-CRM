import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import Button from '../ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  teamSize: string;
  currentProcess: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  role?: string;
}

const roleOptions = [
  'Principal / CEO',
  'Sales Manager',
  'Sales Executive / Advisor',
  'Operations Manager',
  'Operations Executive',
  'Accounts / Finance',
  'Customer Service',
  'Admin / Compliance',
  'Other',
];

const teamSizeOptions = [
  '1–5 people',
  '6–15 people',
  '16–50 people',
  '50+ people',
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Full name is required.';
  if (!data.email.trim()) {
    errors.email = 'Work email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^[+\d\s\-()]{7,}$/.test(data.phone)) {
    errors.phone = 'Enter a valid phone number.';
  }
  if (!data.company.trim()) errors.company = 'Company name is required.';
  if (!data.role) errors.role = 'Please select your role.';
  return errors;
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  border: '1.5px solid var(--color-mist-dark)',
  borderRadius: 'var(--radius-sm)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9375rem',
  color: 'var(--color-navy)',
  background: 'var(--color-white)',
  outline: 'none',
  transition: 'border-color 160ms ease',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: 'var(--color-navy)',
  marginBottom: '0.375rem',
};

const errorStyle: React.CSSProperties = {
  color: '#C0392B',
  fontSize: '0.8rem',
  marginTop: '0.25rem',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    teamSize: '',
    currentProcess: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    // Stub: simulate network delay
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  }

  if (submitted) {
    return (
      <div
        id="contact-form-success"
        style={{
          padding: '3rem 2rem',
          textAlign: 'center',
          background: 'var(--color-white)',
          border: '1px solid var(--color-mist)',
          borderRadius: 'var(--radius-lg)',
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'rgba(26,122,122,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
          }}
        >
          <CheckCircle size={32} color="var(--color-amber)" />
        </div>
        <h3 style={{ marginBottom: '0.75rem' }}>Request received.</h3>
        <p style={{ maxWidth: 420, margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
          Thank you, {form.name.split(' ')[0]}. Someone from our team will reach out to you at{' '}
          <strong>{form.email}</strong> within one business day to arrange your demo.
        </p>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      noValidate
      style={{
        background: 'var(--color-white)',
        border: '1px solid var(--color-mist)',
        borderRadius: 'var(--radius-lg)',
        padding: '2.5rem',
      }}
    >
      <h3 style={{ marginBottom: '0.25rem' }}>Book a Demo</h3>
      <p style={{ fontSize: '0.875rem', marginBottom: '2rem' }}>
        Required fields are marked with an asterisk (*).
      </p>

      {/* Row 1: Name + Email */}
      <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
        <div>
          <label htmlFor="form-name" style={labelStyle}>
            Full Name *
          </label>
          <input
            id="form-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Arjun Sharma"
            style={{
              ...inputStyle,
              borderColor: errors.name ? '#C0392B' : 'var(--color-mist-dark)',
            }}
            aria-describedby={errors.name ? 'form-name-error' : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p id="form-name-error" role="alert" style={errorStyle}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="form-email" style={labelStyle}>
            Work Email *
          </label>
          <input
            id="form-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="arjun@agencyname.in"
            style={{
              ...inputStyle,
              borderColor: errors.email ? '#C0392B' : 'var(--color-mist-dark)',
            }}
            aria-describedby={errors.email ? 'form-email-error' : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p id="form-email-error" role="alert" style={errorStyle}>{errors.email}</p>}
        </div>
      </div>

      {/* Row 2: Phone + Company */}
      <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
        <div>
          <label htmlFor="form-phone" style={labelStyle}>
            Phone *
          </label>
          <input
            id="form-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            style={{
              ...inputStyle,
              borderColor: errors.phone ? '#C0392B' : 'var(--color-mist-dark)',
            }}
            aria-describedby={errors.phone ? 'form-phone-error' : undefined}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p id="form-phone-error" role="alert" style={errorStyle}>{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="form-company" style={labelStyle}>
            Company / Agency Name *
          </label>
          <input
            id="form-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={handleChange}
            placeholder="Sharma Insurance Brokers"
            style={{
              ...inputStyle,
              borderColor: errors.company ? '#C0392B' : 'var(--color-mist-dark)',
            }}
            aria-describedby={errors.company ? 'form-company-error' : undefined}
            aria-invalid={!!errors.company}
          />
          {errors.company && <p id="form-company-error" role="alert" style={errorStyle}>{errors.company}</p>}
        </div>
      </div>

      {/* Row 3: Role + Team size */}
      <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
        <div>
          <label htmlFor="form-role" style={labelStyle}>
            Your Role *
          </label>
          <select
            id="form-role"
            name="role"
            value={form.role}
            onChange={handleChange}
            style={{
              ...inputStyle,
              borderColor: errors.role ? '#C0392B' : 'var(--color-mist-dark)',
              cursor: 'pointer',
            }}
            aria-describedby={errors.role ? 'form-role-error' : undefined}
            aria-invalid={!!errors.role}
          >
            <option value="">Select your role</option>
            {roleOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.role && <p id="form-role-error" role="alert" style={errorStyle}>{errors.role}</p>}
        </div>
        <div>
          <label htmlFor="form-team-size" style={labelStyle}>
            Team Size <span style={{ color: 'var(--color-slate)', fontWeight: 400 }}>(optional)</span>
          </label>
          <select
            id="form-team-size"
            name="teamSize"
            value={form.teamSize}
            onChange={handleChange}
            style={{ ...inputStyle, cursor: 'pointer' }}
          >
            <option value="">Select team size</option>
            {teamSizeOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Current process */}
      <div style={{ marginBottom: '1.25rem' }}>
        <label htmlFor="form-current-process" style={labelStyle}>
          How do you currently manage operations?{' '}
          <span style={{ color: 'var(--color-slate)', fontWeight: 400 }}>(optional)</span>
        </label>
        <textarea
          id="form-current-process"
          name="currentProcess"
          value={form.currentProcess}
          onChange={handleChange}
          rows={2}
          placeholder="e.g. Excel spreadsheets, WhatsApp, a mix of tools…"
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>

      {/* Message */}
      <div style={{ marginBottom: '2rem' }}>
        <label htmlFor="form-message" style={labelStyle}>
          Anything else you want us to know?{' '}
          <span style={{ color: 'var(--color-slate)', fontWeight: 400 }}>(optional)</span>
        </label>
        <textarea
          id="form-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="Specific modules you're interested in, team setup, timeline…"
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>

      <Button
        type="submit"
        id="contact-form-submit"
        disabled={submitting}
      >
        {submitting ? 'Sending…' : 'Book a Demo →'}
      </Button>

      <style>{`
        @media (max-width: 580px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
        input:focus, select:focus, textarea:focus {
          border-color: var(--color-navy) !important;
        }
      `}</style>
    </form>
  );
}
