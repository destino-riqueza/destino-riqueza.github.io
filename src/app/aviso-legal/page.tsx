import { LegalLayout } from '@/src/components/legal';
import { CONTACT, COMPANY, SITE } from '@/data';

export const metadata = {
  title: 'Aviso legal · Destino Riqueza',
  description:
    'Información legal y condiciones de uso del sitio web de Destino Riqueza.',
};

export default function AvisoLegalPage() {
  return (
    <LegalLayout title="Aviso legal" updated="junio de 2026">
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de
        Servicios de la Sociedad de la Información y de Comercio Electrónico
        (LSSI-CE), se ponen a disposición de los usuarios los siguientes datos
        identificativos del titular de este sitio web.
      </p>

      <h2>1. Datos identificativos</h2>
      <ul>
        <li>
          <strong>Titular:</strong> {COMPANY.legalName}
        </li>
        <li>
          <strong>NIF / CIF:</strong> {COMPANY.taxId}
        </li>
        <li>
          <strong>Domicilio:</strong> {COMPANY.address}
        </li>
        <li>
          <strong>Correo electrónico:</strong>{' '}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </li>
        <li>
          <strong>Teléfono:</strong> {CONTACT.phone}
        </li>
        <li>
          <strong>Sitio web:</strong> {SITE.domain}
        </li>
        <li>
          <strong>Actividad:</strong> asesoramiento e intermediación en
          inversión en oro y metales preciosos.
        </li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        El presente aviso legal regula el uso del sitio web destinoriqueza.com
        (en adelante, el "Sitio Web"), cuya finalidad es ofrecer información
        sobre los servicios de asesoramiento prestados por Destino Riqueza y
        facilitar el contacto con personas interesadas.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El acceso al Sitio Web es gratuito y atribuye la condición de usuario,
        que acepta, desde el momento del acceso, las condiciones aquí recogidas.
        El usuario se compromete a hacer un uso adecuado de los contenidos y a
        no emplearlos para incurrir en actividades ilícitas o contrarias a la
        buena fe y al orden público.
      </p>

      <h2>4. Información de carácter no contractual</h2>
      <p>
        Los contenidos del Sitio Web tienen carácter meramente informativo y no
        constituyen asesoramiento financiero, fiscal ni de inversión
        personalizado. Cualquier decisión de inversión deberá adoptarse tras un
        análisis individualizado de la situación de cada persona. Las
        inversiones en metales preciosos conllevan riesgos y no garantizan
        rentabilidades futuras.
      </p>

      <h2>5. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del Sitio Web (textos, imágenes, logotipos, diseño
        y código) son titularidad del titular del Sitio Web o de terceros que
        han autorizado su uso, y están protegidos por la normativa de propiedad
        intelectual e industrial. Queda prohibida su reproducción, distribución
        o transformación sin autorización expresa.
      </p>

      <h2>6. Exclusión de responsabilidad</h2>
      <p>
        El titular no se hace responsable de los daños o perjuicios derivados
        del uso del Sitio Web ni de la falta de disponibilidad temporal del
        mismo por motivos técnicos. Tampoco se responsabiliza de los contenidos
        de sitios de terceros a los que se pueda acceder mediante enlaces.
      </p>

      <h2>7. Legislación aplicable y jurisdicción</h2>
      <p>
        Las presentes condiciones se rigen por la legislación española. Para la
        resolución de cualquier controversia, las partes se someten a los
        juzgados y tribunales del domicilio del usuario, cuando proceda conforme
        a la normativa aplicable.
      </p>
    </LegalLayout>
  );
}
