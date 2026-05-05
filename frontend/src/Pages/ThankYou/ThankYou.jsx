import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import "./ThankYou.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const message = location.state?.message || "Our team will connect with you soon.";
  const title = location.state?.title || "Thank You!";
  const productLink = location.state?.productLink || null;
  const duplicate = location.state?.duplicate || false;

  return (
    <Box className="thank-you-container">
      <Box className="thank-you-box">
        <IoCheckmarkCircleOutline className="thank-you-icon" />
        <Typography variant="h3" className="thank-you-title">
          {title}
        </Typography>
        <Typography variant="body1" className="thank-you-message">
          {message}
        </Typography>

        <Box className="thank-you-actions">
          {productLink && duplicate && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate(productLink)}
              className="thank-you-btn"
            >
              View Pricing / Subscription
            </Button>
          )}

          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate("/")}
            className="thank-you-btn"
          >
            Back to Home
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ThankYou;
