import { City } from '../../../consts';

type CitiesNavigationProps = {
  cities: City[];
  activeCity: City;
  onChangeCityHandler: (City) => void;
}

export const CitiesNavigation = ({ cities, activeCity, onChangeCityHandler }: CitiesNavigationProps) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li key={city} className="locations__item">
            <span onClick={() => onChangeCityHandler(city)} className={`locations__item-link tabs__item ${activeCity === city ? 'tabs__item--active' : null}`}>
              <span>{city}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  </div>
);
