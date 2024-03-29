import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormControl, FormLabel, Input, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { setCookie } from "../../utils/Cookie";
import { AppContext } from "./Context";
import { loginCheck } from "../../utils/loginCheck";


export default function Signup() {
  const navigate = useNavigate();
  const {login,setLogin} = useContext(AppContext)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  // console.log(watch())
  const FormSubmitHandler = (formData) => {
    console.log(formData);
    const id = toast.loading("Signing Up...");
    setTimeout(() => {
      axios
        .post("https://basketball-backend.vercel.app/user", formData)
        .then((result) => {
          console.log("ADDED");
          toast.update(id, {
            render: "Signed Up",
            type: "success",
            isLoading: false,
          });
          setCookie("username", formData.username, 365);
          setCookie("auth-token",result.data,365)
          setLogin(loginCheck())
          setTimeout(() => {
            navigate("/listings");
          }, 1200);
        })
        .catch((err) => {
          console.log(err);
          toast.update(id, {
            render: "Username exists",
            type: "error",
            isLoading: false,
          });
        });
    }, 1000);
  };

  return (
    <div className="form-parent">
      <ToastContainer />
      <form className="form" onSubmit={handleSubmit(FormSubmitHandler)}>
        <Text as="b" fontSize="2.3vmax">
          Sign Up
        </Text>
        <Text as="i" fontSize="1vmax">
          Enter the following details!
        </Text>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">
            Username
          </FormLabel>
          <Input
            type="text"
            borderColor="#D0D5FA"
            {...register("username", {
              required: "Username is required",
            })}
          />
          <p className="err">{errors.username?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">
            Password
          </FormLabel>
          <Input
            type="password"
            borderColor="#D0D5FA"
            {...register("password", {
              required: "Password Required",
              minLength: {
                value: 8,
                message: "Minimum 8 characters required",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password Not Valid (Use Special Characters & Numbers)",
              },
            })}
          />
          <p className="err">{errors.password?.message}</p>
        </FormControl>
        <Button type="submit" colorScheme="red" bg={"#852328"}>
          Submit
        </Button>
      </form>
      <Link to="/login" style={{fontSize:"2vmin",color:"lightblue",textDecoration:"underline",textAlign:"center",paddingTop:"1vmax"}}>Already a user?Login here...</Link>
    </div>
  );
}
