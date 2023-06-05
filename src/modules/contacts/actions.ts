import { createAsyncThunk } from '@reduxjs/toolkit'
import prefixes from './prefixes'
import { baseQuery } from '@modules/config'
import { Contact } from './schemas/contact'

export const getClients = createAsyncThunk<Contact[]>(prefixes.GET_CLIENTS, async (_, thunkApi) => {
  try {
    const contacts = await baseQuery<Contact[]>({
      httpMethod: 'get',
      url: 'contacts',
      api: 'alegra',
      params: {
        type: 'client',
        order_direction: 'ASC'
      }
    })
    return contacts
  } catch (error) {
    if (error instanceof Error) {
      return thunkApi.rejectWithValue({ message: error.message })
    }

    return thunkApi.rejectWithValue({ message: 'Internal server error' })
  }
})
