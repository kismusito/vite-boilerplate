import { RootState } from '@modules/store'
import { createSelector } from '@reduxjs/toolkit'

const imageState = (state: RootState) => state.images

export const isImagesLoading = createSelector(imageState, (state) => state.loading)

export const getImageItems = createSelector(imageState, (state) => state.images)
