import { Card } from '../../molecules';

import type { OfferInstance } from '../../app/app';

type OffersListProps = {
  offers: OfferInstance[];
  setActiveOffer: (offer: OfferInstance | null) => void;
}

export const OffersList = ({ offers, setActiveOffer }: OffersListProps) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((card) => (
      <Card
        key={card.id}
        onMouseOver={() => setActiveOffer(card)}
        onMouseLeave={() => setActiveOffer(null)}
        {...card}
      />
    ))}
  </div>
);
