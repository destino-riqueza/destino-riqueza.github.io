import { LegalLayout } from '@/src/components/legal';
import { CONTACT, COMPANY } from '@/data';

export const metadata = {
  title: 'Política de privacidad · Destino Riqueza',
  description:
    'Cómo Destino Riqueza trata y protege tus datos personales conforme al RGPD.',
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalLayout title="Política de privacidad" updated="junio de 2026">
      <p>
        En Destino Riqueza nos tomamos muy en serio la protección de tus datos
        personales. Esta política explica cómo los tratamos conforme al
        Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 de Protección
        de Datos Personales y garantía de los derechos digitales (LOPDGDD).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li>
          <strong>Responsable:</strong> {COMPANY.legalName}
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
      </ul>

      <h2>2. Datos que tratamos</h2>
      <p>
        Tratamos los datos que nos facilitas voluntariamente cuando contactas
        con nosotros por correo electrónico, teléfono o WhatsApp, que pueden
        incluir tu nombre, teléfono, correo electrónico y el contenido de tus
        consultas. No recogemos datos especialmente protegidos.
      </p>

      <h2>3. Finalidad del tratamiento</h2>
      <ul>
        <li>Atender tus consultas y solicitudes de información.</li>
        <li>
          Ponernos en contacto contigo para ofrecerte el asesoramiento
          solicitado.
        </li>
        <li>Gestionar la relación que, en su caso, se establezca.</li>
      </ul>

      <h2>4. Legitimación</h2>
      <p>
        La base legal del tratamiento es tu <strong>consentimiento</strong>, que
        otorgas al contactar con nosotros, y la aplicación de medidas
        precontractuales a petición tuya. Puedes retirar tu consentimiento en
        cualquier momento.
      </p>

      <h2>5. Conservación de los datos</h2>
      <p>
        Conservaremos tus datos durante el tiempo necesario para atender tu
        solicitud y, posteriormente, durante los plazos legalmente exigibles.
        Cuando dejen de ser necesarios, se suprimirán de forma segura.
      </p>

      <h2>6. Destinatarios</h2>
      <p>
        Tus datos no se cederán a terceros, salvo obligación legal o cuando sea
        imprescindible para la prestación del servicio (por ejemplo, proveedores
        tecnológicos que actúen como encargados del tratamiento con las debidas
        garantías).
      </p>

      <h2>7. Tus derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, supresión,
        oposición, limitación del tratamiento y portabilidad escribiendo a{' '}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>, indicando el
        derecho que deseas ejercer. También tienes derecho a presentar una
        reclamación ante la Agencia Española de Protección de Datos (
        <a href="https://www.aepd.es">www.aepd.es</a>) si consideras que el
        tratamiento no se ajusta a la normativa.
      </p>

      <h2>8. Medidas de seguridad</h2>
      <p>
        Aplicamos las medidas técnicas y organizativas necesarias para
        garantizar la seguridad de tus datos y evitar su alteración, pérdida,
        tratamiento o acceso no autorizado.
      </p>
    </LegalLayout>
  );
}
