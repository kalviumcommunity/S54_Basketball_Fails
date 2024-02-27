import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const { id } = useParams();

  const promise = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ name: data.title }), 1500)
    );

  
  const FormSubmitHandler = (formData) => {
    axios
      .put(`https://basketball-backend.vercel.app/post/${data._id}`, formData)
      .then(() => {
        console.log("ADDED");
        toast.promise(promise, {
          loading: "Loading...",
          success: (data) => {
            return `Post has been edited`;
          },
          error: "Error",
        });
        setTimeout(() => {
          navigate(`/listings`);
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Some error occurred.");
        toast("some error occurred");
      });
  };

  useEffect(() => {
    axios
      .get(`https://basketball-backend.vercel.app/post/${id}`)
      .then((res) => {
        setData(res.data);
        setValue("username", res.data.username);
        setValue("title", res.data.title);
        setValue("tagline", res.data.tagline);
        setValue("image", res.data.image);
        setValue("video", res.data.video);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="form-parent">
      <Toaster position="top-right" richColors />
      <form
        className="form"
        onSubmit={handleSubmit(FormSubmitHandler)}
        type="submit"
      >
        <Text as="b" fontSize="2.3vmax">
          Edit Post
        </Text>
        <Text as="i" fontSize="1vmax">
          Edit the following details!
        </Text>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">
            Username
          </FormLabel>
          <Input
          isDisabled
            type="text"
            borderColor="white"
            {...register("username", {
              required: "Username is required",
            })}
          />
          <p className="err">{errors.username?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">
            Title
          </FormLabel>
          <Input
            type="text"
            borderColor="white"
            {...register("title", {
              required: "Title is required",
              maxLength: { value: 40, message: "Max 40 Chars" },
            })}
          />
          <p className="err">{errors.title?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">
            Tagline
          </FormLabel>
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
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">
            Image Link
          </FormLabel>
          <Input
            type="text"
            borderColor="white"
            {...register("image", {
              required: "Provide a valid image url",
            })}
          />
          <p className="err">{errors.image?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">
            Video Link
          </FormLabel>
          <Input
            type="text"
            borderColor="white"
            {...register("video")}
          />
        </FormControl>
        <Button colorScheme="red" bg={"#852328"} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default EditForm;
