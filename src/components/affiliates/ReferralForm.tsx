import { Loader2 } from 'lucide-react';

/**
 * Placeholder for the referral sign-up. The program is tracked manually for
 * now (who signed up and who referred whom), so this just announces that the
 * form is on the way. Replace the body with the real form when it's ready.
 */
export const ReferralForm: React.FC = () => (
  <div className="rounded-2xl border-2 border-dashed border-blue/30 bg-blue-pale/50 px-6 py-16 text-center">
    <div className="w-12 h-12 rounded-full border-2 border-blue bg-white flex items-center justify-center mx-auto mb-4">
      <Loader2 size={20} className="text-blue" />
    </div>
    <p className="text-ink font-semibold mb-1">
      Formulario de afiliación en camino
    </p>
    <p className="text-gray-600 text-sm max-w-md mx-auto">
      Aquí podrás registrarte en el programa de afiliados en cuanto esté
      disponible.
    </p>
  </div>
);
