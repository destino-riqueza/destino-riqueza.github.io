import { LegalLayout } from '@/src/components/legal';

export const metadata = {
  title: 'Política de cookies · Destino Riqueza',
  description:
    'Información sobre las cookies y el almacenamiento local que utiliza el sitio de Destino Riqueza.',
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Política de cookies" updated="junio de 2026">
      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos que un sitio web almacena en tu
        dispositivo al visitarlo. Sirven, entre otras cosas, para recordar tus
        preferencias o para analizar el uso del sitio. Junto a las cookies, las
        webs también pueden usar tecnologías similares como el almacenamiento
        local del navegador.
      </p>

      <h2>2. Cookies que utilizamos</h2>
      <p>
        Este sitio web es de carácter informativo y procura minimizar el uso de
        cookies. Actualmente solo utilizamos almacenamiento estrictamente
        necesario:
      </p>
      <ul>
        <li>
          <strong>Preferencia de cookies (técnica):</strong> guardamos en el
          almacenamiento local de tu navegador tu decisión sobre el aviso de
          cookies, para no volver a mostrártelo en cada visita. No identifica a
          la persona usuaria ni se comparte con terceros.
        </li>
      </ul>
      <p>
        <strong>No utilizamos</strong> cookies de análisis, de publicidad ni de
        seguimiento de terceros. Si en el futuro incorporásemos este tipo de
        cookies, actualizaríamos esta política y solicitaríamos tu
        consentimiento previo.
      </p>

      <h2>3. Cómo gestionar las cookies</h2>
      <p>
        Puedes aceptar o rechazar el almacenamiento desde el aviso que aparece
        al entrar en el sitio. Además, puedes configurar o eliminar las cookies
        y el almacenamiento local desde la configuración de tu navegador:
      </p>
      <ul>
        <li>
          <a href="https://support.google.com/chrome/answer/95647">
            Google Chrome
          </a>
        </li>
        <li>
          <a href="https://support.mozilla.org/es/kb/Borrar%20cookies">
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac">
            Safari
          </a>
        </li>
        <li>
          <a href="https://support.microsoft.com/es-es/microsoft-edge">
            Microsoft Edge
          </a>
        </li>
      </ul>

      <h2>4. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política de cookies para adaptarla a cambios
        normativos o técnicos. Te recomendamos revisarla periódicamente.
      </p>
    </LegalLayout>
  );
}
