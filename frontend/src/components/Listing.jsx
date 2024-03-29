import { Box, Button, Card, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Usercard from "./Usercard";
import { Link } from "react-router-dom";
import loading from "../assets/loadingg.gif"
import { AppContext } from "./Context";
import { getCookie } from "../../utils/Cookie";

export default function Listings() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const {login,setLogin} = useContext(AppContext)
  const username = getCookie("username")

  useEffect(() => {
    axios
      .get("https://basketball-backend.vercel.app/post")
      .then((res) => {
        setData(res.data);
        setIsLoading(false); 
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); 
      });
  }, []);

  console.log(data);


  // if (isLoading) {
  //   return <div className="loading">
  //     <img src={loading} alt="" />
  //   </div>;
  // }

  return (
    data.length == 0 ? <div className="loading">
    <img src={loading} alt="" />
  </div> :   
      <div id="listings-parent">
         <div className="hello">{login ? `Hello, ${username}` : ""}</div>
    <SimpleGrid columns={[1, 2, 3, 3]} spacing={5}>
      {data.map((e) => {
        return <Usercard post={e} />;
      })}
    </SimpleGrid>
    <Link to={"/listings/new"}>
      <div className="post-button">
        <Button colorScheme="red" color={"white"}>
          +
        </Button>
      </div>
    </Link>
  </div>

  );
}
