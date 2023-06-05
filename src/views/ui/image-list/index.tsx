import { getImageItems } from '@modules/images/selectors'
import { useAppDispatch, useAppSelector } from '@modules/store'
import { Masonry } from '@mui/lab'
import { Image as ImageType } from '@modules/images/schemas/image'
import { Box, Typography } from '@mui/material'
import Image from '@views/ui/image'
import { sellImage } from '@modules/sellers/actions'
import emptyLottieImage from 'assets/lotties/106964-shake-a-empty-box.json'
import Lottie from 'react-lottie'

export function ImageList () {
  const dispatch = useAppDispatch()
  const images = useAppSelector(getImageItems)

  const handleSellImage = (image: ImageType) => {
    dispatch(sellImage(image))
  }

  if (images.length === 0) {
    return (
      <>
        <Lottie
          options={{
            animationData: emptyLottieImage,
            autoplay: true,
            loop: true,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
          height={400}
          width={300}
        />
        <Typography align="center" fontSize={24}>
          No images
        </Typography>
      </>
    )
  }

  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2} sx={{ margin: 0 }}>
        {images.map((image, index) => (
          <div key={`${image.id}-${index}`} onClick={() => handleSellImage(image)}>
            <Image url={image.urls.full} />
          </div>
        ))}
      </Masonry>
    </Box>
  )
}
