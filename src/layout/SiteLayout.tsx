
import type { FC,ReactNode } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const SiteLayout:FC<{children:ReactNode}> = ({children}) => {
  return (
    <>
    <Navbar/>
    <div>
      {children}
    </div>
    <Footer/>
    </>
  )
}

export default SiteLayout
