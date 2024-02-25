import { List, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loading from "../assets/loadingg.gif"

export default function Users() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
      axios
        .get("https://basketball-fails.onrender.com/user")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);
  console.log(data);
  const userClick = (username) => {
    navigate(`/posts/${username}`);
  };
  return (
    <div className="users-parent">
      {data.length == 0 ? (
        <div className="loading">  <img src={loading} alt="" /></div>
      ) : (
        <>
        <div className="All-users">
        <Text textAlign={"center"} fontSize="4vmax" color="#D0D5FA" >
            All Users
          </Text>
        </div>
          <div className="userList">
          <UnorderedList className="users">
            {data.map((e, i) => {
              return (
                <div className="usernames" >
                  <ListItem
                  
                  fontSize="1.5vmax"
                  key={i}
                  onClick={() => {
                    userClick(e.username);
                  }}
                  cursor="pointer"
                  color="white"
                >
                  {e.username}
                </ListItem>
                </div>
              );
            })}
          </UnorderedList>
          </div>
        </>
      )}
    </div>
  );
}