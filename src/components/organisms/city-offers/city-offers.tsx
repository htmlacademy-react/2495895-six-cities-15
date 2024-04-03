import { useState } from 'react';
import { Map, OffersList } from '../../organisms';

import type { City, OfferInstance } from '../../app/app';

type CityOffersProps = {
  activeCity: City;
  offers: OfferInstance[];
}

export const CityOffers = ({ activeCity, offers }: CityOffersProps) => {
  const [activeOffer, setActiveOffer] = useState<OfferInstance | null>(null);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places" style={{flexShrink: 0}}>
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
                Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"/>
              </svg>
            </span>
            <ul className="places__options places__options--custom">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <OffersList offers={offers} setActiveOffer={setActiveOffer} />
        </section>
        <div className="cities__right-section">
          <Map
            city={activeCity}
            points={offers.map((offer) => ({
              id: offer.id,
              title: offer.title,
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            }))}
            selectedPointId={activeOffer?.id}
          />
        </div>
      </div>
    </div>
  );
};
