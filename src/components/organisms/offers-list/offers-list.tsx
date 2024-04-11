import { Card } from '../../molecules';

import type { OfferInstance } from '../../app/app';
import { useActionCreators } from '../../../hooks/store';
import { offersActions } from '../../../store/slices/offers';

type OffersListProps = {
  offers: OfferInstance[];
}

export const OffersList = ({ offers }: OffersListProps) => {
  const { setActiveOfferId } = useActionCreators(offersActions);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((card) => (
        <Card
          key={card.id}
          onMouseOver={() => setActiveOfferId(card.id)}
          onMouseLeave={() => setActiveOfferId(undefined)}
          className='cities__card'
          {...card}
        />
      ))}
    </div>
  );
};
