import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'alt' | 'navy';
  id?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

export default function Section({
  children,
  className = '',
  variant = 'default',
  id,
  as: Tag = 'section',
  style,
}: SectionProps) {
  const variantClass =
    variant === 'alt' ? 'section--alt' : variant === 'navy' ? 'section--navy' : '';

  return (
    <Tag
      id={id}
      style={style}
      className={['section', variantClass, className].filter(Boolean).join(' ')}
    >
      <div className="container">{children}</div>
    </Tag>
  );
}
