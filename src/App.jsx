import React from "react";
import { Box } from "@mui/material";
import NavBar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#0a192f",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <NavBar />
      <main>
        <Home />
      </main>
    </Box>
  );
}

export default App;
