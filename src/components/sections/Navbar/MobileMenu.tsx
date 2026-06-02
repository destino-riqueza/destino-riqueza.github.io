'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { NAV_LINKS } from '@/data';

// Cada línea del icono; se anima entre hamburguesa y aspa.
const LINE =
  'absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-out';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // El overlay/panel se montan en el body (portal) para no quedar atrapados
  // por el `backdrop-filter` del header.
  useEffect(() => setMounted(true), []);

  // Cerrar con la tecla Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        className="relative p-2 -mr-2 text-blue transition-colors"
      >
        <span className="relative block w-6 h-6">
          <span
            className={`${LINE} ${open ? 'top-[11px] rotate-45' : 'top-[6px]'}`}
          />
          <span
            className={`${LINE} top-[11px] ${open ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`${LINE} ${open ? 'top-[11px] -rotate-45' : 'top-[16px]'}`}
          />
        </span>
      </button>

      {mounted &&
        createPortal(
          <div className="md:hidden">
            {/* Overlay: cierra al hacer clic fuera del menú */}
            <button
              type="button"
              aria-label="Cerrar menú"
              tabIndex={open ? 0 : -1}
              onClick={close}
              className={`fixed inset-0 z-40 bg-ink/20 transition-opacity duration-300 ${
                open ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            />

            {/* Panel desplegable con slide desde arriba */}
            <div
              className={`fixed top-16 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-lg px-6 py-4 transition-all duration-300 ease-out ${
                open
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-4 opacity-0 pointer-events-none'
              }`}
            >
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className="py-3 text-gray-500 hover:text-ink transition-colors border-b border-gray-50 text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/#contacto"
                  onClick={close}
                  className="mt-4 py-3 px-6 border-2 border-blue text-blue hover:bg-blue/10 font-semibold rounded-lg text-center text-sm transition-colors"
                >
                  Consulta gratuita
                </a>
              </nav>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
