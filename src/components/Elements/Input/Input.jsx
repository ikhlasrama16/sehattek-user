import { forwardRef } from "react"

const Input = forwardRef((props, ref) =>{
  const{type, placeholder, name} = props
  return(
    <input 
    type={type} 
    className="w-full border border-violet-500 rounded-md" 
    placeholder={placeholder}
    name={name}
    id={name} 
    ref={ref}
    />
  )
})

export default Input