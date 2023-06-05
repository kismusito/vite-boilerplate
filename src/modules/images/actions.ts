import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import prefixes from './prefixes'
import { baseQuery } from '@modules/config'
import { Image } from './schemas/image'
import { Pagination } from './schemas/pagination'
import { GetImagesDto } from './dto/get-images.dto'
import { RootState } from '@modules/store'

export const resetImages = createAction(prefixes.RESET_IMAGES)

export const getImages = createAsyncThunk<Image[], GetImagesDto, { state: RootState }>(
  prefixes.GET_IMAGES,
  async ({ query }: GetImagesDto, thunkApi) => {
    try {
      const { sellers } = thunkApi.getState().sellers
      const images = await baseQuery<Pagination>({
        httpMethod: 'get',
        url: 'photos',
        api: 'unsplash',
        params: {
          query,
          per_page: sellers.length
        }
      })
      return images.results.map((image, index) => {
        return { ...image, seller: sellers[index] }
      })
    } catch (error) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue({ message: error.message })
      }

      return thunkApi.rejectWithValue({ message: 'Internal server error' })
    }
  }
)
