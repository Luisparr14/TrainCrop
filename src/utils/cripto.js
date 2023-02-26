import CryptoJS from 'crypto-js'

export const SHA1 = (text) => {
  return CryptoJS.SHA1(text).toString()
}
