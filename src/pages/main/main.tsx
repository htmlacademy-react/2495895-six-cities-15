import { useState } from 'react';
import { Page } from '../../components/templates';
import { CitiesNavigation, CityOffers, Header } from '../../components/organisms';

import type { City, OfferInstance } from '../../components/app/app';

type MainProps = {
  offers: OfferInstance[];
  cities: City[];
}

export const Main = ({ offers, cities }: MainProps) => {
  const [activeCity, setActiveCity] = useState<City>(cities.find((city) => city.name === 'Amsterdam'));

  return (
    <Page
      header={<Header/>}
      className="page--gray page--main"
    >
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesNavigation
          cities={cities}
          activeCity={activeCity}
          onChangeCityHandler={setActiveCity}
        />
        <CityOffers activeCity={activeCity} offers={offers}/>
      </main>
    </Page>
  );
};
