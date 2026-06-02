import { Star } from 'lucide-react';

export type StarRatingProps = {
  rating: number;
  /** Número de estrellas a renderizar. Por defecto 5. */
  count?: number;
  /** Tamaño de cada estrella en píxeles. Por defecto 14. */
  size?: number;
};

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  count = 5,
  size = 14,
}) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }, (_, i) => i + 1).map((position) => (
      <Star
        key={position}
        size={size}
        className={
          position <= rating
            ? 'fill-gold text-gold'
            : 'fill-gray-200 text-gray-200'
        }
      />
    ))}
  </div>
);
