'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: conectar con servicio de envío de correos (Resend, Formspree, etc.)
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-[var(--color-charcoal)]">¡Mensaje enviado!</h3>
        <p className="text-gray-500 text-sm max-w-xs">
          Pedro y Estrella te responderán en menos de 24 horas. ¡Estamos deseando conocerte!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="name">
            Nombre completo *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="phone">
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+34 600 000 000"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition bg-white"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">
          Correo electrónico *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="tuemail@ejemplo.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition bg-white"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">
          ¿En qué podemos ayudarte?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Cuéntanos tu situación o cualquier duda que tengas..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent transition bg-white resize-none"
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 py-4 px-8 bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-white font-semibold rounded-xl transition-colors text-sm shadow-lg shadow-[var(--color-gold)]/20 cursor-pointer"
      >
        <Send size={16} />
        Enviar mensaje
      </button>
      <p className="text-xs text-gray-400 text-center">
        Tus datos están protegidos. No compartimos tu información con terceros.
      </p>
    </form>
  );
}
