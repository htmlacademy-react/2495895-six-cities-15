import { Page } from '../../components/templates';
import { Header, LocationsList, Map } from '../../components/organisms';
import { Card } from '../../components/molecules';

import type { OfferInstanceT } from '../../components/app/app';

type MainPropsT = {
  placesArr: OfferInstanceT[];
}

export const Main = ({ placesArr }: MainPropsT) => (
  <Page
    header={<Header />}
    className="page--gray page--main"
  >
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <LocationsList />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              {placesArr.map((card) => (
                <Card
                  key={card.id}
                  title={card.title}
                  type={card.type}
                  price={card.price}
                  previewImage={card.previewImage}
                  isFavorite={card.isFavorite}
                  isPremium={card.isPremium}
                  rating={card.rating}
                />
              ))}
            </div>
          </section>
          <div className="cities__right-section">
            <Map />
          </div>
        </div>
      </div>
    </main>
  </Page>
);
