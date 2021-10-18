import React from 'react'

import classes from './DropArea.module.css'

import MountainSVG from '../../assets/mountain.svg'
import {validateFile} from '../../utils/validate-files'

const url = 'http://localhost:5000'

export default function DropArea({setIsUploading, setImageData}) {
  const handleDragEnter = e => {
    e.preventDefault()
  }
  const handleDragOver = e => {
    e.preventDefault()
  }
  const handleDragLeave = e => {
    e.preventDefault()
  }

  const handleFiles = async files => {
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

  const handleImageDrop = e => {
    e.preventDefault()

    const files = e.dataTransfer.files

    if (files.length) {
      handleFiles(files)
    }
  }

  return (
    <div
      className={classes.dropArea}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleImageDrop}
    >
      <div className={classes.mountain}>
        <MountainSVG />
        <p className={classes.caption}>Drag & Drop your image here</p>
      </div>
    </div>
  )
}
