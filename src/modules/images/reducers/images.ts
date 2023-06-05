import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { getImages } from '../actions'
import { ImagesInitialState } from '..'

export function imagesReducer (
  builder: ActionReducerMapBuilder<ImagesInitialState>
): ActionReducerMapBuilder<ImagesInitialState> {
  builder.addCase(getImages.pending, (state) => {
    state.loading = false
  })
  builder.addCase(getImages.fulfilled, (state, action) => {
    state.images = action.payload
  })
  builder.addCase(getImages.rejected, (state) => {
    state.loading = false
  })

  return builder
}
