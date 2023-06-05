import { Skeleton } from '@mui/material'
import { useState } from 'react'
import { ImageProps } from 'types'

function Image ({ url }: ImageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <div>
      {isLoading && <Skeleton variant="rectangular" height={200} />}
      <img
        src={url}
        alt="Unsplash"
        style={{
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          width: '100%',
          display: isLoading ? 'none' : 'block',
          cursor: 'pointer'
        }}
        onLoad={handleImageLoad}
      />
    </div>
  )
}

export default Image
