import React from 'react'
import classes from './Loader.module.css'

export default function Loader() {
  return (
    <div className={classes.box}>
      <h1 className={classes.header}>Uploading...</h1>
      <div className={classes.loaderContainer}>
        <div className={classes.loader} />
      </div>
    </div>
  )
}
