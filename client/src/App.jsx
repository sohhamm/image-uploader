import * as React from 'react'
import DropArea from './components/DropArea/DropArea'
import ImageArea from './components/ImageArea/ImageArea'
import Loader from './components/Loader/Loader'
import CheckIcon from './assets/check.svg'
import {handleFiles} from './utils/handle-files'
import './App.css'

export default function App() {
  const [isUploading, setIsUploading] = React.useState(false)
  const [imageData, setImageData] = React.useState(null)

  const handleImageDrop = e => {
    e.preventDefault()
    const files = e.type === 'change' ? e.target.files : e.dataTransfer.files
    if (files.length) {
      handleFiles({files, setImageData, setIsUploading})
    }
  }

  return (
    <div className="container">
      {isUploading ? (
        <Loader />
      ) : (
        <div className="uploader-box">
          {!imageData ? (
            <h1 className="title">Upload your image</h1>
          ) : (
            <CheckIcon />
          )}
          {!imageData ? (
            <p className="title-description">File should be Jpeg, Png,...</p>
          ) : (
            <p className="success">Uploaded Successfully!</p>
          )}
          {imageData ? (
            <ImageArea imageData={imageData} />
          ) : (
            <DropArea
              setIsUploading={setIsUploading}
              setImageData={setImageData}
              handleImageDrop={handleImageDrop}
            />
          )}

          {!imageData && (
            <>
              <p className="info">or</p>
              <label className="custom-file-upload">
                <input type="file" onChange={handleImageDrop} />
                Choose a file
              </label>
            </>
          )}
        </div>
      )}
    </div>
  )
}
