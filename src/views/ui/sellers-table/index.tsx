import { SellerWithPoints } from '@modules/sellers/schemas/seller'
import { getSellerItems } from '@modules/sellers/selectors'
import { useAppSelector } from '@modules/store'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'

function SellersTable () {
  const sellers = useAppSelector(getSellerItems)

  if (sellers.length === 0) return <></>

  const isSellerAhead = (seller: SellerWithPoints, index: number): boolean =>
    index === 0 && seller.points > 0

  return (
    <TableContainer component={Paper} sx={{ marginTop: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Seller</TableCell>
            <TableCell>Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sellers?.map((seller, index) => (
            <TableRow
              key={seller.id}
              sx={{
                bgcolor: isSellerAhead(seller, index) ? '#00B19D' : 'none',
                color: isSellerAhead(seller, index) ? 'white' : 'none'
              }}
            >
              <TableCell sx={{ color: isSellerAhead(seller, index) ? 'white' : 'black' }}>
                {seller.name}
              </TableCell>
              <TableCell sx={{ color: isSellerAhead(seller, index) ? 'white' : 'black' }}>
                {seller.points}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default SellersTable
