import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'secondary-light';
type ButtonSize = 'default' | 'sm';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  id?: string;
}

export default function Button({
  variant = 'primary',
  size = 'default',
  href,
  to,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled,
  id,
}: ButtonProps) {
  const classes = [
    'btn',
    `btn--${variant}`,
    size === 'sm' ? 'btn--sm' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (to) {
    return (
      <Link to={to} className={classes} id={id}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} id={id}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      id={id}
    >
      {children}
    </button>
  );
}
