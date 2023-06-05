import React from 'react'
import { getCreatedInvoice } from '@modules/invoice/selectors'
import { getSellerItems } from '@modules/sellers/selectors'
import { useAppSelector } from '@modules/store'
import { TransitionProps } from '@mui/material/transitions'
import CreateInvoice from '@views/forms/create-invoice'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogContent,
  Paper,
  Slide,
  Typography
} from '@mui/material'
import congratulationsLottieImage from 'assets/lotties/112766-celebrate.json'
import Lottie from 'react-lottie'

const Transition = React.forwardRef(function Transition (
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="right" ref={ref} {...props} />
})

function InvoiceProvider () {
  const sellers = useAppSelector(getSellerItems)
  const invoice = useAppSelector(getCreatedInvoice)

  if (sellers.some((seller) => seller.points >= 20)) {
    return (
      <Dialog open fullScreen TransitionComponent={Transition}>
        <DialogContent>
          <Lottie
            options={{
              animationData: congratulationsLottieImage,
              autoplay: true,
              loop: true
            }}
            height={200}
            width={300}
          />
          <Typography align="center" marginTop={2} fontSize={20}>
            Congratulations{' '}
            <Typography component="span" color="#00B19D" fontSize={25}>
              {sellers[0].name}
            </Typography>{' '}
            won the race
          </Typography>
          <Typography align="center" marginTop={2}>
            Now you can create a invoice with{' '}
            <Typography component="span" color="#00B19D" fontSize={20}>
              Alegra
            </Typography>
          </Typography>
          <CreateInvoice />
          {invoice && (
            <TableContainer component={Paper} sx={{ padding: 3, mt: 4 }}>
              <Typography color="green" fontSize={20}>
                Created invoice
              </Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Seller</TableCell>
                    <TableCell>Client</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Due date</TableCell>
                    <TableCell>Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{invoice.seller.name}</TableCell>
                    <TableCell>{invoice.client.name}</TableCell>
                    <TableCell>{invoice.date}</TableCell>
                    <TableCell>{invoice.dueDate}</TableCell>
                    <TableCell>${invoice.total}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DialogContent>
      </Dialog>
    )
  }

  return <></>
}

export default InvoiceProvider
