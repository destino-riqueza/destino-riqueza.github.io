import { SITE } from '@/data';

/** Renderiza la palabra "Trustpilot" como enlace a la ficha de la empresa. */
export const TrustpilotLink: React.FC<{ className?: string }> = ({
  className = '',
}) => (
  <a
    href={SITE.trustpilot}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
  >
    Trustpilot
  </a>
);
