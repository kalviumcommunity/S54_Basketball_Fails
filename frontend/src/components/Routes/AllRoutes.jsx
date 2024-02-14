import {BrowserRouter, Route, Routes} from "react-router-dom"
import React from 'react'
import Home from "../Home"
import Listings from "../Listing"
import NewPost from "../NewPost"
import Edit from "../Edit"
import EditForm from "../EditForm"


const AllRoutes = () => {
  return (

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listings" element={<Listings/>}/>
        <Route path="/listings/new" element={<NewPost/>}/>
        <Route path="/listings/edit/:id" element={<Edit/>}/>
        <Route path="/listings/edit/editForm/:id" element={<EditForm/>} />
      </Routes>

  )
}

export default AllRoutes