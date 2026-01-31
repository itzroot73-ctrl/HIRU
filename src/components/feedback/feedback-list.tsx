'use client';

import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import type { Feedback } from '@/lib/types';
import StarRating from './star-rating';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

interface FeedbackListProps {
  userProfileId: string;
}

export default function FeedbackList({ userProfileId }: FeedbackListProps) {
  const firestore = useFirestore();

  const feedbackQuery = useMemoFirebase(() => {
    if (!firestore || !userProfileId) return null;
    return query(
        collection(firestore, `users/${userProfileId}/feedbacks`),
        orderBy('dateCreated', 'desc')
    );
  }, [firestore, userProfileId]);

  const { data: feedbacks, isLoading, error } = useCollection<Feedback>(feedbackQuery);

  if (isLoading) {
    return (
        <div className="space-y-4">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
        </div>
    );
  }

  if (error) {
    return <p className="text-destructive">Error loading feedback: {error.message}</p>;
  }

  if (!feedbacks || feedbacks.length === 0) {
    return <p className="text-muted-foreground">You haven't submitted any feedback yet.</p>;
  }

  return (
    <div className="space-y-4">
      {feedbacks.map((feedback) => (
        <Card key={feedback.id} className="border-border/50">
            <CardHeader>
                <StarRating rating={feedback.rating} readOnly />
            </CardHeader>
          <CardContent>
            <p className="text-foreground/90">{feedback.comment}</p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              {new Date(feedback.dateCreated).toLocaleDateString()}
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
