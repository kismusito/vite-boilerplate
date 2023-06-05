import { RootState } from '@modules/store'
import { createSelector } from '@reduxjs/toolkit'

const invoiceState = (state: RootState) => state.invoice

export const isCreateInvoiceLoading = createSelector(invoiceState, (state) => state.loading)

export const getCreatedInvoice = createSelector(invoiceState, (state) => state.invoice)
