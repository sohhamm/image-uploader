import classes from './ImageArea.module.css'

export default function ImageArea({imageData}) {
  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(imageData)
  }
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img src={imageData} alt="uploaded-image" />
      </div>
      <div className={classes.copyLink}>
        <p className={classes.link}>{imageData}</p>
        <button onClick={handleCopyLink}>Copy Link</button>
      </div>
    </div>
  )
}
