import { Award, Gem, ShieldCheck, TrendingUp } from 'lucide-react';
import type { Feature } from './values';

export const WHY_GOLD: Feature[] = [
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
