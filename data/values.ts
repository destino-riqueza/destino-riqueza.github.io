import { Eye, Heart, type LucideIcon, ShieldCheck } from 'lucide-react';

export type Feature = { icon: LucideIcon; title: string; desc: string };

export const VALUES: Feature[] = [
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
