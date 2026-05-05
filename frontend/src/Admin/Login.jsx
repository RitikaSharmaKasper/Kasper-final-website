import React, { Children, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../Redux/store.js"
import toast from "react-hot-toast";
import BASE_URL from "../Pages/Config/Config.js"

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //state
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
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
      const { data } = await axios.post(`${BASE_URL}/api/v1/user/login`, {
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        localStorage.setItem("userId", data?.user._id);
        localStorage.setItem("token", data?.token);
        localStorage.setItem("name", data?.name);
        localStorage.setItem("email", data?.user?.email);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("username", JSON.stringify(data.username));
        localStorage.setItem("profile", data?.user?.profile);

        dispatch(authActions.login());
        toast.success("Login Successful!");
        navigate("/adminsidebar/my-blogs");
      } else {
        toast.error(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Login failed. Please try again.");
    }
    // console.log(inputs);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          maxWidth={450}
          margin={"auto"}
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow="10px 10px 20px #ccc"
        >
          <Typography
            variant="h4"
            sx={{ textTransform: "uppercase" }}
            padding={2}
            textAlign={"center"}
          >
            Login
          </Typography>

          <TextField
            placeholder="email"
            value={inputs.email}
            onChange={handleChange}
            name="email"
            margin="normal"
            type={"email"}
            required
            sx={{ height: 40, "& input": { padding: "10px 14px" } }}
          />
          <TextField
            placeholder="password"
            value={inputs.password}
            onChange={handleChange}
            name="password"
            margin="normal"
            type={"password"}
            required
            sx={{ height: 40, "& input": { padding: "10px 14px" } }}
          />
          <Button
            type="submit"
            sx={{ borderRadius: 3, marginTop: 3 }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Button
            onClick={() => navigate("/register")}
            sx={{ borderRadius: 3, marginTop: 1 }}
          >
            {" "}
            Not a user ? Please Register.
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Login;
