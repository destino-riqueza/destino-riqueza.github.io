import type { ReactNode } from 'react';

export type SectionTagProps = {
  children: ReactNode;
  /** Centers the tag (used in centered section headings). */
  center?: boolean;
};

export const SectionTag: React.FC<SectionTagProps> = ({
  children,
  center = false,
}) => (
  <div className={`section-tag${center ? ' justify-center' : ''}`}>
    {children}
  </div>
);
