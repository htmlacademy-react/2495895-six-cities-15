import { Link } from 'react-router-dom';
import { Header, Footer } from '../../components/organisms';
import { Page } from '../../components/templates/page';
import { AppRoute } from '../../consts';

import type { OfferInstance } from '../../components/app/app';

type FavoritesProps = {
  favorites?: OfferInstance[];
}

function getInstancesSortedByCities(instances: OfferInstance[]): { [propertyName: string]: OfferInstance[] } {
  const sortedInstances: {
    [propertyName: string]: OfferInstance[];
  } = {};
  instances.map((instance) => {
    if (!sortedInstances[instance.city.name]?.length) {
      sortedInstances[instance.city.name] = [];
    }
    sortedInstances[instance.city.name].push(instance);
  });
  return sortedInstances;
}

export const Favorites = ({ favorites }: FavoritesProps) => {
  const instancesSortedByCities: {
    [propertyName: string]: OfferInstance[];
  } = favorites && favorites.length > 0 ? getInstancesSortedByCities(favorites) : {};

  return (
    <Page
      header={<Header/>}
      footer={<Footer/>}
    >
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {Object.keys(instancesSortedByCities).length > 0 && (
              <ul className="favorites__list">
                {Object.keys(instancesSortedByCities).map((cityName) => (
                  <li key={cityName} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link to={`${AppRoute.Root}?city=${cityName.toLowerCase()}`} className="locations__item-link">
                          <span>{cityName}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {instancesSortedByCities[cityName].map((instance) => (
                        <article key={instance.id} className="favorites__card place-card">
                          {instance.isPremium && (
                            <div className="place-card__mark">
                              <span>Premium</span>
                            </div>
                          )}
                          <div className="favorites__image-wrapper place-card__image-wrapper">
                            <Link to={`/offer/${instance.id}`}>
                              <img className="place-card__image" src={instance.previewImage} width="150" height="110" alt="Place image" />
                            </Link>
                          </div>
                          <div className="favorites__card-info place-card__info">
                            <div className="place-card__price-wrapper">
                              <div className="place-card__price">
                                <b className="place-card__price-value">&euro;{instance.price}</b>
                                <span className="place-card__price-text">&#47;&nbsp;night</span>
                              </div>
                              <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                                <svg className="place-card__bookmark-icon" width="18" height="19">
                                  <use xlinkHref="#icon-bookmark"/>
                                </svg>
                                <span className="visually-hidden">In bookmarks</span>
                              </button>
                            </div>
                            <div className="place-card__rating rating">
                              <div className="place-card__stars rating__stars">
                                <span style={{ width: `${instance.rating * 10}%` }}/>
                                <span className="visually-hidden">Rating</span>
                              </div>
                            </div>
                            <h2 className="place-card__name">
                              <Link to={`/offer/${instance.id}`}>{instance.title}</Link>
                            </h2>
                            <p className="place-card__type" style={{ textTransform: 'capitalize' }}>{instance.type}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </main>
    </Page>
  );
};
