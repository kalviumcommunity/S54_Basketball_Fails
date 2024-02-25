import { SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import loading from "../assets/loadingg.gif"
import { ToastContainer, toast } from "react-toastify";
import Usercard from "./Usercard";

export default function UserPosts() {
  let { user } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get(`https://basketball-fails.onrender.com/post/user/${user}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response.status);
        if(err.response.status==404){
            toast.error("No posts associated with this user found... Redirecting..!",{
                autoClose: 2000000, position: "top-center"
            })
            setTimeout(() => {
                navigate("/users")
            }, 3000);
        }
      });
  }, []);
  return (
    <div id="listings-parent">
        <div className="hello"></div>
        <ToastContainer/>
      {data.length == 0 ? (
        <div className="loader"><img src={loading} alt="" /></div>
      ) : (
        <div>
          <SimpleGrid columns={[1, 2, 3, 3]} spacing={10}>
            {data.map((e, i) => {
              return <Usercard post={data[i]} key={i} />;
            })}
          </SimpleGrid>
        </div>
      )}
    </div>
  );
}