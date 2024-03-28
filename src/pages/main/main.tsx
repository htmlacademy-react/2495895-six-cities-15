import { Page } from '../../components/templates';
import { CitiesNavigation, CityOffers, Header } from '../../components/organisms';
import { City } from '../../consts';

import type { OfferInstance } from '../../components/app/app';

type MainProps = {
  offers: OfferInstance[];
}

export const Main = ({ offers }: MainProps) => (
  <Page
    header={<Header/>}
    className="page--gray page--main"
  >
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <CitiesNavigation
        cities={Object.values(City)}
      />
      <CityOffers offers={offers}/>
    </main>
  </Page>
);
