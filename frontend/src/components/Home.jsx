import React from "react";
import basketball from "../assets/home-basketball.jpg"
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
    <div className="home-parent">
    <div className="home-container">
      <div className="home-image">
        <div className="home--image"><img src={basketball} alt="" /></div>
      </div>
      <div className="home-text">Worst <div>Plays In Nba</div>  <div>History</div> </div>

    </div>
    <Link to={"/listings"}><div className="button"><Button colorScheme="red" bg={"#852328"}>Explore</Button></div></Link>      
    </div>
   </div>
  );
};

export default Home;