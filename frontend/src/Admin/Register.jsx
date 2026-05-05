import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';
import BASE_URL from "../Pages/Config/Config.js"

const Register = () => {
  const navigate = useNavigate();
  //state
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  });
  //handle input change

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //handle form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${BASE_URL}/api/v1/user/register`,
        { username: inputs.name, email: inputs.email.toLocaleLowerCase(), password: inputs.password }
      );

      if (data.success) {
        toast.success("Registration Successful! Please Login.");
        navigate("/login");
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Registration failed. Please try again.");
    };
    console.log(inputs);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          maxWidth={550}
          margin={"auto"}
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow="10px 10px 20px #ccc"

        >
          <Typography variant='h4' sx={{ textTransform: "uppercase" }} padding={2} textAlign={"center"}>Register</Typography>
          <TextField
            placeholder='name'
            value={inputs.name}
            onChange={handleChange}
            name='name'
            margin='normal'

            type={'text'}
            required
            sx={{ height: 40, '& input': { padding: '10px 14px' } }} />
          <TextField
            placeholder='email'
            value={inputs.email}
            onChange={handleChange}
            name='email'
            margin='normal'
            type={'email'}
            required sx={{ height: 40, '& input': { padding: '10px 14px' } }} />
          <TextField
            placeholder='password'
            value={inputs.password}
            onChange={handleChange}
            name='password'
            margin='normal'
            type={'password'}
            required
            sx={{ height: 40, '& input': { padding: '10px 14px' } }} />
          <Button type='submit' sx={{ borderRadius: 3, marginTop: 3 }} variant='contained' color='primary'>Submit</Button>
          <Button onClick={() => navigate("/login")} sx={{ borderRadius: 3, marginTop: 1 }}     > ALREADY REGISTERED ? PLEASE LOGIN.</Button>
        </Box>
      </form>
    </>
  )
}

export default Register