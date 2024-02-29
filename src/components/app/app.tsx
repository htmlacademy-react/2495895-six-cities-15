import { Main } from '../../pages';

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
    <Main placesArr={placesArr} />
  );
}

export default App;
