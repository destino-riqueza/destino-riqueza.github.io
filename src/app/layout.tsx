import type { ReactNode } from 'react';
import CookieBanner from '@/src/components/CookieBanner';
import { JsonLd } from '@/src/components/JsonLd';
import './styles.css';

export { metadata } from '@/src/lib/seo';

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
        <JsonLd />
      </head>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
