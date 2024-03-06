import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Favorites, Login, Main, NotFound, Offer } from '../../pages';
import { AppRoute, AuthorizationStatus } from '../../consts';
import { PrivateRoute } from '../private-route';

type AppProps = {
  placesArr: OfferInstanceT[];
}

export type OfferInstanceT = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: CityT;
  location: LocationT;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

type CityT = {
  name: string;
  location: LocationT;
}

type LocationT = {
  latitude: number;
  longitude: number;
  zoom: number;
}

function App({ placesArr }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main placesArr={placesArr} />}
        />
        <Route
          path={`${AppRoute.Offer}`}
          element={<Offer offers={placesArr.slice(0, 3)} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites favorites={placesArr.filter((instance) => instance.isFavorite)} />
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
