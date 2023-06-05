import { createSlice } from '@reduxjs/toolkit'
import { invoicePrefix } from './prefixes'
import { Invoice } from './schemas/seller'
import { invoiceReducer } from './reducers/invoice'
import { resetInvoice } from './actions'

export type InvoiceInitialState = {
  invoice: Invoice | null;
  loading: boolean;
};

const invoiceSlice = createSlice({
  name: invoicePrefix,
  initialState: {
    loading: false,
    invoice: null
  } as InvoiceInitialState,
  reducers: {},
  extraReducers: (builder) => {
    invoiceReducer(builder)
    builder.addCase(resetInvoice, (state) => {
      state.invoice = null
      state.loading = false
    })
  }
})

export default invoiceSlice.reducer
