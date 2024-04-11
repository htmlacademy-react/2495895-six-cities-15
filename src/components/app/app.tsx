import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppRoute, CITIES, CityName } from '../../consts';
import { PrivateRoute } from '../private-route';
import { Favorites, Login, Main, NotFound, Offer } from '../../pages';
import { offers } from '../../mocks/offers';
import { reviews } from '../../mocks/reviews';

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
  name: CityName;
  location: Location;
}

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navigate to={`/${CITIES[0].id}`} />} index path={AppRoute.Root} />
        {CITIES.map((city) => (
          <Route
            key={city.id}
            index
            path={`/${city.id}`}
            element={<Main currentCity={city.name} />}
          />
        ))}
        <Route
          path={`${AppRoute.Offer}`}
          element={<Offer offers={offers.slice(0,3)} reviews={reviews} />}
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
