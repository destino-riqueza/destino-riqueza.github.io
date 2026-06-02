import type { ReactNode } from 'react';
import { SectionTag } from '@/src/components/ui/SectionTag';

export type SectionHeadingProps = {
  /** Texto del tag superior (en mayúsculas decorativas). */
  tag: ReactNode;
  /** Título principal de la sección. Admite JSX (p. ej. <em>). */
  title: ReactNode;
  /** Contenido bajo el título (descripción, badges, etc.). */
  children?: ReactNode;
  className?: string;
};

/** Cabecera centrada reutilizable para las secciones de la landing. */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  children,
  className = 'mb-14',
}) => (
  <div className={`text-center ${className}`}>
    <SectionTag center>{tag}</SectionTag>
    <h2 className="text-3xl md:text-4xl text-ink mb-4">{title}</h2>
    {children}
  </div>
);
