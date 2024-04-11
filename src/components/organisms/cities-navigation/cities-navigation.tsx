import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { CITIES, CityName } from '../../../consts';

type CitiesNavigationProps = {
  currentCity: CityName;
};

export const CitiesNavigation = ({ currentCity }: CitiesNavigationProps) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <li key={city.name} className="locations__item">
            <NavLink
              to={`/${city.id}`}
              className={cn('locations__item-link tabs__item',
                { 'tabs__item--active': currentCity === city.name })}
            >
              <span>{city.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  </div>
);
