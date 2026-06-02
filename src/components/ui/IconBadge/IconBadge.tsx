import type { LucideIcon } from 'lucide-react';

export type IconBadgeSize = 'sm' | 'md' | 'lg';

const sizeStyles: Record<IconBadgeSize, string> = {
  sm: 'w-10 h-10 rounded-full',
  md: 'w-12 h-12 rounded-xl',
  lg: 'w-16 h-16 rounded-2xl',
};

export type IconBadgeProps = {
  icon: LucideIcon;
  size?: IconBadgeSize;
  /** Tamaño del icono en píxeles. Por defecto 22. */
  iconSize?: number;
  /** Clases extra para el contenedor (márgenes, hover, etc.). */
  className?: string;
};

/** Insignia con aro de marca (contorno) que envuelve un icono de Lucide. */
export const IconBadge: React.FC<IconBadgeProps> = ({
  icon: Icon,
  size = 'md',
  iconSize = 22,
  className = '',
}) => (
  <div
    className={`${sizeStyles[size]} border-2 border-blue bg-white flex items-center justify-center ${className}`}
  >
    <Icon size={iconSize} className="text-blue" />
  </div>
);
