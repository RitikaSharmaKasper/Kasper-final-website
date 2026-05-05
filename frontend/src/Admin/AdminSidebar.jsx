import React, { useEffect, useState } from "react";
import Header from "../Admin/Header.jsx"

import {
  Box,
  Drawer,
  Avatar,
  Button,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import CategoryIcon from "@mui/icons-material/Category";
import CreateIcon from "@mui/icons-material/Create";
import BASE_URL from "../Pages/Config/Config.js"
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
const AdminLayouts = () => {
  const [selectedTab, setSelectedTab] = useState("blogs");
const [profile, setProfile] = useState(localStorage.getItem("profile"));
  const [currentName, setCurrentName] = useState(localStorage.getItem("name"));
  const [currentEmail, setCurrentEmail] = useState(localStorage.getItem("email"));
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("name");
  const userId = localStorage.getItem("userId");
  const email = localStorage.getItem("email") || "";

  const isLogin = useSelector((state) => state.auth.isLogin);
  const isUserLogin = isLogin || token || userId;

  // const isTablet = useMediaQuery("(max-width: 1200px)");
  // const isMobile = useMediaQuery("(max-width: 768px)");
  const isCompact = useMediaQuery("(max-width: 768px)");

  const location = useLocation();
  // const isCompactPage = (location.pathname.includes("addblog") || location.pathname.includes("blogs")) ;
  const isCompactPage = [
    "addblog",
    "blogs",
    "my-blogs",
    "addcategory",
    "profile",
    "home",
      "demo-requests",
    "contact-messages"
  ].some((page) => location.pathname.includes(page));

  const base = "/adminsidebar";

  const iconNavItems = [
    { icon: <HomeIcon />, path: "/home", key: "home" },
    { icon: <PersonIcon />, path: `${base}/profile`, key: "profile" },
    { icon: <ArticleIcon />, path: `${base}/blogs`, key: "blogs" },
    { icon: <FeaturedPlayListIcon />, path: `${base}/my-blogs`, key: "my-blogs" },
    { icon: <CategoryIcon />, path: `${base}/addcategory`, key: "addcategory" },
    { icon: <CreateIcon />, path: `${base}/addblog`, key: "addblog" },

     { icon: <AppRegistrationIcon />, path: `${base}/demo-requests`, key: "demo-requests" },
    { icon: <ContactSupportIcon />, path: `${base}/contact-messages`, key: "contact-messages" },
  ];

  // const drawerWidth = isTablet ? 130 : 260;
  const drawerWidth = isCompact ? 0 : 260;

 useEffect(() => {
    const syncSidebarData = () => {
      setProfile(localStorage.getItem("profile"));
      setCurrentName(localStorage.getItem("name"));
      setCurrentEmail(localStorage.getItem("email"));
    };

    // Initial load and path change sync
    syncSidebarData();

    // Listen for storage changes (Jab Profile.js update karega)
    window.addEventListener("storage", syncSidebarData);
    
    return () => window.removeEventListener("storage", syncSidebarData);
  }, [location.pathname]); 
  // --- SYNC LOGIC END ---
  return (
    <>
      <Header />
      <Box sx={{ display: "flex" }}>

        {/* Hide sidebar if on AddBlog page and on mobile */}
        {!(isCompact && isCompactPage) && (
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                backgroundColor: "#08325B",
                color: "white",
                padding: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                position: "fixed",
                top: "60px",
                left: 0,
                height: "calc(100vh - 65px)",
                overflowY: "auto",
                "&::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              },
            }}
          >
            {isUserLogin ? (
              <Box
                sx={{
                  textAlign: "center",
                  width: "100%",
                  mt: isCompact ? "42px" : "0px",
                  mb: 4,
                }}
              >
                <Avatar
                  src={
                    profile
                      ? `${profile}`
                      : "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg"
                  }
                  sx={{ width: 90, height: 90, mx: "auto", mb: 1 }}
                />
                <Typography variant="h6">{username}</Typography>
                <Typography
                  variant="body2"
                  color="gray"
                  sx={{
                    fontSize: isCompact ? "10px" : "14px",
                  }}
                >
                  {email}
                </Typography>
              </Box>
            ) : (
              <Typography variant="h6" color="gray" sx={{ textAlign: "center" }}>
                Please log in to access the admin panel.
              </Typography>
            )}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "100%",
              }}
            >
              <Button
                component={Link}
                to="/"
                fullWidth
                variant={selectedTab === "home" ? "contained" : "outlined"}
                onClick={() => setSelectedTab("home")}
                sx={{
                  mb: 2,
                  p: 1,
                  borderRadius: "22px",
                  backgroundColor: "#35c0ca",
                  color: "white",
                  "&:hover": { backgroundColor: "#3ca8ad" },
                }}
              >
                Home
              </Button>

              <Button
                component={Link}
                to={`${base}/profile`}
                fullWidth
                variant={selectedTab === "profile" ? "contained" : "outlined"}
                onClick={() => setSelectedTab("profile")}
                sx={{
                  backgroundColor: "#1976D2",
                  color: "white",
                  "&:hover": { backgroundColor: "#1565C0" },
                }}
              >
                Profile
              </Button>

              <Button
                component={Link}
                to={`${base}/blogs`}
                fullWidth
                variant={selectedTab === "blogs" ? "contained" : "outlined"}
                onClick={() => setSelectedTab("blogs")}
                sx={{
                  backgroundColor: "#388E3C",
                  color: "white",
                  "&:hover": { backgroundColor: "#2E7D32" },
                }}
              >
                Blogs
              </Button>
              <Button
                component={Link}
                to={`${base}/my-blogs`}
                fullWidth
                variant={selectedTab === "my-blogs" ? "contained" : "outlined"}
                onClick={() => setSelectedTab("my-blogs")}
                sx={{
                  backgroundColor: "#F57C00",
                  color: "white",
                  "&:hover": { backgroundColor: "#E65100" },
                }}
              >
                My Blogs
              </Button>

              <Button
                component={Link}
                to={`${base}/addcategory`}
                fullWidth
                variant={selectedTab === "addcategory" ? "contained" : "outlined"}
                onClick={() => setSelectedTab("addcategory")}
                sx={{
                  backgroundColor: "#b0b00e",
                  color: "white",
                  "&:hover": { backgroundColor: "#66660b" },
                }}
              >
                Add Category
              </Button>

              <Button
                component={Link}
                to={`${base}/addblog`}
                fullWidth
                variant={selectedTab === "addblog" ? "contained" : "outlined"}
                onClick={() => setSelectedTab("addblog")}
                sx={{
                  backgroundColor: "#D32F2F",
                  color: "white",
                  "&:hover": { backgroundColor: "#C62828" },
                }}
              >
                Create Blog
              </Button>



              
              <Button
                component={Link}
                to={`${base}/demo-requests`}
                fullWidth
                variant={selectedTab === "demo-requests" ? "contained" : "outlined"}
                onClick={() => setSelectedTab("demo-requests")}
                sx={{
                  backgroundColor: "#673AB7",
                  color: "white",
                  "&:hover": { backgroundColor: "#512DA8" },
                }}
              >
                Get Demo
              </Button>

              <Button
                component={Link}
                to={`${base}/contact-messages`}
                fullWidth
                variant={selectedTab === "contact-messages" ? "contained" : "outlined"}
                onClick={() => setSelectedTab("contact-messages")}
                sx={{
                  backgroundColor: "#009688",
                  color: "white",
                  "&:hover": { backgroundColor: "#00796B" },
                }}
              >
                Contact 
              </Button>
            </Box>
          </Drawer>
        )}

        {/* <Box component="main" sx={{ flexGrow: 1, p: 3 
        , width: "100%",
        ml: isCompact ? 0 : `${drawerWidth}px`,
           marginTop: '64px' 
      }}> */}

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: "100%",
            paddingLeft: isCompact || isCompactPage ? 0 : `${drawerWidth}px`,
            marginTop: "64px",
          }}
        >
          {(isCompact && isCompactPage) && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                overflowX: "auto",
                whiteSpace: "nowrap",
                gap: 1,
                px: 1,
                backgroundColor: "#08325B",
                mb: 2,
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {iconNavItems.map((item) => (
                <IconButton
                  key={item.key}
                  component={Link}
                  to={item.path}
                  onClick={() => setSelectedTab(item.key)}
                  sx={{
                    color: selectedTab === item.key ? "#35c0ca" : "white",
                    flex: "0 0 auto",
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          )}


          {location.pathname.includes("profile") && (
            <>
              <Typography variant="h4" color="#08325b" sx={{ textAlign: "center" }}>
                Welcome to Admin Panel
              </Typography>
              <Typography
                color="#08325b"
                sx={{ textAlign: "center", fontSize: "12px" }}
              >
                Select an option from the sidebar.
              </Typography>
            </>
          )}
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default AdminLayouts;
