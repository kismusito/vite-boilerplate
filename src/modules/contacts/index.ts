import { createSlice } from '@reduxjs/toolkit'
import { contactPrefix } from './prefixes'
import { Contact } from './schemas/contact'
import { contactsReducer } from './reducers/contacts'

export type SellersInitialState = {
  contacts: Contact[];
  loading: boolean;
};

const contactsSlice = createSlice({
  name: contactPrefix,
  initialState: {
    loading: false,
    contacts: []
  } as SellersInitialState,
  reducers: {},
  extraReducers: (builder) => {
    contactsReducer(builder)
  }
})

export default contactsSlice.reducer
