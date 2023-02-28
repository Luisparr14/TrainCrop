export const ACCEPTED_FILE_TYPES = {
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'image/webp': ['.webp']
}

export const MAX_NUMBER_OF_FILES = 5

export const getAcceptedFileTypes = () => {
  return Object.keys(ACCEPTED_FILE_TYPES).reduce((acc, key) => {
    const extensions = ACCEPTED_FILE_TYPES[key]
    return [...acc, ...extensions]
  }, [])
}

export const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
export const CLOUDINARY_API_KEY = import.meta.env.VITE_CLOUDINARY_API_KEY
export const CLOUDINARY_API_SECRET = import.meta.env.VITE_CLOUDINARY_API_SECRET
export const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET ?? 'unsignedpreset'
