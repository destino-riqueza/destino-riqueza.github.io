export const CONTACT: {
  whatsapps: {
    /** Nombre de la persona, p. ej. "Pedro". */
    name: string;
    /** Teléfono en formato visible, p. ej. "+34 600 123 456". */
    phone: string;
    /** Número para wa.me, solo dígitos con prefijo de país, p. ej. "34600123456". */
    whatsapp: string;
  }[];
  email: string;
  location: string;
} = {
  whatsapps: [
    { name: 'Pedro', phone: '+34 669 42 30 39', whatsapp: '34669423039' },
    { name: 'Estrella', phone: '+34 676 35 46 64', whatsapp: '34676354664' },
  ],
  email: 'info@destinoriqueza.com',
  location: 'Delegación oficial de Almería',
};
