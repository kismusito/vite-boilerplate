import React, { useEffect, useMemo } from 'react'
import { getClients } from '@modules/contacts/actions'
import { getContactItems } from '@modules/contacts/selectors'
import { CreateInvoiceDTO } from '@modules/invoice/dto/create-invoice.dto'
import { getSellerItems } from '@modules/sellers/selectors'
import { useAppDispatch, useAppSelector } from '@modules/store'
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { createInvoice, resetInvoice } from '@modules/invoice/actions'
import { getCreatedInvoice, isCreateInvoiceLoading } from '@modules/invoice/selectors'
import { LoadingButton } from '@mui/lab'
import { resetPoints } from '@modules/sellers/actions'
import { resetImages } from '@modules/images/actions'
import createInvoiceValidator from './validator'

function CreateInvoice () {
  const dispatch = useAppDispatch()
  const sellers = useAppSelector(getSellerItems)
  const clients = useAppSelector(getContactItems)
  const isCreating = useAppSelector(isCreateInvoiceLoading)
  const invoice = useAppSelector(getCreatedInvoice)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateInvoiceDTO>({
    resolver: yupResolver(createInvoiceValidator),
    defaultValues: useMemo(
      () => ({
        seller: sellers[0].id,
        sellerName: sellers[0].name,
        price: sellers.reduce((prev, current) => prev + current.points, 0)
      }),
      [sellers]
    )
  })

  useEffect(() => {
    dispatch(getClients())
  }, [dispatch])

  const handleFormSubmit = handleSubmit((data) => {
    dispatch(createInvoice(data))
  })

  const handleResetRace = (): void => {
    dispatch(resetInvoice())
    dispatch(resetPoints())
    dispatch(resetImages())
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <FormControl fullWidth margin="normal">
        <TextField id="sellerName" disabled label="Seller" {...register('sellerName')} />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel id="select-client-label">Client</InputLabel>
        <Select
          labelId="select-client-label"
          label="Select client"
          defaultValue=""
          {...register('client')}
        >
          {clients.map((client) => (
            <MenuItem value={client.id} key={client.id}>
              {client.name}
            </MenuItem>
          ))}
        </Select>
        {errors.client?.message && <FormHelperText error>{errors.client?.message}</FormHelperText>}
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField id="price" disabled label="Price" {...register('price')} />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <LoadingButton
          variant="contained"
          size="large"
          sx={{ bgcolor: '#00B19D', color: 'white' }}
          color="inherit"
          type="submit"
          loading={isCreating}
          disabled={!!invoice}
        >
          Create invoice
        </LoadingButton>
      </FormControl>
      {!!invoice && (
        <FormControl fullWidth margin="dense">
          <Button
            variant="contained"
            size="large"
            color="info"
            type="button"
            onClick={handleResetRace}
          >
            Reset race
          </Button>
        </FormControl>
      )}
    </form>
  )
}

export default CreateInvoice
