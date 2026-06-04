import { ArrowRight } from 'lucide-react';
import { Button, SectionHeading } from '@/src/components/ui';
import { STEPS } from '@/data';

export const Process = () => (
  <section id="como-funciona" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading
        tag="Proceso"
        title={
          <>
            Empezar es más fácil{' '}
            <em className="not-italic text-blue">de lo que crees</em>
          </>
        }
      >
        <p className="text-gray-500 max-w-xl mx-auto text-base">
          En tres pasos sencillos, pasas de no saber nada sobre inversiones en
          oro a tener una cartera funcionando a tu medida.
        </p>
      </SectionHeading>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {STEPS.map((step) => (
          <div key={step.num}>
            <div className="w-16 h-16 rounded-2xl border-2 border-blue flex items-center justify-center mb-5">
              <span className="text-xl font-bold text-blue">{step.num}</span>
            </div>
            <h3 className="font-bold text-ink text-base mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Banner CTA */}
      <div className="mt-16 bg-blue-pale border border-blue-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-ink text-2xl md:text-3xl font-bold mb-2">
            ¿Listo para dar el primer paso?
          </h3>
          <p className="text-gray-600 text-base">
            La primera consulta es completamente gratuita y sin compromiso.
          </p>
        </div>
        <Button href="#contacto" variant="primary" className="shrink-0">
          Habla con nosotros
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  </section>
);
