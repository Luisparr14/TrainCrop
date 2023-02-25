import axios from 'axios'
import { useState } from 'react'

export const useUploadImages = () => {
  const [percentage, setPercentage] = useState(0)
  const upLoadImage = async ({ files }) => {
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

    const imageIds = Promise.all(files.map(async (file) => {
      form.append('file', file)
      form.append('upload_preset', 'unsignedpreset')
      form.append('folder', 'traincrop')

      const response = await axios.post('https://api.cloudinary.com/v1_1/luisparr14/image/upload', form, {
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
    return imageIds
  }

  return [percentage, upLoadImage]
}
