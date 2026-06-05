import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { SectionTag } from '@/src/components/ui';
import { CONTACT } from '@/data';
import { ContactInfoItem } from './ContactInfoItem';

export const Contact = () => (
  <section id="contacto" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: intro */}
        <div>
          <SectionTag>Contacto</SectionTag>
          <h2 className="text-3xl md:text-4xl text-ink mb-4">
            Hablemos. <em className="not-italic text-blue">Sin compromiso.</em>
          </h2>
          <div className="gold-divider" />
          <p className="text-gray-600 leading-relaxed">
            La primera consulta es gratuita. Escríbenos por WhatsApp o correo y
            te explicamos, sin presiones ni tecnicismos, cómo podemos ayudarte a
            construir tu camino hacia la libertad financiera.
          </p>
        </div>

        {/* Right: contact methods */}
        <div className="bg-blue-pale border border-blue-100 rounded-3xl p-8 shadow-sm">
          <h3 className="font-bold text-ink text-lg mb-6">
            Contacta directamente con nosotros
          </h3>
          <div className="flex flex-col gap-5">
            {CONTACT.whatsapps.map((person) => (
              <ContactInfoItem
                key={person.whatsapp}
                icon={MessageCircle}
                title={`WhatsApp · ${person.name}`}
                href={`https://wa.me/${person.whatsapp}`}
                external
                badgeClassName="bg-white border-2 border-green-700"
                iconClassName="text-green-700"
              >
                {person.phone}
              </ContactInfoItem>
            ))}

            <ContactInfoItem
              icon={Mail}
              title="Email"
              href={`mailto:${CONTACT.email}`}
              badgeClassName="bg-white border-2 border-blue"
              iconClassName="text-blue"
            >
              {CONTACT.email}
            </ContactInfoItem>

            <ContactInfoItem
              icon={MapPin}
              title="Ubicación"
              badgeClassName="bg-white border-2 border-blue"
              iconClassName="text-blue"
            >
              {CONTACT.location}
            </ContactInfoItem>
          </div>
        </div>
      </div>
    </div>
  </section>
);
