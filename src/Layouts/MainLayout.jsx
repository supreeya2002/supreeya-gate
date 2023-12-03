import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const MainLayout = ({children}) => {
  return (
   <>
<Navbar/>
<div className="container mt-4"></div>
{children}
<Footer/>
   
   
   
   
   </>
  )
}

export default MainLayout