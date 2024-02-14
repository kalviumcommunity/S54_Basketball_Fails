import { Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import james from "../assets/jamesharden.gif"
import { FaRegHeart } from "react-icons/fa6";
import { LiaCommentSolid } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Edit from './Edit';
import { useNavigate } from "react-router-dom";


function Usercard({post}) {
  const navigate = useNavigate();
  const [like,setLike] = useState(false)
  const cardClick = () => {
    navigate(`/listings/edit/${post._id}`);
  };
  return (
    <Box bg="#000000b3" zIndex={"1"} color={"#D0D5FA"} padding="2vmin" borderRadius="10px">
    <div className="card">

        <div className="card-img" onClick={cardClick}>
          <img src={post.image} alt="image" />
        </div>
      
      <div className="card-title">
        <Text fontWeight="extrabold" paddingTop={"1vmin"} fontSize="1.5vmax">
          {post.title}
        </Text>
      </div>
      <div className="card-tagline">
        <div className="card-tagline-text" >
        {post.tagline}
        </div>
      </div>
      <div className="card-author">
        <div className="card-author-name">
          ~{post.username}
        </div>
      </div>
      <div className="card-social">
        <div className="likes" onClick={()=>{
          setLike(!like)
        }}>
          {/* <FaRegHeart color={like ? 'red' : 'black'}  size={"20px"}/> */}
          <FaHeart color={like ? 'red' : ''}/>
          {`  ${post.likes}`}
        </div>
        <div className="comments">
        <LiaCommentSolid  size={"20px"} />
          {post.comments}
        </div>
      </div>
    </div>
  </Box>
  )
}

export default Usercard