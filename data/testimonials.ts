export type Testimonial = {
  name: string;
  date: string;
  rating: number;
  text: string;
};

export const TESTIMONIALS: Testimonial[] = [
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
