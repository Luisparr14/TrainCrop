import { fetchImage, nets, detectAllFaces } from 'face-api.js'

export const detectFaces = async (file) => {
  try {
    await nets.ssdMobilenetv1.loadFromUri('/models')

    const image = await fetchImage(URL.createObjectURL(file))
    const detections = await detectAllFaces(image)
    const numFaces = detections.length

    return numFaces
  } catch (error) {
    console.error('Ha ocurrido un error', error)
  }
}
