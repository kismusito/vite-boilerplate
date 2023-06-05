import { ApiNames, BaseQueryProps, ConfigQuery } from 'types'
import axios from 'axios'
import { encodeStringToBase64 } from '@helpers/create-base-64-string'

const configQuery: { [key in ApiNames]: ConfigQuery } = {
  alegra: {
    base: 'https://api.alegra.com/api/v1',
    headers: {
      authorization: `Basic ${encodeStringToBase64(
        `${import.meta.env.VITE_ALEGRA_USERNAME}:${import.meta.env.VITE_ALEGRA_TOKEN}`
      )}`
    }
  },
  unsplash: {
    base: 'https://api.unsplash.com/search',
    headers: {
      SameSite: 'None'
    },
    params: {
      client_id: import.meta.env.VITE_UNSPLASH_CLIENT_ID
    }
  }
}

export async function baseQuery<T> ({
  httpMethod,
  url,
  params,
  api,
  body
}: BaseQueryProps): Promise<T> {
  try {
    const base = configQuery[api].base
    const request = await axios({
      method: httpMethod,
      url: `${base}/${url}`,
      params: { ...params, ...configQuery[api].params },
      headers: configQuery[api].headers,
      data: body
    })
    return request.data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }

    throw new Error('Internal server error')
  }
}
