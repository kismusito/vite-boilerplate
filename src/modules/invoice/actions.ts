import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import prefixes from './prefixes'
import { Invoice } from './schemas/seller'
import { baseQuery } from '@modules/config'
import { CreateInvoiceDTO } from './dto/create-invoice.dto'

export const resetInvoice = createAction(prefixes.RESET_INVOICE)

export const createInvoice = createAsyncThunk<Invoice, CreateInvoiceDTO>(
  prefixes.CREATE_INVOICE,
  async ({ client, price, seller }: CreateInvoiceDTO, thunkApi) => {
    try {
      const invoice = await baseQuery<Invoice>({
        httpMethod: 'post',
        url: 'invoices',
        api: 'alegra',
        body: {
          items: [{ price, quantity: 1, id: 1 }],
          seller,
          client: { id: client },
          dueDate: new Date().toISOString().split('T')[0],
          date: new Date().toISOString().split('T')[0]
        }
      })
      return invoice
    } catch (error) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue({ message: error.message })
      }

      return thunkApi.rejectWithValue({ message: 'Internal server error' })
    }
  }
)
