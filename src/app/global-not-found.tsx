import Link from 'next/link';

import Layout from './(website)/layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="text-4xl font-bold">404: Página no encontrada</div>
      <div className="mt-8">
        Puedes volver a la página de inicio desde{' '}
        <Link href="/" className="link">
          aquí
        </Link>
        .
      </div>
      <div className="mt-8">
        <Link href="/">Inicio</Link>
      </div>
    </Layout>
  );
}
