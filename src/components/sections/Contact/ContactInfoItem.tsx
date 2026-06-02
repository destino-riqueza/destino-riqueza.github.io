import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export type ContactInfoItemProps = {
  icon: LucideIcon;
  title: string;
  /** Clases del contenedor del icono (fondo, borde, hover). */
  badgeClassName: string;
  /** Clases de color del icono. */
  iconClassName: string;
  children: ReactNode;
  href?: string;
  external?: boolean;
};

export const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon: Icon,
  title,
  badgeClassName,
  iconClassName,
  children,
  href,
  external = false,
}) => {
  const content = (
    <>
      <div
        className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-colors ${badgeClassName}`}
      >
        <Icon size={20} className={iconClassName} />
      </div>
      <div>
        <span className="block text-ink font-semibold text-sm">{title}</span>
        <span className="block text-gray-600 text-sm">{children}</span>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-center gap-4 group"
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-4">{content}</div>;
};
