import { STATS } from '@/data';

export const StatsBar = () => (
  <section className="bg-white py-4">
    <div className="max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="text-center py-6 border-r border-gray-100 last:border-0 md:border-r md:last:border-0"
          >
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
          </div>
        ))}
      </div>
    </div>
  </section>
);
