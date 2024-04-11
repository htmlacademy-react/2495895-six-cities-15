import type { RootState } from '../../types/store';

const selectOffers = (state: RootState) => state.offers.offers;
const selectActiveOfferId = (state: RootState) => state.offers.activeOfferId;

export { selectActiveOfferId, selectOffers };
