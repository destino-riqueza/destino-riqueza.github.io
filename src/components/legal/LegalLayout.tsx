import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';
import { Footer, Navbar } from '@/src/components/sections';

export type LegalLayoutProps = {
  title: string;
  /** Fecha de última actualización, en texto (p. ej. "junio de 2026"). */
  updated: string;
  children: ReactNode;
};

/** Estructura común de las páginas legales: navbar, cabecera, prosa y footer. */
export const LegalLayout: React.FC<LegalLayoutProps> = ({
  title,
  updated,
  children,
}) => (
  <div className="min-h-screen bg-white">
    <Navbar />
    <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
      <a
        href="/#inicio"
        className="inline-flex items-center gap-1.5 text-sm text-blue hover:underline"
      >
        <ArrowLeft size={16} />
        Volver al inicio
      </a>
      <h1 className="text-3xl md:text-4xl text-ink mt-6 mb-2">{title}</h1>
      <p className="text-sm text-gray-600 mb-6">
        Última actualización: {updated}
      </p>
      <div className="gold-divider" />
      <div className="legal">{children}</div>
    </main>
    <Footer />
  </div>
);
