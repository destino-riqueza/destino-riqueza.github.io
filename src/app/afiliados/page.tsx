import { ArrowRight, Gift, HandCoins, PlayCircle, Users } from 'lucide-react';
import type { Metadata } from 'next';
import { ReferralForm } from '@/src/components/affiliates';
import { Footer, Navbar } from '@/src/components/sections';
import { Button, SectionTag } from '@/src/components/ui';
import './../styles.css';

export const metadata: Metadata = {
  title: 'Programa de afiliados · Destino Riqueza',
  description:
    'Recomienda Destino Riqueza y gana por cada persona que empieza a invertir en oro con nuestro acompañamiento. Únete a nuestro programa de afiliados.',
  alternates: { canonical: '/afiliados' },
  // Campaign landing: shared by direct link, kept out of search until desired.
  robots: { index: false, follow: true },
};

const BENEFITS = [
  {
    icon: HandCoins,
    title: 'Gana por cada recomendación',
    text: 'Recibe una recompensa por cada persona que empieza a invertir con nosotros gracias a ti.',
  },
  {
    icon: Users,
    title: 'Ayuda a quien te importa',
    text: 'Acompañamos a tus recomendados paso a paso, con la misma cercanía y transparencia de siempre.',
  },
  {
    icon: Gift,
    title: 'Sin coste ni complicaciones',
    text: 'Apuntarte es gratis. Compartes tu enlace y nosotros nos encargamos del resto.',
  },
];

export default function AfiliadosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 bg-blue-pale">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center flex flex-col items-center">
          <SectionTag center>Programa de afiliados</SectionTag>

          <h1 className="text-4xl md:text-5xl lg:text-6xl text-ink leading-tight max-w-3xl">
            Recomienda Destino Riqueza y{' '}
            <em className="not-italic text-blue">gana con cada persona</em> que
            empieza a invertir
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mt-6">
            Si confías en lo que hacemos, compártelo. Por cada persona que
            empieza a generar riqueza con nuestro acompañamiento, tú también
            ganas.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <Button href="#unirme" variant="primary">
              Quiero unirme
              <ArrowRight size={16} />
            </Button>
            <Button href="#como-funciona">
              <PlayCircle size={16} />
              Ver cómo funciona
            </Button>
          </div>
        </div>

        {/* Bottom wave into white */}
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

      {/* Benefits */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full border-2 border-blue bg-white flex items-center justify-center mb-4 text-blue">
                <Icon size={22} />
              </div>
              <h3 className="text-lg text-ink font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-line" />

      {/* Video */}
      <section id="como-funciona" className="bg-blue-pale py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionTag center>En 2 minutos</SectionTag>
          <h2 className="text-3xl md:text-4xl text-ink mb-4">
            Descubre cómo funciona el programa
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed">
            Te lo contamos en vídeo: qué es, cómo te apuntas y cómo ganas por
            cada recomendación.
          </p>

          {/* Responsive 16:9 video container.
              When you have the video, swap this placeholder for the embed, e.g.:
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Programa de afiliados de Destino Riqueza"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              /> */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm aspect-video flex items-center justify-center">
            <div className="flex flex-col items-center text-gray-400">
              <PlayCircle size={56} strokeWidth={1.5} />
              <span className="text-sm mt-3">Vídeo próximamente</span>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-line" />

      {/* Sign-up embed */}
      <section id="unirme" className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-10">
          <SectionTag center>Únete ahora</SectionTag>
          <h2 className="text-3xl md:text-4xl text-ink mb-4">
            Apúntate al programa de afiliados
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            Rellena tus datos y recibe tu enlace personal para empezar a
            recomendar y ganar.
          </p>
        </div>

        <ReferralForm />
      </section>

      <Footer />
    </div>
  );
}
