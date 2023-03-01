import { detectFaces } from './detectFaces'

export const filterFilesWithFaces = async (files) => {
  let areImagesRejected = false
  const filesWithFaces = []
  for (const file of files) {
    const numFaces = await detectFaces(file)
    if (numFaces === 1) filesWithFaces.push(file)
    else areImagesRejected = true
  }
  return { filesWithFaces, areImagesRejected }
}
