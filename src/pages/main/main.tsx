import { Page } from '../../components/templates';
import { CitiesNavigation, CityOffers, Header } from '../../components/organisms';

import type { CityName } from '../../consts';

type MainPageProps = {
  currentCity: CityName;
};

export const Main = ({ currentCity }: MainPageProps) => (
  <Page
    header={<Header/>}
    className="page--gray page--main"
  >
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <CitiesNavigation currentCity={currentCity}/>
      <CityOffers currentCity={currentCity} />
    </main>
  </Page>
);
