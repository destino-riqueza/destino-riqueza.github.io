export type NavLink = { href: string; label: string };

export const NAV_LINKS: NavLink[] = [
  { href: '/#inicio', label: 'Inicio' },
  { href: '/#quienes-somos', label: 'Quiénes somos' },
  { href: '/#como-funciona', label: 'Cómo funciona' },
  { href: '/#resenas', label: 'Reseñas' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contacto', label: 'Contacto' },
];

export const LEGAL_LINKS: NavLink[] = [
  { href: '/politica-de-privacidad', label: 'Política de privacidad' },
  { href: '/aviso-legal', label: 'Aviso legal' },
  { href: '/cookies', label: 'Cookies' },
];
