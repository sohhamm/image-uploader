import {validateFile} from './validate-files'

//todo change to root hosted domain
const url = 'http://localhost:5000'

export const handleFiles = async ({files, setIsUploading, setImageData}) => {
  // * user story says one file upload at a time but we can extend it to multiple uploads if required
  if (validateFile(files[0])) {
    const data = new FormData()
    data.append('image', files[0])
    setIsUploading(true)
    const res = await (
      await fetch(`${url}/upload`, {
        method: 'POST',
        body: data,
      })
    ).json()
    setIsUploading(false)
    if (res.message === 'success') {
      setImageData(res.data)
    }
  }
}
