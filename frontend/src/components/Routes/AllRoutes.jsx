import {BrowserRouter, Route, Routes} from "react-router-dom"
import React from 'react'
import Home from "../Home"
import Listings from "../Listing"


const AllRoutes = () => {
  return (

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listings" element={<Listings/>}/>
        <Route/>
      </Routes>

  )
}

export default AllRoutes