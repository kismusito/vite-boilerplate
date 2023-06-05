import { createSlice } from '@reduxjs/toolkit'
import { sellerPrefix } from './prefixes'
import { SellerWithPoints } from './schemas/seller'
import { sellersReducer } from './reducers/sellers'
import { resetPoints } from './actions'

export type SellersInitialState = {
  sellers: SellerWithPoints[];
  loading: boolean;
};

const sellerSlice = createSlice({
  name: sellerPrefix,
  initialState: {
    loading: false,
    sellers: []
  } as SellersInitialState,
  reducers: {},
  extraReducers: (builder) => {
    sellersReducer(builder)
    builder.addCase(resetPoints, (state) => {
      state.loading = false
      state.sellers = state.sellers.map((seller) => ({ ...seller, points: 0 }))
    })
  }
})

export default sellerSlice.reducer
