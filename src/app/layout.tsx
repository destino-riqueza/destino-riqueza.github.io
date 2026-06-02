import type { ReactNode } from 'react';
import CookieBanner from '@/src/components/CookieBanner';
import './styles.css';

export const metadata = {
  title: 'Destino Riqueza – Inversión en Oro y Metales Preciosos',
  description:
    'Generar riqueza es fácil… cuando te acompañamos. Pedro y Estrella te asesoran en inversiones en oro y metales preciosos con cercanía, confianza y transparencia.',
  keywords:
    'inversión oro, metales preciosos, asesoramiento financiero, Destino Riqueza, Pedro Estrella',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo_icon34x34.png" />
      </head>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
