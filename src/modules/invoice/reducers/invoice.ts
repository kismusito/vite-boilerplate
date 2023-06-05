import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { createInvoice } from '../actions'
import { toast } from 'react-toastify'
import { InvoiceInitialState } from '..'

export function invoiceReducer (
  builder: ActionReducerMapBuilder<InvoiceInitialState>
): ActionReducerMapBuilder<InvoiceInitialState> {
  // Gel sellers
  builder.addCase(createInvoice.pending, (state) => {
    state.loading = true
  })
  builder.addCase(createInvoice.fulfilled, (state, action) => {
    state.invoice = action.payload
    state.loading = false
    toast('Invoice created', { type: 'success' })
  })
  builder.addCase(createInvoice.rejected, (state, action) => {
    state.loading = false
    toast(action.error.message, { type: 'error' })
  })

  return builder
}
