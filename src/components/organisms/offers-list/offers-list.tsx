import { Card } from '../../molecules';

import type { OfferInstance } from '../../app/app';

type OffersListProps = {
  offers: OfferInstance[];
  setActiveOfferId: (id: string) => void;
  resetActiveOfferId: () => void;
}

export const OffersList = ({ offers, setActiveOfferId, resetActiveOfferId }: OffersListProps) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((card) => (
      <Card
        key={card.id}
        {...card}
        onMouseOver={() => setActiveOfferId(card.id)}
        onMouseLeave={resetActiveOfferId}
      />
    ))}
  </div>
);
