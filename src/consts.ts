export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Root = '/',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum City {
  paris = 'Paris',
  cologne = 'Cologne',
  brussels = 'Brussels',
  amsterdam = 'Amsterdam',
  hamburg = 'Hamburg',
  dusseldorf = 'Dusseldorf',
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
