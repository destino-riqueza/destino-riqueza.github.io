export type Review = {
  name: string;
  /** Review date in 'yyyy/MM/dd' format. */
  date: string;
  rating: number;
  text: string;
};

export const REVIEWS: Review[] = [
  {
    name: 'Gracia Martín',
    date: '2026/04/23',
    rating: 5,
    text: 'Hola, conozco a Pedro y sigo su asesoramiento desde 2019. Siempre ha estado ahí para aclarar, aconsejar y advertir. Los resultados de las inversiones en oro y otros metales han sido más que buenos y le estoy muy agradecida. Gracias a Destinoriqueza he aumentado mi patrimonio en estos años de una forma que para mí hubiera sido impensable.',
  },
  {
    name: 'Soledad García Vaquero',
    date: '2026/04/23',
    rating: 5,
    text: 'Hola.Llevo co Pedro Hernández Cardila desde 2020.En inversión de metales y siempre con muy buenas rentabilidades,6% 7%, 8% ,....y 35% últimamente. Y reinvirtiendo cada año, he conseguido un gran ahorro que ningún banco me da. Formal y de confianza siempre respondiendo mis dudas .Os lo aconsejo!!!',
  },
  {
    name: 'Maria Urbano Linares',
    date: '2026/04/23',
    rating: 5,
    text: 'Fue y sigue siendo un acierto conocer a estas personas. Mi rentabilidad ha sido algo increíble y el trato recibido inmejorable. Honestos, claros, profesionales y muy cercanos. Solo puedo decir gracias, gracias, gracias y recomendarlos a todo el mundo.',
  },
  {
    name: 'Edu Alvarez',
    date: '2026/04/22',
    rating: 5,
    text: 'Llevo un poco más de un año con ellos y estoy muy contento con las distintas inversiones que he realizado a través de ellos. Además de un buen asesoramiento para entender todo este mundillo y poder realizar inversiones por mi propia cuenta. Los recomiendo para todas aquellas personas que no saben que hacer con el dinero que tienen ahorrado y que está perdiendo valor en cuentas de ahorro que no te dan ni un 1% de rentabilidad.',
  },
  {
    name: 'Miguel Cobo Sánchez',
    date: '2026/05/08',
    rating: 5,
    text: 'Estoy muy contento con Destinoriqueza con su asesoramiento y servicio. Mi asesor Pedro se adapta perfectamente a mi contexto, ofreciéndome la mejor propuesta de inversión, con recursos digitales para saber como van las inversiones y sobre todo, con transmitiendo seguridad y confianza.',
  },
  {
    name: 'Carmen Silvan',
    date: '2026/04/29',
    rating: 5,
    text: 'Pedro hace mucho tiempo que le conozco y desde 2023 me asesora en las inversiones que son rentables,tanto él cómo Estrella son unos grandes profesionales, seguiré con su asesoramiento.',
  },
];
