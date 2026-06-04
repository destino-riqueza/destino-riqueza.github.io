import { ArrowRight, ChevronRight } from 'lucide-react';
import {
  Button,
  SectionTag,
  StarRating,
  TrustpilotLink,
} from '@/src/components/ui';
import { METRICS } from '@/data';

export const Hero = () => (
  <section
    id="inicio"
    className="md:min-h-screen flex items-center relative overflow-hidden pt-16 bg-blue-pale"
  >
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid md:grid-cols-2 gap-12 items-center w-full">
      {/* Izquierda: texto */}
      <div className="flex flex-col gap-6">
        <SectionTag>Destino Riqueza</SectionTag>

        <h1 className="text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">
          Generar riqueza es fácil…{' '}
          <em className="not-italic text-blue">cuando te acompañamos</em>
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
          Pedro y Estrella te guían paso a paso en el mundo de la inversión en
          oro y metales preciosos. Sin complicaciones, sin tecnicismos, con
          total transparencia.
        </p>

        <div className="flex flex-wrap gap-4 mt-2">
          <Button href="#contacto" variant="primary">
            Empieza ahora
            <ArrowRight size={16} />
          </Button>
          <Button href="#quienes-somos">
            Conócenos
            <ChevronRight size={16} />
          </Button>
        </div>

        {/* Sellos de confianza */}
        <div className="flex items-center gap-6 mt-4 pt-6 border-t border-gray-200">
          <div className="flex flex-col">
            <span className="text-ink font-bold text-xl">{METRICS.rating}</span>
            <div className="mt-0.5">
              <StarRating rating={5} size={12} />
            </div>
            <TrustpilotLink className="text-gray-600 text-xs mt-0.5 hover:text-blue hover:underline" />
          </div>
          <div className="w-px h-12 bg-gray-200" />
          <div className="flex flex-col">
            <span className="text-ink font-bold text-xl">{METRICS.families}</span>
            <span className="text-gray-600 text-xs">familias asesoradas</span>
          </div>
          <div className="w-px h-12 bg-gray-200" />
          <div className="flex flex-col">
            <span className="text-ink font-bold text-xl">100%</span>
            <span className="text-gray-600 text-xs">transparentes</span>
          </div>
        </div>
      </div>

      {/* Derecha: visual */}
      <div className="flex justify-center items-center">
        <div className="relative">
          <div className="float-animate">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-blue/25 flex items-center justify-center relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border border-blue/20 flex items-center justify-center">
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-full border-2 border-blue bg-white flex items-center justify-center">
                  <img
                    src="/lingotes-oro.svg"
                    alt="Lingotes de oro"
                    className="w-24 h-24 md:w-32 md:h-32"
                  />
                </div>
              </div>
              {/* Puntos en órbita */}
              <div className="absolute top-4 right-12 w-3 h-3 rounded-full bg-gold opacity-90" />
              <div className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-blue opacity-70" />
              <div className="absolute top-1/2 -right-4 w-4 h-4 rounded-full border-2 border-blue bg-white" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Onda inferior hacia blanco */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
      >
        <path
          d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z"
          fill="white"
        />
      </svg>
    </div>
  </section>
);
