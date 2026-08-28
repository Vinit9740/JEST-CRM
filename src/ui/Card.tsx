import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'paper';
  id?: string;
  style?: React.CSSProperties;
}

export default function Card({ children, className = '', variant = 'default', id, style }: CardProps) {
  return (
    <div
      id={id}
      style={style}
      className={['card', variant === 'paper' ? 'card--paper' : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}
