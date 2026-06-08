import {
  Coffee,
  Eye,
  HeartHandshake,
  PlayCircle,
  Sparkles,
} from 'lucide-react';
import type { Metadata } from 'next';
import { WhatsappCta } from '@/src/components/referrals';
import { Footer, Navbar } from '@/src/components/sections';
import { ReviewCard } from '@/src/components/sections/Reviews/ReviewCard';
import { SectionTag, StarRating, TrustpilotLink } from '@/src/components/ui';
import { METRICS, REVIEWS } from '@/data';
import './../styles.css';

export const metadata: Metadata = {
  title: 'Te han recomendado · Destino Riqueza',
  description:
    'Alguien que confía en nosotros te ha recomendado. Conoce a Pedro y Estrella y da el primer paso, sin compromiso, por WhatsApp.',
  alternates: { canonical: '/referidos' },
  // Page shared by direct link with referred people; kept out of search.
  robots: { index: false, follow: true },
};

// Loom embed (share URL with /share/ swapped for /embed/).
const LOOM_EMBED_URL =
  'https://www.loom.com/embed/f06efbd89af94ad1b52f9e4f28a227b3';

// Three reviews that reinforce trust and the "I recommend them" message.
const FEATURED_REVIEWS = REVIEWS.filter((r) =>
  ['Maria Urbano Linares', 'Gracia Martín', 'Soledad García Vaquero'].includes(
    r.name,
  ),
);

const REASONS = [
  {
    icon: HeartHandshake,
    title: 'Te recomendó alguien que ya confía en nosotros',
    text: 'No has llegado por un anuncio. Una persona que conoces y en quien confías ya ha vivido la experiencia y ha querido compartirla contigo.',
  },
  {
    icon: Eye,
    title: 'Transparencia total, sin letra pequeña',
    text: 'Asesoramiento independiente regulado (MiFID II). Te explicamos todo con claridad y en tu idioma, sin tecnicismos ni sorpresas.',
  },
  {
    icon: Coffee,
    title: 'La primera conversación es solo eso: una conversación',
    text: 'Sin compromiso y sin coste. Nos cuentas tu situación, resolvemos tus dudas y decides con calma. Nada de presión.',
  },
];

export default function ReferidosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero — warm welcome that leans on the existing trust */}
      <section className="relative overflow-hidden pt-16 bg-blue-pale">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center flex flex-col items-center">
          <SectionTag center>
            <Sparkles size={14} />
            Te han recomendado
          </SectionTag>

          <h1 className="text-4xl md:text-5xl text-ink leading-tight">
            Alguien en quien confías nos ha recomendado.{' '}
            <em className="not-italic text-blue">Encantados de conocerte.</em>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mt-6">
            Si has llegado hasta aquí es porque alguien que ya invierte con
            nosotros pensó en ti. Tómate dos minutos para conocernos: sin
            compromiso, sin coste y sin tecnicismos.
          </p>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col items-center">
              <span className="text-ink font-bold text-xl">
                {METRICS.rating}
              </span>
              <div className="mt-0.5">
                <StarRating rating={5} size={12} />
              </div>
              <TrustpilotLink className="text-gray-600 text-xs mt-0.5 hover:text-blue hover:underline" />
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="flex flex-col items-center">
              <span className="text-ink font-bold text-xl">
                {METRICS.families}
              </span>
              <span className="text-gray-600 text-xs">familias asesoradas</span>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="flex flex-col items-center">
              <span className="text-ink font-bold text-xl">
                {METRICS.experience}
              </span>
              <span className="text-gray-600 text-xs">años de experiencia</span>
            </div>
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

      {/* Video — Pedro & Estrella put a face to the name */}
      <section className="max-w-3xl mx-auto px-6 pt-12 md:pt-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl text-ink mb-3">
            Mira nuestro mensaje para ti
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto leading-relaxed">
            Antes de nada, queremos ponernos cara. Dale al play y deja que Pedro
            y Estrella te cuenten en persona quiénes somos y cómo te podemos
            ayudar.
          </p>
        </div>

        {/* Responsive 16:9 video. When you have the Loom link, set LOOM_EMBED_URL
            above (e.g. https://www.loom.com/embed/VIDEO_ID). */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md aspect-video">
          {LOOM_EMBED_URL ? (
            <iframe
              src={LOOM_EMBED_URL}
              title="Mensaje de Pedro y Estrella para ti"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
              <PlayCircle size={56} strokeWidth={1.5} />
              <span className="text-sm mt-3">Vídeo próximamente</span>
            </div>
          )}
        </div>
      </section>

      {/* Primary CTA — right after the video, the conversion moment */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="rounded-3xl bg-blue-pale border border-blue-100 shadow-sm px-6 py-12 md:px-12 md:py-14 text-center">
          <h2 className="text-2xl md:text-3xl mb-3 text-ink">
            ¿Listo/a para dar el primer paso?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
            Es tan sencillo como escribirnos un WhatsApp. Te respondemos
            personalmente, resolvemos tus dudas y, si te convence, seguimos
            adelante. Tú marcas el ritmo.
          </p>
          <WhatsappCta />
        </div>
      </section>

      <div className="gold-line" />

      {/* Objection handling — address the hesitation directly */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <SectionTag center>Sabemos que da respeto</SectionTag>
          <h2 className="text-3xl md:text-4xl text-ink mb-4">
            Confiar con el dinero cuesta. Lo entendemos.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Por eso no te pedimos que confíes a ciegas. Te pedimos solo una
            conversación. Esto es lo que nos diferencia:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full border-2 border-blue bg-white flex items-center justify-center mb-4 text-blue">
                <Icon size={22} />
              </div>
              <h3 className="text-lg text-ink font-semibold mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof — real reviews reinforce the recommendation */}
      <section className="bg-blue-pale py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionTag center>No solo lo decimos nosotros</SectionTag>
            <h2 className="text-3xl md:text-4xl text-ink mb-4">
              Personas como tú que un día dieron el paso
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
              Valoración media de {METRICS.rating}★ en{' '}
              <TrustpilotLink className="text-blue hover:underline" />. Estas
              son algunas de sus palabras.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURED_REVIEWS.map((review) => (
              <ReviewCard key={review.name} review={review} surface="white" />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — close warmly */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl text-ink mb-4">
          Estamos aquí para acompañarte
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed">
          Sin compromiso y sin coste. Escríbenos cuando quieras y empieza por
          una simple conversación.
        </p>
        <WhatsappCta />
      </section>

      <Footer />
    </div>
  );
}
