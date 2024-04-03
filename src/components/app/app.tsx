import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Favorites, Login, Main, NotFound, Offer } from '../../pages';
import { AppRoute } from '../../consts';
import { PrivateRoute } from '../private-route';

type AppProps = {
  offers: OfferInstance[];
  cities: CityT[];
}

export type OfferInstance = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: CityT;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type CityT = {
  name: string;
  location: Location;
}

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

function App({ offers, cities }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main offers={offers} cities={cities} />}
        />
        <Route
          path={`${AppRoute.Offer}`}
          element={<Offer offers={offers.slice(0, 3)} />}
        />
        <Route
          path={AppRoute.Login}
          element={
            <PrivateRoute
              isReverse
            >
              <Login />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <Favorites favorites={offers.filter((instance) => instance.isFavorite)} />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
