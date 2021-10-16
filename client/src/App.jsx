import {useState} from 'react'
import './App.css'
import DropArea from './components/DropArea/DropArea'
import Loader from './components/Loader/Loader'

export default function App() {
  return (
    <>
      {/* <div className="container">
        <div className="uploader-box">
          <h1 className="title">Upload your image</h1>
          <p className="title-description">File should be Jpeg, Png,...</p>
          <DropArea />
          <p className="info">or</p>
          <input type="file" name="image" id="image" />

          <label className="custom-file-upload">
            <input type="file" />
            Choose a file
          </label>
        </div>
      </div> */}
      <Loader />
    </>
  )
}
