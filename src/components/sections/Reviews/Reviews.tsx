import { compareDesc } from 'date-fns';
import { ArrowRight, Star } from 'lucide-react';
import { SectionHeading, TrustpilotLink } from '@/src/components/ui';
import { SITE, TESTIMONIALS } from '@/data';
import { parseDate } from '@/src/lib/dates';
import { ReviewCard } from './ReviewCard';

// Más recientes primero. Array.prototype.sort es estable, por lo que ante
// fechas iguales se mantiene el orden original del array.
const sortedTestimonials = [...TESTIMONIALS].sort((a, b) =>
  compareDesc(parseDate(a.date), parseDate(b.date)),
);

export const Reviews = () => (
  <section id="resenas" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading
        tag="Testimonios"
        title={
          <>
            Lo que dicen{' '}
            <em className="not-italic text-blue">nuestros clientes</em>
          </>
        }
      >
        {/* Insignia de Trustpilot */}
        <div className="inline-flex items-center gap-3 bg-[#00B67A]/10 border border-[#00B67A]/20 rounded-xl px-5 py-3 mt-2">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-5 h-5 bg-[#00B67A] flex items-center justify-center rounded-sm"
              >
                <Star size={12} className="fill-white text-white" />
              </div>
            ))}
          </div>
          <span className="text-sm font-semibold text-[#00754F]">
            Excelente
          </span>
          <span className="text-sm text-gray-500">
            en{' '}
            <TrustpilotLink className="font-medium text-[#00754F] hover:underline" />
          </span>
        </div>
      </SectionHeading>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedTestimonials.map((testimonial) => (
          <ReviewCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href={SITE.trustpilot}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue transition-colors"
        >
          Ver todas las reseñas en Trustpilot
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  </section>
);
