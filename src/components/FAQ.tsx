'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
  {
    q: '¿Cómo empiezo a invertir con vosotros?',
    a: 'El primer paso es muy sencillo: contáctanos a través del formulario o por WhatsApp y concertamos una consulta gratuita sin ningún compromiso. En esa primera conversación te explicamos todo lo que necesitas saber, respondemos a tus dudas y valoramos juntos cuál es el mejor punto de partida para ti.',
  },
  {
    q: '¿Cuál es la inversión mínima para empezar?',
    a: 'Adaptamos nuestras propuestas a cada situación personal. Puedes empezar con cantidades muy accesibles y ir ampliando tu cartera a medida que te sientas cómodo. Durante la consulta inicial te daremos todas las cifras concretas según tu perfil.',
  },
  {
    q: '¿Por qué invertir en oro y metales preciosos?',
    a: 'El oro es uno de los activos con mayor historial de preservación de valor a lo largo de la historia. Funciona como refugio en épocas de incertidumbre, protege frente a la inflación y no está correlacionado con los mercados de renta variable. Es tangible, universal y siempre ha tenido demanda.',
  },
  {
    q: '¿Qué rentabilidad puedo esperar?',
    a: 'La rentabilidad depende del tipo de inversión, el plazo y el perfil de riesgo de cada persona. Somos completamente transparentes con las cifras reales y los históricos de cada producto. Nunca prometemos rentabilidades imposibles; te mostramos datos reales y tú decides con información completa.',
  },
  {
    q: '¿Es segura mi inversión?',
    a: 'La seguridad es uno de nuestros pilares. Los activos físicos como el oro son bienes reales que no pueden desaparecer como un número en una pantalla. Te explicamos con detalle los mecanismos de custodia, garantías y protección de tu inversión desde el primer momento.',
  },
  {
    q: '¿Puedo recuperar mi dinero cuando quiera?',
    a: 'Sí. Te explicamos con claridad los plazos y condiciones de liquidez de cada producto antes de que tomes ninguna decisión. Creemos que la libertad financiera incluye poder acceder a tu dinero cuando lo necesites, y eso lo tenemos muy presente en cada recomendación.',
  },
  {
    q: '¿Tengo que tener conocimientos de finanzas?',
    a: 'Para nada. De eso nos encargamos nosotros. Nuestra misión es acompañarte y explicarte cada paso de forma sencilla y clara, sin tecnicismos innecesarios. Muchos de nuestros clientes empezaron sin ningún conocimiento previo y hoy gestionan su patrimonio con total confianza.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {FAQS.map((faq, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold text-[var(--color-charcoal)] text-base leading-snug">
              {faq.q}
            </span>
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-gold-pale)] flex items-center justify-center text-[var(--color-gold)]">
              {openIndex === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </span>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
