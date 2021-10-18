import React from 'react'
import classes from './ImageArea.module.css'

export default function ImageArea({imageData}) {
  console.log(imageData)
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img src={imageData} alt="uploaded-image" />
      </div>
      <div className={classes.copyLink}>
        <p>{imageData}</p>
        <button>Copy Link</button>
      </div>
    </div>
  )
}
