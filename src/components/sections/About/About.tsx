import { Heart } from 'lucide-react';
import Image from 'next/image';
import { IconBadge, SectionTag } from '@/src/components/ui';
import { VALUES } from '@/data';

export const About = () => (
  <section id="quienes-somos" className="py-24 bg-blue-pale">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div className="aspect-4/5 rounded-3xl overflow-hidden bg-ink flex items-center justify-center shadow-2xl relative">
            <Image
              src="/pedro-y-estrella.jpg"
              alt="Foto de Pedro y Estrella"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-6 -right-2 md:-right-6 bg-white rounded-2xl shadow-xl p-5 max-w-xs">
            <div className="flex items-center gap-3">
              <IconBadge icon={Heart} size="sm" iconSize={18} />
              <div>
                <span className="block text-sm font-bold text-ink">
                  Pedro y Estrella
                </span>
                <span className="block text-xs text-gray-600">
                  Tu equipo de confianza
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <SectionTag>Quiénes somos</SectionTag>
          <h2 className="text-3xl md:text-4xl text-ink mb-4">
            No somos asesores.
            <br />
            <em className="not-italic text-blue">
              Somos tus compañeros de viaje.
            </em>
          </h2>
          <div className="gold-divider" />
          <p className="text-gray-600 leading-relaxed mb-4">
            Pedro y Estrella comenzaron su camino en el mundo de las inversiones
            buscando lo mismo que tú: una forma de proteger y hacer crecer su
            patrimonio sin depender de la volatilidad de los mercados
            tradicionales. Descubrieron el poder del oro y los metales preciosos
            y, con el tiempo, se convirtieron en referentes en este sector.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Hoy, como pareja y como equipo profesional, comparten ese
            conocimiento con cientos de familias que han encontrado en ellos no
            solo asesores, sino personas cercanas que entienden sus miedos, sus
            sueños y sus necesidades. Su filosofía es simple: si ellos lo
            harían, te lo recomiendan.
          </p>

          {/* Values */}
          <div className="flex flex-col gap-4">
            {VALUES.map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="shrink-0">
                  <IconBadge icon={icon} size="sm" iconSize={18} />
                </div>
                <div>
                  <h4 className="font-bold text-ink text-sm mb-0.5">{title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
