import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { IoWater } from "react-icons/io5";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../Redux/store"
import { blueGrey } from "@mui/material/colors";
// import "./Header.css"

const Header = () => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("name");
  const userId = localStorage.getItem("userId");

  const isLogin = useSelector((state) => state.auth.isLogin); // Get `isLogin` from the Redux store
  const isUserLogin = isLogin || token || userId;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //logout
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logout successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, width: "100%" }}
      >
        <Toolbar>
          <img
            src="/favicon.png"
            alt="Kasper Logo"
            style={{ width: 30, height: 30 }}
          />
          <Typography
            variant="h4"
            textTransform={"uppercase"}
            paddingLeft={1}
            paddingRight={1}
            lineHeight={2}
            fontWeight={600}
            color="whitesmoke"
            fontSize={25}
          >
            Kasper
          </Typography>
          {/* links */}

          <Box display={"flex"} marginLeft="auto">
            {/* //LIKE A container */}
            {!isUserLogin || !token ? (
              <>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/register"
                >
                  Register
                </Button>
              </>
            ) : (
              <>
                <div
                  className="btn btn-primary"
                  style={{
                    margin: "6px",
                    color: "white",
                    display: "inline-block",
                    visibility: "visible",
                    textTransform: "capitalize",
                    cursor: "default",
                    height: "40px",
                    backgroundColor: "#1976D2",
                    transition: "none",
                    pointerEvents: "none",
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "none",
                    outline: "none",
                    appearance: "none",
                    fontSize: " 19px",
                    fontWeight: "600px",
                  }}
                >
                  {username?.split(" ")[0]}
                </div>

                <Button
                  onClick={handleLogout}
                  sx={{ margin: 1, color: "white" }}
                >
                  Logout
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
