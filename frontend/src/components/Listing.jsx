import { Box, Card, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import james from "../assets/jamesharden.gif"
import axios from "axios";
import Usercard from "./Usercard";



export default function Listings() {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get("https://basketball-fails.onrender.com/post").then((res)=>{
      setData(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  console.log(data);
  return (
    <div id="listings-parent">
      <SimpleGrid columns={[1, 2, 3, 3]} spacing={5}>
        {data.map((e)=>{
          return (
            <Usercard post={e} />
          )
        })}
      </SimpleGrid>
    </div>
  );
}