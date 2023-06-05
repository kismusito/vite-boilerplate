import { RootState } from '@modules/store'
import { createSelector } from '@reduxjs/toolkit'

const sellersState = (state: RootState) => state.contacts

export const isContactsLoading = createSelector(sellersState, (state) => state.loading)

export const getContactItems = createSelector(sellersState, (state) => state.contacts)
