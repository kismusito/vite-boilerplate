import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import prefixes from './prefixes'
import { SellerWithPoints } from './schemas/seller'
import { baseQuery } from '@modules/config'
import { Image } from '@modules/images/schemas/image'

export const sellImage = createAction<Image>(prefixes.SELL_IMAGE)

export const resetPoints = createAction(prefixes.RESET_POINTS)

export const getSellers = createAsyncThunk<SellerWithPoints[]>(
  prefixes.GET_SELLERS,
  async (_, thunkApi) => {
    try {
      const sellers = await baseQuery<SellerWithPoints[]>({
        httpMethod: 'get',
        url: 'sellers',
        api: 'alegra'
      })
      return sellers.map((seller) => ({
        ...seller,
        points: 0,
        selectedImages: []
      }))
    } catch (error) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue({ message: error.message })
      }

      return thunkApi.rejectWithValue({ message: 'Internal server error' })
    }
  }
)
