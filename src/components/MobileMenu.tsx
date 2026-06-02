'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#quienes-somos', label: 'Quiénes somos' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#resenas', label: 'Reseñas' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-gray-500 hover:text-[var(--color-navy)] transition-colors"
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg py-4 px-6 z-50">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-gray-500 hover:text-[var(--color-navy)] transition-colors border-b border-gray-50 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-4 py-3 px-6 bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-white font-semibold rounded-lg text-center text-sm transition-colors"
            >
              Consulta gratuita
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
