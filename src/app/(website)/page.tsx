import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Eye,
  Gem,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react';
import Image from 'next/image';

import ContactForm from '@/src/components/ContactForm';
import FAQ from '@/src/components/FAQ';
import MobileMenu from '@/src/components/MobileMenu';
import './styles.css';
import { Button } from '@/src/components/Button';
import { StarRating } from '@/src/components/StarRating';

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#quienes-somos', label: 'Quiénes somos' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#resenas', label: 'Reseñas' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
];

const STATS = [
  { value: '+200', label: 'Familias asesoradas' },
  { value: '+8', label: 'Años de experiencia' },
  { value: '100%', label: 'Transparencia total' },
  { value: '4.9★', label: 'Valoración media' },
];

const VALUES = [
  {
    icon: Heart,
    title: 'Cercanía',
    desc: 'No somos un banco ni una gran corporación. Somos Pedro y Estrella, una pareja real que te atiende personalmente, conoce tu nombre y entiende tu situación.',
  },
  {
    icon: ShieldCheck,
    title: 'Confianza',
    desc: 'Llevamos años construyendo relaciones basadas en resultados reales. Nuestros clientes nos recomiendan porque cumplimos lo que prometemos.',
  },
  {
    icon: Eye,
    title: 'Transparencia',
    desc: 'Sin letra pequeña, sin sorpresas. Te explicamos exactamente cómo funciona cada inversión, sus riesgos y sus beneficios antes de que tomes ninguna decisión.',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Primera consulta gratuita',
    desc: 'Nos reunimos (de forma presencial u online) para conocer tu situación, tus objetivos y tus posibilidades. Sin compromiso y completamente gratis.',
  },
  {
    num: '02',
    title: 'Plan personalizado',
    desc: 'Diseñamos juntos una estrategia adaptada a ti: cuánto invertir, en qué productos y con qué horizonte temporal.',
  },
  {
    num: '03',
    title: 'Empiezas a invertir',
    desc: 'Ponemos en marcha tu plan de inversión. Te acompañamos en cada paso del proceso para que en ningún momento te sientas solo.',
  },
  {
    num: '04',
    title: 'Seguimiento continuo',
    desc: 'No desaparecemos tras la firma. Hacemos seguimiento regular de tu cartera y te mantenemos informado de todo lo que afecte a tu inversión.',
  },
];

const WHY_GOLD = [
  {
    icon: ShieldCheck,
    title: 'Refugio seguro',
    desc: 'El oro ha preservado su valor durante más de 5.000 años. Es el activo refugio por excelencia en tiempos de incertidumbre económica.',
  },
  {
    icon: TrendingUp,
    title: 'Protección frente a la inflación',
    desc: 'Mientras el dinero en el banco pierde poder adquisitivo, el oro históricamente lo mantiene o lo incrementa.',
  },
  {
    icon: Gem,
    title: 'Activo tangible y real',
    desc: 'No es un número en una pantalla. Es un bien físico, escaso y con demanda global que no puede quebrar ni desaparecer.',
  },
  {
    icon: Award,
    title: 'Diversificación inteligente',
    desc: 'Añadir oro a tu cartera reduce el riesgo global de tus inversiones al no estar correlacionado con los mercados de acciones.',
  },
];

const REVIEWS = [
  {
    name: 'Sali Clemente',
    date: 'Jul 9, 2024',
    rating: 5,
    text: 'Muy contenta con el trato y la gestión de los productos que tenemos con Pedro. Recomendable 100% a todo el mundo ☺️',
  },
  {
    name: 'Manuel Trujillo',
    date: 'Jun 14, 2024',
    rating: 5,
    text: 'Recomiendo a Pedro 100x100, llevo años con él, sólo buenas experiencias',
  },
  {
    name: 'Sonia',
    date: 'Jun 14, 2024',
    rating: 5,
    text: 'Conocí a Pedro y a Estrella hace unos años y desde hace 2 estoy realizando inversiones con ellos en Destino Riqueza. Hasta ahora las inversiones han salido redondas y he obtenido muchos más beneficios que teniendo los ahorros en el banco. Siempre me han explicado los productos con mucha profesionalidad, coherencia y paciencia.',
  },
  {
    name: 'Ana',
    date: 'Jun 3, 2024',
    rating: 5,
    text: 'Muy buen asesoramiento serios y eficaces he obtenido estupenda rentabilidad en mis inversiones de compra de metales',
  },
  {
    name: 'Nacho S.p',
    date: 'Jun 1, 2024',
    rating: 5,
    text: 'Pedro y Estrella te asesoran muy bien y siempre buscan la mejor opción para el cliente, buscando siempre rentabilidad y seguridad. Lo recomiendo sin dudarlo',
  },
  {
    name: 'Jesús Navarro Sánchez',
    date: 'Jun 1, 2024',
    rating: 5,
    text: 'Pedro nos ha ayudado muchísimo, llevamos años con el, trabajando y planificacando nuestro ahorro y tenemos la seguridad de que nuestro dinero siempre está seguro y generando el mayor rendimiento posible.',
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── NAVBAR ─────────────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="shrink-0">
            <Image
              src="/logo_destino_riqueza-color.png"
              alt="Destino Riqueza"
              width={160}
              height={76}
              style={{ width: '160px', height: '76px' }}
              className="h-9 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-navy] text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + mobile */}
          <div className="flex items-center gap-3">
            <Button href="#contacto" primary>
              Consulta gratuita
            </Button>
            <div className="relative">
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        id="inicio"
        className="min-h-screen flex items-center relative overflow-hidden pt-16 bg-cream]"
      >
        {/* Decorative background blobs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />
        <div className="absolute top-16 left-1/4 w-48 h-48 rounded-full bg-gold]/8 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left: text */}
          <div className="flex flex-col gap-6">
            <div className="section-tag">Destino Riqueza</div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-navy leading-tight">
              Generar riqueza es fácil…{' '}
              <em className="not-italic text-gold">cuando te acompañamos</em>
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              Pedro y Estrella te guían paso a paso en el mundo de la inversión
              en oro y metales preciosos. Sin complicaciones, sin tecnicismos,
              con total transparencia.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Button href="#contacto" primary>
                Empieza ahora
                <ArrowRight size={16} />
              </Button>
              <Button href="#quienes-somos">
                Conócenos
                <ChevronRight size={16} />
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-4 pt-6 border-t border-gray-200">
              <div className="flex flex-col">
                <span className="text-navy font-bold text-xl">4.9</span>
                <div className="flex gap-0.5 mt-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={12}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-gray-400 text-xs mt-0.5">Trustpilot</span>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-navy font-bold text-xl">+200</span>
                <span className="text-gray-400 text-xs">
                  familias asesoradas
                </span>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-navy font-bold text-xl">100%</span>
                <span className="text-gray-400 text-xs">transparentes</span>
              </div>
            </div>
          </div>

          {/* Right: visual */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="float-animate">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-gold/25 flex items-center justify-center relative">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border border-gold/20 flex items-center justify-center">
                    <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-linear-to-br from-gold/15 to-gold-pale border border-gold/30 flex items-center justify-center shadow-xl shadow-gold/15">
                      <Gem size={72} className="text-gold" strokeWidth={1} />
                    </div>
                  </div>
                  {/* Orbit dots */}
                  <div className="absolute top-4 right-12 w-3 h-3 rounded-full bg-gold opacity-50" />
                  <div className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-gold-light opacity-60" />
                  <div className="absolute top-1/2 -right-4 w-4 h-4 rounded-full bg-gold/30 border border-gold/20" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave hacia blanco */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-4">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="text-center py-6 border-r border-gray-100 last:border-0 md:border-r md:last:border-0"
              >
                <div className="text-3xl md:text-4xl font-bold text-navy mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-line" />

      {/* ── QUIÉNES SOMOS ──────────────────────────────────────────────────── */}
      <section id="quienes-somos" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-4/5 rounded-3xl overflow-hidden bg-navy flex items-center justify-center shadow-2xl relative">
                <Image
                  src="/pedro-y-estrella.png"
                  alt="Foto de Pedro y Estrella"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-pale flex items-center justify-center">
                    <Heart size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-charcoal">
                      Pedro y Estrella
                    </p>
                    <p className="text-xs text-gray-400">
                      Tu equipo de confianza
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="section-tag">Quiénes somos</div>
              <h2 className="text-3xl md:text-4xl text-navy mb-4">
                No somos asesores.
                <br />
                <em className="not-italic text-gold">
                  Somos tus compañeros de viaje.
                </em>
              </h2>
              <div className="gold-divider" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Pedro y Estrella comenzaron su camino en el mundo de las
                inversiones buscando lo mismo que tú: una forma de proteger y
                hacer crecer su patrimonio sin depender de la volatilidad de los
                mercados tradicionales. Descubrieron el poder del oro y los
                metales preciosos y, con el tiempo, se convirtieron en
                referentes en este sector.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Hoy, como pareja y como equipo profesional, comparten ese
                conocimiento con cientos de familias que han encontrado en ellos
                no solo asesores, sino personas cercanas que entienden sus
                miedos, sus sueños y sus necesidades. Su filosofía es simple: si
                ellos lo harían, te lo recomiendan.
              </p>

              {/* Values */}
              <div className="flex flex-col gap-4">
                {VALUES.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="shring-0 w-18 h-10 rounded-full bg-gold-pale flex items-center justify-center">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal text-sm mb-0.5">
                        {title}
                      </h4>
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

      {/* ── POR QUÉ EL ORO ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F0F6FF] relative overflow-hidden">
        {/* Background deco */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/8 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag justify-center">
              La inversión del futuro
            </div>
            <h2 className="text-3xl md:text-4xl text-navy mb-4">
              ¿Por qué invertir en{' '}
              <em className="not-italic text-gold">oro y metales preciosos?</em>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base">
              En un mundo lleno de incertidumbre financiera, el oro sigue siendo
              el activo más estable y fiable de la historia. No es una moda;
              lleva miles de años siendo riqueza real.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_GOLD.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-blue-100 rounded-2xl p-6 hover:shadow-md hover:border-gold/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-pale flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="text-navy font-bold mb-2 text-base">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ──────────────────────────────────────────────────── */}
      <section id="como-funciona" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag justify-center">Proceso</div>
            <h2 className="text-3xl md:text-4xl text-navy mb-4">
              Empezar es más fácil{' '}
              <em className="not-italic text-gold">de lo que crees</em>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              En cuatro pasos sencillos, pasas de no saber nada sobre
              inversiones en oro a tener una cartera funcionando a tu medida.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <div key={i} className="relative">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-linear-to-r from-gold/30 to-transparent z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gold-pale flex items-center justify-center mb-5">
                    <span className="text-xl font-bold text-gold">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-bold text-charcoal text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA banner */}
          <div className="mt-16 bg-[#F0F6FF] border border-blue-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-navy text-2xl md:text-3xl font-bold mb-2">
                ¿Listo para dar el primer paso?
              </h3>
              <p className="text-gray-500 text-base">
                La primera consulta es completamente gratuita y sin compromiso.
              </p>
            </div>
            <a
              href="#contacto"
              className="shring-0 inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-light text-white font-semibold rounded-xl transition-all text-sm shadow-lg shadow-gold/20"
            >
              Habla con nosotros
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── VENTAJAS ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag">Ventajas</div>
              <h2 className="text-3xl md:text-4xl text-navy mb-4">
                Lo que nos hace{' '}
                <em className="not-italic text-gold">diferentes</em>
              </h2>
              <div className="gold-divider" />
              <p className="text-gray-600 leading-relaxed mb-8">
                Hay muchas formas de asesorarte financieramente. Pero pocas te
                ofrecen la combinación de cercanía, conocimiento especializado
                en metales preciosos y un seguimiento personalizado real.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Atención personalizada de principio a fin',
                  'Especialistas en oro, plata y metales preciosos',
                  'Sin comisiones ocultas ni letra pequeña',
                  'Consulta inicial completamente gratuita',
                  'Acompañamiento continuo post-inversión',
                  'Explicaciones claras, sin tecnicismos',
                  'Disponibles para resolver tus dudas en todo momento',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-gold shring-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/ventajas-con-nosotros.png"
                alt="Ventajas de invertir con Destino Riqueza"
                width={860}
                height={466}
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEÑAS ────────────────────────────────────────────────────────── */}
      <section id="resenas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag justify-center">Testimonios</div>
            <h2 className="text-3xl md:text-4xl text-navy mb-4">
              Lo que dicen{' '}
              <em className="not-italic text-gold">nuestros clientes</em>
            </h2>
            {/* Trustpilot badge */}
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
              <span className="text-sm font-semibold text-[#00B67A]">
                Excelente
              </span>
              <span className="text-sm text-gray-500">en Trustpilot</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                className="bg-cream border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={review.rating} />
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-gold-pale flex items-center justify-center">
                    <span className="text-gold font-bold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-charcoal">
                    {review.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.trustpilot.com/review/destinoriqueza.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gold transition-colors"
            >
              Ver todas las reseñas en Trustpilot
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag justify-center">
              Preguntas frecuentes
            </div>
            <h2 className="text-3xl md:text-4xl text-navy mb-4">
              Resolvemos todas{' '}
              <em className="not-italic text-gold">tus dudas</em>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              Si tienes alguna pregunta que no aparece aquí, no dudes en
              contactarnos directamente. Estamos para ayudarte.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CONTACTO ───────────────────────────────────────────────────────── */}
      <section
        id="contacto"
        className="py-24 bg-white relative overflow-hidden"
      >
        {/* Background deco */}
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-50/80 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: info */}
            <div>
              <div className="section-tag">Contacto</div>
              <h2 className="text-3xl md:text-4xl text-navy mb-4">
                Hablemos.{' '}
                <em className="not-italic text-gold">Sin compromiso.</em>
              </h2>
              <div className="gold-divider" />
              <p className="text-gray-500 leading-relaxed mb-10">
                La primera consulta es gratuita. Cuéntanos tu situación y te
                explicamos, sin presiones ni tecnicismos, cómo podemos ayudarte
                a construir tu camino hacia la libertad financiera.
              </p>

              <div className="flex flex-col gap-5">
                <a
                  href="https://wa.me/34XXXXXXXXX"
                  className="flex items-center gap-4 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                    <MessageCircle size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-charcoal font-semibold text-sm">
                      WhatsApp
                    </p>
                    <p className="text-gray-400 text-sm">
                      +34 XXX XXX XXX{' '}
                      <span className="text-green-500 text-xs">[rellenar]</span>
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+34XXXXXXXXX"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-pale border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Phone size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-charcoal font-semibold text-sm">
                      Teléfono
                    </p>
                    <p className="text-gray-400 text-sm">
                      +34 XXX XXX XXX{' '}
                      <span className="text-gold text-xs">[rellenar]</span>
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@destinoriqueza.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-pale border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Mail size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-charcoal font-semibold text-sm">Email</p>
                    <p className="text-gray-400 text-sm">
                      info@destinoriqueza.com{' '}
                      <span className="text-gold text-xs">[confirmar]</span>
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <MapPin size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-charcoal font-semibold text-sm">
                      Ubicación
                    </p>
                    <p className="text-gray-400 text-sm">
                      España · Atención online disponible{' '}
                      <span className="text-gold text-xs">
                        [rellenar ciudad]
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-[#F8FAFE] border border-blue-100 rounded-3xl p-8 shadow-sm">
              <h3 className="font-bold text-charcoal text-lg mb-6">
                Solicita tu consulta gratuita
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="bg-[#F0F6FF] border-t border-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-blue-100">
            {/* Brand */}
            <div>
              <Image
                src="/logo_destino_riqueza-color.png"
                alt="Destino Riqueza"
                width={160}
                height={76}
                className="h-9 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Generar riqueza es fácil… cuando te acompañamos.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-navy font-semibold text-sm mb-4">
                Navegación
              </h4>
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-navy text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-navy font-semibold text-sm mb-4">
                Contacto rápido
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/34XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-500 text-white text-sm font-medium rounded-xl transition-colors"
                >
                  <MessageCircle size={16} />
                  Escríbenos por WhatsApp
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-4 py-3 border border-blue-100 hover:border-blue-200 text-gray-500 hover:text-navy text-sm rounded-xl transition-colors bg-white"
                >
                  <Mail size={16} />
                  Formulario de contacto
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} Destino Riqueza. Todos los derechos
              reservados.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-navy text-xs transition-colors"
              >
                Política de privacidad
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-navy text-xs transition-colors"
              >
                Aviso legal
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-navy text-xs transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
