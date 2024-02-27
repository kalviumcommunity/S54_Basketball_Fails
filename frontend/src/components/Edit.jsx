
import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { getCookie } from "../../utils/Cookie";
function Edit() {
  const navigate = useNavigate();
  const username = getCookie("username");
  let { id } = useParams();
  console.log("id: ", id);
  const [data, setData] = useState([]);
  const editPost = () => {
    navigate(`/listings/edit/editForm/${data._id}`);
  };
  
  useEffect(() => {
    axios
    .get(`https://basketball-backend.vercel.app/post/${id}`)
    .then((res) => {
      setData(res.data);
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
      if (err.response.data == "Post not found..!") {
        toast.error("Post not found!");
      }
    });
  }, []);
  
  const adminOption = () => {
    if (username == data.username) {
      return (
        <div className="edit-buttons">
          <Button colorScheme="red" bg="#852328" onClick={editPost}>
            Edit
          </Button>
          <Button colorScheme="red" bg="#852328" onClick={deletePost}>
            Delete
          </Button>
        </div>
      );
    } else {
      return "";
    }
  };
  const promise = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ name: data.title }), 1500)
    );
  const deletePost = () => {
    let result = confirm("Are you sure?");
    console.log(result);
    if (result) {
      axios
        .delete(`https://basketball-backend.vercel.app/post/${data._id}`)
        .then((res) => {
          console.log(res);
          toast.promise(promise, {
            loading: "Loading...",
            success: (data) => {
              return `Post has been deleted`;
            },
            error: "Error",
          });
          setTimeout(() => {
            navigate(`/listings`);
          }, 2500);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  console.log("video1", data.video);
  return (
    <div className="parent-edit-video">
      <Toaster position="top-right" richColors />
      <div className="edit-video">
        {data.video == "" ? (
          <div className="edit-images">
            <img src={data.image} alt="" />
          </div>
        ) : (
          data.video && (
            <video
              controls
              autoPlay
              loop
              width="700px"
              height=""
              style={{ borderRadius: "10px" }}
            >
              <source src={data.video} type="video/mp4" />
            </video>
          )
        )}
        <div className="edit-tagline">{data.tagline}</div>
      </div>

      <div className="mob-tagline">{data.tagline}</div>
      {adminOption()}
    </div>
  );
}

export default Edit;
