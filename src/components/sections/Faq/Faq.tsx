import { SectionHeading } from '@/src/components/ui';
import FaqAccordion from './FaqAccordion';

export const Faq = () => (
  <section id="faq" className="py-24 bg-blue-pale">
    <div className="max-w-4xl mx-auto px-6">
      <SectionHeading
        tag="Preguntas frecuentes"
        title={
          <>
            Resolvemos todas <em className="not-italic text-blue">tus dudas</em>
          </>
        }
      >
        <p className="text-gray-500 max-w-xl mx-auto text-base">
          Si tienes alguna pregunta que no aparece aquí, no dudes en
          contactarnos directamente. Estamos para ayudarte.
        </p>
      </SectionHeading>
      <FaqAccordion />
    </div>
  </section>
);
