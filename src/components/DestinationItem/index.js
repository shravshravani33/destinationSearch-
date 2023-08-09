import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <li className="each-destination-div">
      <img src={imgUrl} className="img-decor" alt={name} />
      <p className={name}>{name}</p>
    </li>
  )
}
export default DestinationItem
