const AuthLayouts =(props) =>{
  const {children, title, type} = props
  return(
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-semibold mb-2">{title}</h1>
        <p className="text-medium mb-2 text-slate-600">
          Welcome. Please enter your details.
        </p>
        {children}
      </div>
    </div>
  )
}
export default AuthLayouts