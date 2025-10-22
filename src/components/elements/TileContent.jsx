
/* 
  This "React hook" has two properties or "props" as they are called. 
  Props allow me to change the contents of a component by passing elements through them when I call the component in my code. 
  
  You can see an example of this in the file "Our Services.jsx", line 20.
*/

const TileContent = (props) => {
 
  return (
    <div className="tile">
        <h4 className="heading">{props.heading}</h4>
        <p className="text">{props.text}</p>

    </div>
  )
}

export default TileContent