import { Box, Container, Grid, Typography } from '@mui/material'
import InputText from '@views/ui/input/text'
import { getImages } from '@modules/images/actions'
import SellersTable from '@views/ui/sellers-table'
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined'
import { ImageList } from '@views/ui/image-list'
import { useAppDispatch } from '@modules/store'
import { getSellers } from '@modules/sellers/actions'
import { useEffect } from 'react'
import RaceResults from '@views/ui/race-results'

function Dashboard () {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getSellers())
  }, [dispatch])

  return (
    <>
      <Grid
        bgcolor="#00B19D"
        paddingY={10}
        paddingX={2}
        sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
      >
        <Box paddingY={5} alignItems="center" display="flex" flexDirection="column">
          <CameraOutlinedIcon sx={{ color: 'white' }} fontSize="large" />
          <Typography align="center" color="white" fontSize={30}>
            Imagenes del mundo
          </Typography>
        </Box>
        <Box width={{ xs: '100%', md: '50%' }}>
          <InputText changeAction={(value) => dispatch(getImages({ query: value }))} />
        </Box>
      </Grid>

      <Container maxWidth="lg" fixed sx={{ padding: 0 }}>
        <Grid container spacing={{ sx: 0, md: 2 }}>
          <Grid item xs={12} md={8}>
            <ImageList />
          </Grid>

          <Grid item xs={12} md={4} display={{ xs: 'none', md: 'block' }}>
            <SellersTable />
          </Grid>

          <RaceResults />
        </Grid>
      </Container>
    </>
  )
}

export default Dashboard
