import { useAppSelector } from '../../../hooks/store';
import { CITIES, CityName } from '../../../consts';
import { Map, OffersList } from '../../organisms';
import { constructPointsListfromOffers } from '../../../utils';
import { offersSelectors } from '../../../store/slices/offers';

import type { OfferInstance } from '../../app/app';

type CityOffersProps = {
  currentCity: CityName;
};

export const CityOffers = ({ currentCity }: CityOffersProps) => {
  const offers = useAppSelector(offersSelectors.offers);
  const activeOfferId = useAppSelector(offersSelectors.activeOferId);

  const offersByCity: Partial<Record<CityName, OfferInstance[]>> = {};

  for (const offer of offers) {
    if (!offersByCity[offer.city.name]) {
      offersByCity[offer.city.name] = [];
    }
    offersByCity[offer.city.name].push(offer);
  }

  const currentCityOffers: OfferInstance[] = offersByCity[currentCity] || [];

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places" style={{flexShrink: 0}}>
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{currentCityOffers.length} place{currentCityOffers.length > 1 && 's'} to stay in {currentCity}</b>
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
          <OffersList offers={currentCityOffers} />
        </section>
        <div className="cities__right-section">
          <Map
            city={CITIES.find((city) => city.name === currentCity)}
            points={constructPointsListfromOffers(currentCityOffers)}
            selectedPointId={activeOfferId}
            className='cities__map'
          />
        </div>
      </div>
    </div>
  );
};
