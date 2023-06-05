import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { getSellers, sellImage } from '../actions'
import { toast } from 'react-toastify'
import { SellersInitialState } from '..'

export function sellersReducer (
  builder: ActionReducerMapBuilder<SellersInitialState>
): ActionReducerMapBuilder<SellersInitialState> {
  // Gel sellers
  builder.addCase(getSellers.pending, (state) => {
    state.loading = false
  })
  builder.addCase(getSellers.fulfilled, (state, action) => {
    state.sellers = action.payload
  })
  builder.addCase(getSellers.rejected, (state) => {
    state.loading = false
  })

  // Sell image
  builder.addCase(sellImage, (state, action) => {
    const foundSeller = state.sellers.find((seller) => seller.id === action.payload.seller.id)
    if (foundSeller) {
      const checkImage = foundSeller.selectedImages.find((image) => image.id === action.payload.id)
      if (!checkImage) {
        state.sellers = state.sellers
          .map((seller) => {
            if (seller.id === action.payload.seller.id) {
              return {
                ...seller,
                points: seller.points + 3,
                selectedImages: [...seller.selectedImages, action.payload]
              }
            }
            return seller
          })
          .sort((a, b) => b.points - a.points)
        toast(`${foundSeller.name} has won 3 points - ${foundSeller.points + 3} points`)
      } else {
        toast('The image was already selected', {
          type: 'error'
        })
      }
    } else {
      toast('Seller not found', {
        type: 'error'
      })
    }
  })

  return builder
}
