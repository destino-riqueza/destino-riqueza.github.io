import { CheckCircle2 } from 'lucide-react';
import { SectionTag } from '@/src/components/ui';
import { ADVANTAGES } from '@/data';

export const Advantages = () => (
  <section className="py-24 bg-blue-pale">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionTag>Ventajas</SectionTag>
          <h2 className="text-3xl md:text-4xl text-ink mb-4">
            Lo que nos hace <em className="not-italic text-blue">diferentes</em>
          </h2>
          <div className="gold-divider" />
          <p className="text-gray-600 leading-relaxed">
            Hay muchas formas de asesorarte financieramente. Pero pocas te
            ofrecen la combinación de cercanía, conocimiento especializado en
            metales preciosos y un seguimiento personalizado real.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {ADVANTAGES.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-blue shrink-0" />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
