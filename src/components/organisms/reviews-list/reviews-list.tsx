import { ReviewItem } from '../../molecules/review-item/review-item';

type UserT = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type ReviewT = {
  id: string;
  date: string;
  user: UserT;
  comment: string;
  rating: number;
}

type ReviewsListProps = {
  reviews: ReviewT[];
}

export const ReviewsList = ({ reviews }: ReviewsListProps) => (
  <ul className="reviews__list">
    {reviews.map((reviewItem) => (
      <ReviewItem key={reviewItem.id} {...reviewItem} />
    ))}
  </ul>
);
