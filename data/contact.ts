export const CONTACT: {
  whatsapps: {
    /** Person's name, e.g. "Pedro". */
    name: string;
    /** Phone in display format, e.g. "+34 600 123 456". */
    phone: string;
    /** wa.me number, digits only with country code, e.g. "34600123456". */
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
