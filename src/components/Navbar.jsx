import React from "react";
import { AppBar, Toolbar, Button, Box, Avatar } from "@mui/material";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "transparent",
        py: 1,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            src={logo}
            alt="Logo"
            sx={{ width: 100, height: 100 }}
            variant="square"
          />
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 5,
          }}
        >
          {["Home", "About", "Projects", "Events", "Resume"].map((item) => (
            <Button
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              sx={{
                color: "#a8a7a7",
                fontSize: "1.3rem",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  color: "#007bff",
                  bgcolor: "transparent",
                },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
