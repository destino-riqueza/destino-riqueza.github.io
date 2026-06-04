import { SITE } from '@/data';

/** Renders the word "Trustpilot" as a link to the company's profile. */
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
