import React from "react";
import basketball from "../assets/home-basketball.jpeg"
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home-parent">
    <div className="home-container">
      <div className="home-image">
        <img src={basketball} alt="" />
      </div>
      <div className="home-text">Worst <br /> Plays In Nba <br /> History</div>

    </div>
    <Link to={"/listings"}><div className="button"><Button colorScheme="orange" >Explore</Button></div></Link>
      <div className="home-text">Worst <br />Plays In Nba History
      
      </div>
      
    </div>
    <button className="explore">Explore</button>
    
    </div>
  );
};

export default Home;
