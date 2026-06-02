import type { ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'outline' | 'whatsapp' | 'ghost';
export type ButtonSize = 'sm' | 'md';

const variants: Record<ButtonVariant, string> = {
  primary:
    'border-2 border-blue text-blue bg-white hover:bg-blue/10 font-semibold',
  outline:
    'border border-gray-200 hover:border-blue/40 text-gray-600 hover:text-ink font-medium bg-white',
  whatsapp:
    'border-2 border-green-700 text-green-700 bg-white hover:bg-green-700/10 font-medium',
  ghost:
    'border border-blue-100 hover:border-blue-200 text-gray-500 hover:text-ink font-medium bg-white',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-3',
  md: 'px-7 py-4',
};

export type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Abre el enlace en una pestaña nueva con rel de seguridad. */
  external?: boolean;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'outline',
  size = 'md',
  external = false,
  className = '',
}) => (
  <a
    href={href}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl transition-all text-sm ${sizes[size]} ${variants[variant]} ${className}`}
  >
    {children}
  </a>
);
