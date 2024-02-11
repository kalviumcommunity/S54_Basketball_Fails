import React from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Button
} from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import axios from "axios"

export default function NewPost() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  // console.log(watch())
  const FormSubmitHandler = (data)=>{
    console.log(data)
    axios.post("https://basketball-fails.onrender.com/post",data).then(()=>{
      console.log("ADDED")
      navigate("/listings")
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className="form-parent">
      <form className="form" onSubmit={handleSubmit(FormSubmitHandler)}>
        <Text as="b" fontSize="2.3vmax">New Post</Text>
        <Text as="i" fontSize="1vmax">Enter the following details!</Text>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">Username</FormLabel>
          <Input
            type="text"
            borderColor="white"
            {...register("username", {
              required: "Username is required"
            })}
          />
          <p className="err">{errors.username?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">Title</FormLabel>
          <Input
            type="text"
            borderColor="white"
            {...register("title", {
              required: "Title is required",
              maxLength:{ value: 40, message: "Max 40 Chars" }
            })}
          />
          <p className="err">{errors.title?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">Tagline</FormLabel>
          <Input
            type="text"
            borderColor="white"
            {...register("tagline", {
              required: "Tagline is required",
            })}
          />
          <p className="err">{errors.tagline?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">Image Link</FormLabel>
          <Input
            type="text"
            borderColor="white"
            {...register("image", {
              required: "Provide a valid image url",
            })}
          />
          <p className="err">{errors.image?.message}</p>
        </FormControl>
        <Button type="submit" colorScheme="orange"  bg={"#852328"}>Submit</Button>
      </form>
    </div>
  );
}
