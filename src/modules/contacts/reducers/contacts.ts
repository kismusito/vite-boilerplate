import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { getClients } from '../actions'
import { toast } from 'react-toastify'
import { SellersInitialState } from '..'

export function contactsReducer (
  builder: ActionReducerMapBuilder<SellersInitialState>
): ActionReducerMapBuilder<SellersInitialState> {
  // Gel sellers
  builder.addCase(getClients.pending, (state) => {
    state.loading = false
  })
  builder.addCase(getClients.fulfilled, (state, action) => {
    state.contacts = action.payload
  })
  builder.addCase(getClients.rejected, (state, action) => {
    state.loading = false
    toast(action.error.message, { type: 'error' })
  })

  return builder
}
