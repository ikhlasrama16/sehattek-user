import { Link } from "react-router-dom";

const Card = (props) =>{
  const {children} = props
  return(
    <div className="w-full max-w-sm  border-violet-600 border rounded-lg shadow-md mx-4 my-2 flex flex-col justify-between">
      {children}
    </div>
  )
}

const Header = (props) =>{
  const {image} = props
  return(
    <Link to="#">
      <img 
      className="rounded-t-lg object-cover h-60 w-96 hover:zoom-in" 
      src={image}
      />
    </Link>
  )
}

const Body = (props) =>{
  const{ title} = props
  return(
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-center">{title}</h5>
      </a>
    </div>
  )
}
Card.Header = Header
Card.Body = Body

export default Card