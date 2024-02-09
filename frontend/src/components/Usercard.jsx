import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import james from "../assets/jamesharden.gif"
import { FaRegHeart } from "react-icons/fa6";
import { LiaCommentSolid } from "react-icons/lia";

function Usercard({post}) {
  return (
    <Box bg="#000000b3" zIndex={"1"} color={"#D0D5FA"} padding="2vmin" borderRadius="10px">
    <div className="card">
    {/* <div className="card-img" onClick={() => {
  window.open(post.video, "_blank");
}}>
  <img src={post.image} alt="image" />
</div> */}
      <a href={post.video} target="_blank" rel="noopener noreferrer">
          <div className="card-img">
            <img src={post.image} alt="image" />
          </div>
        </a>
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
        <div className="likes">
          <FaRegHeart color='red' size={"20px"}/>
          23k
        </div>
        <div className="comments">
        <LiaCommentSolid  size={"20px"} />
          2k
        </div>
      </div>
    </div>
  </Box>
  )
}

export default Usercard