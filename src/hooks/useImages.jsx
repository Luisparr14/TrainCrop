import axios from 'axios'
import { SHA1 } from 'crypto-js'
import { useEffect, useState } from 'react'
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET } from '../constants'

export const useUploadImages = () => {
  const [imageIds, setImageIds] = useState([])
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const localImageIds = JSON.parse(localStorage.getItem('imageIds'))
    if (localImageIds) {
      setImageIds(localImageIds)
    }
  }, [])

  const uploadImage = async ({ files }) => {
    const form = new FormData()
    const imageCount = files.length
    let globalProgress = 0
    const imageProgress = {}

    const getProgress = () => {
      const progressValues = Object.values(imageProgress)
      const progressSum = progressValues.reduce((sum, progress) => sum + progress, 0)
      globalProgress = progressSum / imageCount
      return globalProgress * 100
    }

    const imageIds = await Promise.all(files.map(async (file) => {
      const timeStamp = Date.now()
      const signature = SHA1(`timestamp=${timeStamp}&upload_preset=${CLOUDINARY_UPLOAD_PRESET}${CLOUDINARY_API_SECRET}`)
      form.append('file', file)
      form.append('api_key', CLOUDINARY_API_KEY)
      form.append('timestamp', timeStamp)
      form.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      form.append('signature', signature)

      const response = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, form, {
        onUploadProgress: (progressEvent) => {
          const { progress } = progressEvent
          const { name } = file
          imageProgress[name] = progress
          setPercentage(getProgress())
        }
      })

      const { data } = response
      const { public_id: publicId } = data

      return publicId
    }))

    setPercentage(0)
    setImageIds((prev) => [...prev, ...imageIds])
    const oldImageIds = JSON.parse(localStorage.getItem('imageIds'))
    if (oldImageIds) {
      localStorage.setItem('imageIds', JSON.stringify([...oldImageIds, ...imageIds]))
    } else {
      localStorage.setItem('imageIds', JSON.stringify(imageIds))
    }
  }

  const deleteImage = async (publicId) => {
    const form = new FormData()
    const timeStamp = Date.now()
    const signature = SHA1(`public_id=${publicId}&timestamp=${timeStamp}${CLOUDINARY_API_SECRET}`)
    form.append('public_id', publicId)
    form.append('timestamp', timeStamp)
    form.append('api_key', CLOUDINARY_API_KEY)
    form.append('signature', signature)

    try {
      const { data } = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/destroy`, form)
      const { result } = data
      if (result !== 'ok') {
        throw new Error(`Error deleting image ${result}`)
      }
      const newImageIds = imageIds.filter((id) => id !== publicId)
      localStorage.setItem('imageIds', JSON.stringify(newImageIds))
      setImageIds(newImageIds)
    } catch (error) {
      console.error(error)
    }
  }

  const deleteImages = async () => {
    const form = new FormData()
    imageIds.forEach(async (publicId) => {
      const timeStamp = Date.now()
      const signature = SHA1(`public_id=${publicId}&timestamp=${timeStamp}${CLOUDINARY_API_SECRET}`)
      form.append('public_id', publicId)
      form.append('timestamp', timeStamp)
      form.append('api_key', CLOUDINARY_API_KEY)
      form.append('signature', signature)

      await axios.post(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/destroy`, form)
    })
    localStorage.removeItem('imageIds')
    setImageIds([])
  }

  return { uploadImage, deleteImage, deleteImages, percentage, imageIds }
}
