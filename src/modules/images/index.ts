import { createSlice } from '@reduxjs/toolkit'
import { sellerPrefix } from './prefixes'
import { imagesReducer } from './reducers/images'
import { Image } from './schemas/image'
import { resetImages } from './actions'

export type ImagesInitialState = {
  images: Image[];
  loading: boolean;
};

const imageSlice = createSlice({
  name: sellerPrefix,
  initialState: {
    images: [],
    loading: false
  } as ImagesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    imagesReducer(builder)
    builder.addCase(resetImages, (state) => {
      state.images = []
      state.loading = false
    })
  }
})

export default imageSlice.reducer
