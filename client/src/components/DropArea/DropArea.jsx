import React from 'react'

import classes from './DropArea.module.css'

// import {ReactComponent as MountainSVG} from '../../assets/mountain.svg?component'
import MountainSVG from '../../assets/mountain.svg'

export default function DropArea() {
  const handleDragEnter = e => {
    e.preventDefault()
  }
  const handleDragOver = e => {
    e.preventDefault()
  }
  const handleDragLeave = e => {
    e.preventDefault()
  }

  const handleFiles = files => {}

  const handleImageDrop = e => {
    e.preventDefault()

    const files = e.dataTransfer.files
    const types = e.dataTransfer.types

    if (files.length) {
      handleFiles(files)
    }

    console.log(files[0])
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
