import { OfferInstance } from './components/app/app';
import type { PointT } from './components/organisms/map/map';

export function constructPointFromOffer(offer: OfferInstance): PointT {
  return {
    id: offer.id,
    title: offer.title,
    lat: offer.location.latitude,
    lng: offer.location.longitude,
  };
}

export function constructPointsListfromOffers(offers: OfferInstance[]) {
  return offers.map((offer) => constructPointFromOffer(offer));
}
