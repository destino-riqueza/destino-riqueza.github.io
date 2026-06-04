import { STATS } from '@/data';

export const StatsBar = () => (
  <section className="bg-white py-4">
    <div className="max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((stat) => {
          const content = (
            <>
              <div className="text-3xl md:text-4xl font-bold text-ink mb-1">
                {stat.value.includes('★') ? (
                  <>
                    {stat.value.replace('★', '')}
                    <span className="text-gold">★</span>
                  </>
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </>
          );

          const cellClass =
            'text-center py-6 border-r border-gray-100 last:border-0 md:border-r md:last:border-0';

          return stat.href ? (
            <a
              key={stat.label}
              href={stat.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cellClass} block transition-colors hover:text-blue`}
            >
              {content}
            </a>
          ) : (
            <div key={stat.label} className={cellClass}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
