import { ArrowRight } from 'lucide-react';
import { Button } from '@/src/components/ui';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 bg-blue-pale">
      <div className="w-20 h-20 rounded-full border-2 border-blue bg-white flex items-center justify-center mb-8">
        <img
          src="/lingotes-oro.svg"
          alt="Lingotes de oro"
          className="w-11 h-11"
        />
      </div>

      <div className="section-tag justify-center">Error 404</div>
      <p className="text-6xl md:text-7xl font-bold text-blue mb-2">404</p>
      <h1 className="text-3xl md:text-4xl text-ink mb-4">
        Página no encontrada
      </h1>
      <p className="text-gray-600 max-w-md mb-8 leading-relaxed">
        Lo sentimos, la página que buscas no existe o se ha movido. Vuelve al
        inicio y seguimos acompañándote en tu camino.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button href="/" variant="primary">
          Volver al inicio
          <ArrowRight size={16} />
        </Button>
        <Button href="/#contacto">Contactar</Button>
      </div>
    </main>
  );
}
