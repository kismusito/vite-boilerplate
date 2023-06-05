import { useState } from 'react'
import { Box, Drawer, SpeedDial, Typography } from '@mui/material'

import SportsScoreIcon from '@mui/icons-material/SportsScore'
import SellersTable from '../sellers-table'

function RaceResults () {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <Box display={{ xs: 'block', md: 'none' }} sx={{ position: 'fixed', bottom: 16, right: 16 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        FabProps={{ variant: 'extended', color: 'primary' }}
        icon={
          <Box sx={{ display: 'flex' }}>
            <SportsScoreIcon />
            <Typography>Results</Typography>
          </Box>
        }
        onClick={() => setToggle(true)}
      />
      <Drawer anchor="right" open={toggle} onClose={() => setToggle(false)}>
        <Box sx={{ minWidth: 300 }}>
          <SellersTable />
        </Box>
      </Drawer>
    </Box>
  )
}

export default RaceResults
