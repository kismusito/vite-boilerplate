import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

// Reducers
import sellers from './sellers'
import images from './images'
import contacts from './contacts'
import invoice from './invoice'

const store = configureStore({
  reducer: combineReducers({ sellers, images, contacts, invoice })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
