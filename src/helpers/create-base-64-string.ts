import { Base64 } from 'base64-string'

export const encodeStringToBase64 = (text: string): string => {
  const enc = new Base64()
  return enc.encode(text)
}
