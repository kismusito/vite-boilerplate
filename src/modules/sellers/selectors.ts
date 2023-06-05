import { RootState } from '@modules/store'
import { createSelector } from '@reduxjs/toolkit'

const sellersState = (state: RootState) => state.sellers

export const isSellersLoading = createSelector(sellersState, (state) => state.loading)

export const getSellerItems = createSelector(sellersState, (state) => state.sellers)
