import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //
import "./Profile.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import toast from "react-hot-toast";
import BASE_URL from "../Pages/Config/Config.js"

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    profile: "",
  });

  const [file, setFile] = useState(null);
  const [removeProfileImage, setRemoveProfileImage] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const token = localStorage.getItem("token");

  const email = localStorage.getItem("email") || "";

  const { userId: paramUserId } = useParams();
  const userId = paramUserId || localStorage.getItem("userId");
  const id = localStorage.getItem("userId");

  const resolveProfileImage = () => {
    if (file) {
      return URL.createObjectURL(file);
    }

    if (!formData.profile) {
      return "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg";
    }

    if (/^https?:\/\//i.test(formData.profile)) {
      return formData.profile;
    }

    return `${BASE_URL}/upload/${formData.profile}`;
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/v1/user/get-profile/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
          },
        );
        setFormData({
          name: response.data.user.username || "",
          email: response.data.user.email || "",
          bio: response.data.user.bio || "",
          profile: response.data.user.profile || "",
        });
      } catch (error) {
        //console.error("Error getting profile:", error.response?.data || error.message || error);
      }
    };
    fetchUserData();
  }, [userId, token]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profile") {
      const file = files[0];
      if (file) {
        const validTypes = ["image/jpeg", "image/png"];
        const maxSize = 2 * 1024 * 1024;

        if (!validTypes.includes(file.type)) {
          toast.error("Only JPG and PNG files are allowed.");
          return;
        }
        if (file.size > maxSize) {
          toast.error("File size must be under 2MB.");
          return;
        }
        setFile(file);
        setRemoveProfileImage(false);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const form = new FormData();
  //   form.append("username", formData.name);
  //   form.append("email", formData.email);
  //   form.append("bio", formData.bio);
  //   form.append("removeProfileImage", removeProfileImage ? "true" : "false");
  //   if (file) {
  //     form.append("profile", file);
  //   }

  //   const loadingToast = toast.loading("Saving your profile...");
  //   setIsSaving(true);

  //   try {
  //     const response = await axios.put(
  //       `${BASE_URL}/api/v1/user/update-profile/${userId}`,
  //       form,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "multipart/form-data",
  //         },
  //       },
  //     );
  //     toast.success("Your profile was updated successfully.", {
  //       id: loadingToast,
  //     });

  //     const updatedUser = response.data.user;
  //     setFormData({
  //       name: updatedUser.username,
  //       email: updatedUser.email,
  //       bio: updatedUser.bio,
  //       profile: updatedUser.profile,
  //     });

  //     setFile(null);
  //     setRemoveProfileImage(false);

  //     localStorage.setItem("name", response.data.user.username);
  //     localStorage.setItem("email", response.data.user.email);
  //     localStorage.setItem("profile", response.data.user.profile || "");
  //   } catch (error) {
  //     //console.error("Error updating profile:", error.response?.data || error.message);
  //     toast.error("We couldn't update your profile. Please try again.", {
  //       id: loadingToast,
  //     });
  //   } finally {
  //     setIsSaving(false);
  //   }
  // };
  const handleSubmit = async (e) => {
  e.preventDefault();
  const form = new FormData();
  
  // Make sure these keys match exactly what your Backend Controller expects
  form.append("username", formData.name); 
  form.append("email", formData.email);
  form.append("bio", formData.bio);
  form.append("removeProfileImage", removeProfileImage ? "true" : "false");
  
  if (file) {
    form.append("profile", file);
  }

  const loadingToast = toast.loading("Saving your profile...");
  setIsSaving(true);

  try {
    const response = await axios.put(
      `${BASE_URL}/api/v1/user/update-profile/${userId}`,
      form,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    toast.success("Your profile was updated successfully.", { id: loadingToast });

    // Sync state with the updated data from server
    const updatedUser = response.data.user;
setFormData({
  name: updatedUser.username || updatedUser.name || "", 
  email: updatedUser.email || "",
  bio: updatedUser.bio ?? "",
  profile: updatedUser.profile || "",
});

    setFile(null);
    setRemoveProfileImage(false);

    // Update LocalStorage so changes persist across the app
  //  localStorage.setItem("name", updatedUser.username || updatedUser.name);

  //   localStorage.setItem("email", updatedUser.email);
  //   if (updatedUser.profile) {
  //   localStorage.setItem("profile", updatedUser.profile || "");
  //   }
    const fullImagePath = updatedUser.profile 
      ? (updatedUser.profile.startsWith('http') ? updatedUser.profile : `${BASE_URL}/upload/${updatedUser.profile}`)
      : "";

    localStorage.setItem("name", updatedUser.username || updatedUser.name);
    localStorage.setItem("email", updatedUser.email);
    localStorage.setItem("profile", fullImagePath); 

    toast.success("Your profile was updated successfully.", { id: loadingToast });

    // 3. Page Reload (Sabse important sidebar refresh ke liye)
    setTimeout(() => {
      window.location.reload(); 
    }, 800);
  } catch (error) {
    toast.error("We couldn't update your profile.", { id: loadingToast });
  } finally {
    setIsSaving(false);
  }
};

  if (!id) {
    return (
      <Container className="text-center mt-5">
        <h4>Please login to see Profile.</h4>
      </Container>
    );
  }
  return (
    <div
      className="profile-page"
      style={{
        flexGrow: 1,

        padding: "12px",
        fontSize: "15px",
      }}
    >
      <div
        className="profilepageview"
        style={{
          display: "flex",
          gap: "30px",
          backgroundColor: "#fff",
          padding: "10px",
          borderRadius: "12px",
        }}
      >
        {/* User Info */}
        <div
          className="profile-page"
          style={{
            width: "40%",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            padding: "29px",
            fontSize: "15px",
          }}
        >
          <h2 className="userinf">User Information</h2>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Bio:</strong> {formData.bio || "No bio provided"}
          </p>
         <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
  <img
    src={resolveProfileImage()}
    alt="Profile"
    style={{
      width: "60%", // Keep your preferred width
      borderRadius: "10px",
      marginTop: "10px",
    }}
  />
  
  {(file || formData.profile) && (
    <button
      type="button"
      onClick={() => {
        setFile(null);
        setFormData((prev) => ({ ...prev, profile: "" }));
        setRemoveProfileImage(true);
        toast.success("Profile image removed. Click Update Profile to save.");
      }}
      style={{
        marginTop: "12px",     // Space between image and button
        padding: "8px 16px",   // Better padding for a standard button look
        backgroundColor: "#e74c3c",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "14px",      // Slightly larger for readability
        fontWeight: "500",
        transition: "background 0.3s",
        width: "fit-content"   // Keeps button only as wide as its text
      }}
    >
      Remove Image
    </button>
  )}
</div>
        </div>

        {/* Update Form */}
        <div
          className="profile-page"
          style={{
            width: "60%",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            padding: "12px",
            fontSize: "15px",
          }}
        >
          <h2>Update Your Information</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
           
              style={inputStyle}
            />

            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
        
              style={inputStyle}
            />

            <label htmlFor="bio">Bio:</label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio || ""}
              onChange={handleChange}
              maxLength={200}
              rows={4}
              style={{ ...inputStyle, resize: "none" }}
            />

            <label htmlFor="profile">Profile Picture:</label>
            <p style={{ margin: "4px 0", fontSize: "0.9em", color: "#555" }}>
              Allowed: JPG or PNG, Max size: 2MB
            </p>
            <input
              id="profile"
              type="file"
              name="profile"
              accept="image/png, image/jpeg"
              onChange={handleChange}
              style={{
                margin: "8px 0",
                paddingLeft: "4px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            />

            <button type="submit" style={buttonStyle}>
              {isSaving ? "Saving..." : "Update Profile"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Simple inline styles
const inputStyle = {
  padding: "10px",
  margin: "8px 0 16px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  display: "block",
  width: "100%",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  marginTop: "30px",
};

export default Profile;
