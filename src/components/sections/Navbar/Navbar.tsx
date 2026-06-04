import { Button } from '@/src/components/ui';
import { NAV_LINKS } from '@/data';
import MobileMenu from './MobileMenu';

export const Navbar = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      {/* Logo */}
      <a href="/#inicio" className="shrink-0">
        <img
          src="/logo.svg"
          alt="Destino Riqueza"
          width={130}
          height={43}
          className="w-[130px] h-[43px]"
        />
      </a>

      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center gap-7">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-gray-500 hover:text-ink text-sm font-medium transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA + mobile */}
      <div className="flex items-center gap-3">
        <Button
          href="/#contacto"
          variant="primary"
          size="sm"
          className="hidden sm:inline-flex"
        >
          Consulta gratuita
        </Button>
        <MobileMenu />
      </div>
    </div>
  </header>
);
