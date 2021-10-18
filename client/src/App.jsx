import * as React from 'react'
import DropArea from './components/DropArea/DropArea'
import ImageArea from './components/ImageArea/ImageArea'
import Loader from './components/Loader/Loader'
import CheckIcon from './assets/check.svg'
import './App.css'

export default function App() {
  const [isUploading, setIsUploading] = React.useState(false)
  const [imageData, setImageData] = React.useState(null)

  const handleSubmit = e => {
    console.log(e)
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
            />
          )}

          {!imageData && (
            <>
              <p className="info">or</p>
              <label className="custom-file-upload">
                <input type="file" onSubmit={handleSubmit} />
                Choose a file
              </label>
            </>
          )}
        </div>
      )}
    </div>
  )
}
