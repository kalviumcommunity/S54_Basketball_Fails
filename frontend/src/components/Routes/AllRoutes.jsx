import {BrowserRouter, Route, Routes} from "react-router-dom"
import React from 'react'
import Home from "../Home"
import Listings from "../Listing"
import NewPost from "../NewPost"


const AllRoutes = () => {
  return (

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listings" element={<Listings/>}/>
        <Route path="/listings/new" element={<NewPost/>}/>

        <Route/>
      </Routes>

  )
}

export default AllRoutes