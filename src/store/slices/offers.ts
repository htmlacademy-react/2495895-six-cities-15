import { createSlice } from '@reduxjs/toolkit';
import { offers } from '../../mocks/offers';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { OfferInstance } from '../../components/app/app';

type OffersState = {
  offers: OfferInstance[];
  activeOfferId?: string;
};

const initialState: OffersState = {
  offers,
  activeOfferId: undefined,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setActiveOfferId: (state: OffersState, action: PayloadAction<OfferInstance['id'] | undefined>) => {
      state.activeOfferId = action.payload;
    },
  },
});

const offersActions = offersSlice.actions;

export { offersActions, offersSlice };
