import { getAcceptedFileTypes, MAX_NUMBER_OF_FILES } from '../constants'

export const getDropZoneErrors = ({ code, message }) => {
  switch (code) {
    case 'file-invalid-type':
      return `One or more files are not supported the supported file types are: ${getAcceptedFileTypes().join(', ')}}`
    case 'file-too-large':
      return 'File size too large'
    case 'too-many-files':
      return `Too many files must be ${MAX_NUMBER_OF_FILES} or less`
    default:
      return message
  }
}
