import cn from 'classnames';

import type { CityT } from '../../app/app';

type CitiesNavigationProps = {
  cities: CityT[];
  activeCity: CityT;
  onChangeCityHandler: (city: CityT) => void;
}

export const CitiesNavigation = ({ cities, activeCity, onChangeCityHandler }: CitiesNavigationProps) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li key={city.name} className="locations__item">
            <span
              onClick={() => onChangeCityHandler(city)}
              className={cn('locations__item-link tabs__item',
                {'tabs__item--active': activeCity.name === city.name})}
            >
              <span>{city.name}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  </div>
);
