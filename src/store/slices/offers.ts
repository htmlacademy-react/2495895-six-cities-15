import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { offers } from '../../mocks/offers';

import type { OfferInstance } from '../../components/app/app';

type OffersState = {
  offers: OfferInstance[];
  activeOfferId?: string;
}

const initialState: OffersState = {
  offers,
  activeOfferId: undefined,
};

const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    setActiveOfferId: (state, action: PayloadAction<OfferInstance['id'] | undefined>) => {
      state.activeOfferId = action.payload;
    },
  },
  selectors: {
    offers: (state: OffersState) => state.offers,
    activeOferId: (state: OffersState) => state.activeOfferId,
  },
});

const offersActions = offersSlice.actions;
const offersSelectors = offersSlice.selectors;

export { offersActions, offersSelectors, offersSlice };
