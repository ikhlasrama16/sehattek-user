import { Fragment } from "react"
import Navbar from "../components/Layouts/navbar"
import Footer from "../components/Layouts/footer"

const HomePage = () => {
  return(
    <Fragment>
    <Navbar />
      <div className="text-large text-bold bg-slate-300 flex justify center flex justify-center">
        Home
      </div>
    <Footer />
    </Fragment>
    
  )
}

export default HomePage