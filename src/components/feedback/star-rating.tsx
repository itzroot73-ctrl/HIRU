'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  readOnly?: boolean;
}

export default function StarRating({ rating, onRatingChange, readOnly = false }: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readOnly}
          onClick={() => onRatingChange?.(star)}
          onMouseEnter={() => !readOnly && setHoverRating(star)}
          onMouseLeave={() => !readOnly && setHoverRating(0)}
          className={cn(
            "p-1",
            !readOnly && "cursor-pointer"
          )}
          aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
        >
          <Star
            className={cn(
              'h-6 w-6 transition-colors',
              (hoverRating || rating) >= star
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-muted-foreground'
            )}
          />
        </button>
      ))}
    </div>
  );
}
