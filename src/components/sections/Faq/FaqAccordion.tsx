'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { FAQS } from '@/data';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {FAQS.map((faq, i) => (
        <div
          key={faq.question}
          className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold text-ink text-base leading-snug">
              {faq.question}
            </span>
            <span className="shrink-0 w-7 h-7 rounded-full border-2 border-blue bg-white flex items-center justify-center text-blue">
              {openIndex === i ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </span>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
