import MountainSVG from '../../assets/mountain.svg'
import classes from './DropArea.module.css'

const DropArea = ({handleImageDrop}) => (
  <div
    className={classes.dropArea}
    onDragEnter={e => e.preventDefault()}
    onDragOver={e => e.preventDefault()}
    onDragLeave={e => e.preventDefault()}
    onDrop={handleImageDrop}
  >
    <div className={classes.mountain}>
      <MountainSVG />
      <p className={classes.caption}>Drag & Drop your image here</p>
    </div>
  </div>
)

export default DropArea
