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
  /** Icon size in pixels. Defaults to 22. */
  iconSize?: number;
  /** Extra classes for the container (margins, hover, etc.). */
  className?: string;
};

/** Badge with a brand ring (outline) wrapping a Lucide icon. */
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
