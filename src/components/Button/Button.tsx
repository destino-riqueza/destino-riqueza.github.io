const styles = {
  primary:
    'bg-gold hover:bg-gold-light text-white font-semibold shadow-lg shadow-gold/25',
  normal:
    'border border-gray-200 hover:border-gold/40 text-gray-600 hover:text-navy font-medium bg-white',
};

export const Button: React.FC<{
  children: React.ReactNode;
  href: string;
  primary?: boolean;
}> = ({ children, href, primary = false }) => (
  <a
    href={href}
    className={`inline-flex items-center gap-2 px-7 py-4 ${primary ? styles.primary : styles.normal} rounded-xl transition-all text-sm`}
  >
    {children}
  </a>
);
