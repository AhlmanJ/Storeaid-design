
const TileContent = (props) => {
 
  return (
    <div className="tile">
        <h4 className="heading">{props.heading}</h4>
        <p className="text">{props.text}</p>

    </div>
  )
}

export default TileContent