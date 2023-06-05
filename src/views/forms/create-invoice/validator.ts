import { CreateInvoiceDTO } from '@modules/invoice/dto/create-invoice.dto'
import * as yup from 'yup'

const createInvoiceValidator = yup.object<CreateInvoiceDTO>({
  client: yup.string().required(),
  seller: yup.number().required(),
  price: yup.number().required()
})

export default createInvoiceValidator
