'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'dr-cookie-consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  function decide(value: 'accepted' | 'rejected') {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-6 md:max-w-md z-50 bg-white border border-blue-100 rounded-2xl shadow-xl p-6"
    >
      <h2 className="font-bold text-ink text-base mb-2">Cookies</h2>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        Usamos solo almacenamiento técnico necesario para recordar tu
        preferencia. No utilizamos cookies de análisis ni publicidad. Más
        información en nuestra{' '}
        <a href="/cookies" className="text-blue underline">
          política de cookies
        </a>
        .
      </p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => decide('accepted')}
          className="border-2 border-blue text-blue hover:bg-blue/10 font-semibold rounded-xl px-5 py-2.5 text-sm transition-colors"
        >
          Aceptar
        </button>
        <button
          type="button"
          onClick={() => decide('rejected')}
          className="text-gray-500 hover:text-ink font-medium text-sm px-3 py-2.5 transition-colors"
        >
          Rechazar
        </button>
      </div>
    </div>
  );
}
