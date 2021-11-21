import {validateFile} from './validate-files'

//todo refactor envs to utils
const url = 'http://localhost:5000'
const URL = 'https://image-uploader-react-node.herokuapp.com'

export const handleFiles = async ({files, setIsUploading, setImageData}) => {
  // * user story says one file upload at a time but we can extend it to multiple uploads if required
  if (validateFile(files[0])) {
    const data = new FormData()
    data.append('image', files[0])
    setIsUploading(true)
    try {
      const res = await (
        await fetch(`${URL}/upload`, {
          method: 'POST',
          body: data,
        })
      ).json()
      setIsUploading(false)
      if (res.message === 'success') {
        setImageData(res.data)
      }
    } catch (err) {
      console.error(err)
      setIsUploading(false)
    }
  }
}
