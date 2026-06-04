import { StarRating } from '@/src/components/ui';
import type { Review } from '@/data';
import { formatDate } from '@/src/lib/dates';

export const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="bg-blue-pale border border-blue-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <StarRating rating={review.rating} />
      <span className="text-xs text-gray-600">
        {formatDate(review.date)}
      </span>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
      "{review.text}"
    </p>
    <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
      <div className="w-8 h-8 rounded-full border-2 border-blue bg-white flex items-center justify-center">
        <span className="text-blue font-bold text-sm">
          {review.name.charAt(0)}
        </span>
      </div>
      <span className="text-sm font-medium text-ink">{review.name}</span>
    </div>
  </div>
);
