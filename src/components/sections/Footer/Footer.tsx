import { Linkedin, Mail, MessageCircle, Youtube } from 'lucide-react';
import { Button } from '@/src/components/ui';
import { CONTACT, LEGAL_LINKS, NAV_LINKS, SITE } from '@/data';

const SOCIALS = [
  { label: 'LinkedIn', href: SITE.linkedin, icon: Linkedin },
  { label: 'YouTube', href: SITE.youtube, icon: Youtube },
];

export const Footer = () => (
  <footer className="bg-blue-pale border-t border-blue-100 py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-blue-100">
        {/* Brand */}
        <div>
          <img
            src="/logo.svg"
            alt="Destino Riqueza"
            width={298}
            height={98}
            className="w-2/3 h-auto mb-4"
          />
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Generar riqueza es fácil… cuando te acompañamos.
          </p>
          <div className="flex gap-3 mt-4">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border-2 border-green-700 bg-white flex items-center justify-center text-green-700 hover:bg-green-700/10 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <div className="text-ink font-semibold text-sm mb-4">Navegación</div>
          <ul className="flex flex-col gap-1.5 list-none p-0 m-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-ink text-sm transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick contact */}
        <div>
          <div className="text-ink font-semibold text-sm mb-4">
            Contacto rápido
          </div>
          <div className="flex flex-col gap-3 items-start">
            {CONTACT.whatsapps.map((person) => (
              <Button
                key={person.whatsapp}
                href={`https://wa.me/${person.whatsapp}`}
                variant="whatsapp"
                size="sm"
                external
              >
                <MessageCircle size={16} />
                WhatsApp · {person.name}
              </Button>
            ))}
            <Button
              href={`mailto:${CONTACT.email}`}
              variant="primary"
              size="sm"
            >
              <Mail size={16} />
              Escríbenos un email
            </Button>
          </div>
        </div>
      </div>

      <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} Destino Riqueza. Todos los derechos
          reservados.
        </p>
        <div className="flex gap-4">
          {LEGAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-600 hover:text-ink text-xs transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
