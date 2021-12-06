import image1 from '../Images/image01.jpg';
import image2 from '../Images/image02.jpg';

const Image = () => {
  const handleClick = (event) => {
    // let i = 0;
    // if (event.target.src.not.includes('image7')) {
    //   return event.target.src = images[i]
    // }
    // return i = 0;
    if (event.type === "mousedown") {
      return event.target.src = image2
    } 
    return event.target.src = image1
  }

  return (
    <img
    className="avatar"
    src={ image1 }
    alt={ `Lucas profile` }
    width="150"
    // onClick={ (event) => handleClick(event) }
    onMouseDown={ (event) => handleClick(event) }
    onMouseUp={ (event) => handleClick(event) }
    draggable="false"
  />
  )
}

export default Image;