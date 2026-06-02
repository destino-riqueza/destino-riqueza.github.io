import type { ReactNode } from 'react';

export type SectionTagProps = {
  children: ReactNode;
  /** Centra el tag (usado en cabeceras de sección centradas). */
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
