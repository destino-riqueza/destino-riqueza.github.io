import { MessageCircle, ShieldCheck } from 'lucide-react';
import { Button } from '@/src/components/ui';
import { CONTACT } from '@/data';

// Pre-filled WhatsApp message so the referred person doesn't have to think
// about how to start the conversation — the biggest friction point.
const PREFILLED_MESSAGE =
  'Hola, vengo recomendado/a por un cliente vuestro y me gustaría que me contéis cómo funciona, sin compromiso. ¿Podemos hablar?';

const waLink = (whatsapp: string) =>
  `https://wa.me/${whatsapp}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

export type WhatsappCtaProps = {
  /** Reassurance line shown above the buttons. */
  reassurances?: string[];
};

/**
 * The conversion core of the referral page: two WhatsApp buttons (Pedro and
 * Estrella) with a message already written, plus friction-removing microcopy.
 */
export const WhatsappCta: React.FC<WhatsappCtaProps> = ({
  reassurances = [
    'Sin compromiso',
    'Sin coste',
    'Sin tecnicismos',
    'Te responde una persona, no un bot',
  ],
}) => (
  <div className="flex flex-col items-center">
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
      {CONTACT.whatsapps.map((person) => (
        <Button
          key={person.whatsapp}
          href={waLink(person.whatsapp)}
          variant="whatsapp"
          external
          className="flex-1"
        >
          <MessageCircle size={18} />
          Escribir a {person.name}
        </Button>
      ))}
    </div>

    <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-6 list-none p-0 m-0">
      {reassurances.map((item) => (
        <li
          key={item}
          className="inline-flex items-center gap-1.5 text-sm text-gray-600"
        >
          <ShieldCheck size={15} className="text-green-700 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);
