import { fetchImage, detectAllFaces, TinyFaceDetectorOptions } from 'face-api.js'

export const detectFaces = async (file) => {
  try {
    const image = await fetchImage(URL.createObjectURL(file))
    const detections = await detectAllFaces(image, new TinyFaceDetectorOptions())
    const numFaces = detections.length

    return numFaces
  } catch (error) {
    console.error('Ha ocurrido un error', error)
  }
}
