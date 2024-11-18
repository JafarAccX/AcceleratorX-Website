import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { Box, Button, Typography } from "@mui/material";

const BookASession = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay the appearance by 2 seconds
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  // Animation for navbar appearance
  const springStyles = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(-100%)",
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div
      style={{ ...springStyles, position: "sticky", top: 0, zIndex: 1000 }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "blue", // Navbar background color
          color: "white",
          padding: { xs: "10px 20px", sm: "15px 30px" },
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: 600,
          }}
        >
          Book 1:1 session with our mentor
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            fontSize: { xs: "12px", sm: "14px" },
            padding: { xs: "5px 10px", sm: "8px 15px" },
          }}
        >
          Book Session
        </Button>
      </Box>
    </animated.div>
  );
};

export default BookASession;
