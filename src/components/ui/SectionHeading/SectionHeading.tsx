import type { ReactNode } from 'react';
import { SectionTag } from '@/src/components/ui/SectionTag';

export type SectionHeadingProps = {
  /** Top tag text (in decorative uppercase). */
  tag: ReactNode;
  /** Main section title. Accepts JSX (e.g. <em>). */
  title: ReactNode;
  /** Content below the title (description, badges, etc.). */
  children?: ReactNode;
  className?: string;
};

/** Reusable centered heading for the landing sections. */
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
