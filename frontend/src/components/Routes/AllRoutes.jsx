import {BrowserRouter, Route, Routes} from "react-router-dom"
import React from 'react'
import Home from "../Home"
import Listings from "../Listing"
import NewPost from "../NewPost"
import Edit from "../Edit"
import EditForm from "../EditForm"
import Signup from "../Signup"
import Login from "../Login"
import PrivateAuthRoute from "./PrivateAuthRoute"
import Users from "../Users"
import UserPosts from "../UserPosts"


const AllRoutes = () => {
  return (

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listings" element={<Listings/>}/>
        <Route path="/listings/new" element={<PrivateAuthRoute><NewPost/></PrivateAuthRoute>}/>
        <Route path="/listings/edit/:id" element={<Edit/>}/>
        <Route path="/listings/edit/editForm/:id" element={<EditForm/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/posts/:user" element={<UserPosts/>} />
      </Routes>

  )
}

export default AllRoutes