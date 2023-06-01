// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, setActiveThumbnailId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const onClickButton = () => {
    setActiveThumbnailId(id)
  }
  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'
  return (
    <li className="list-items">
      <button type="button" className="thumbnail-btn" onClick={onClickButton}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
