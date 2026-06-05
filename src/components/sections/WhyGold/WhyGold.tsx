import { IconBadge, SectionHeading } from '@/src/components/ui';
import { WHY_GOLD } from '@/data';

export const WhyGold = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading
        tag="La inversión del futuro"
        title={
          <>
            ¿Por qué invertir en{' '}
            <em className="not-italic text-blue">oro y metales preciosos?</em>
          </>
        }
      >
        <p className="text-gray-600 max-w-2xl mx-auto text-base">
          En un mundo lleno de incertidumbre financiera, el oro sigue siendo el
          activo más estable y fiable de la historia. No es una moda; lleva
          miles de años siendo riqueza real.
        </p>
      </SectionHeading>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {WHY_GOLD.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="bg-white border border-blue-100 rounded-2xl p-6 hover:shadow-md hover:border-blue/30 transition-all group"
          >
            <IconBadge icon={icon} size="md" className="mb-4" />
            <h3 className="text-ink font-bold mb-2 text-base">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
