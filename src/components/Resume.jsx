import React from "react";
import { Typography, Container, Box, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import resumeImage from "../assets/resume.png";
import resumePdf from "../assets/leena.pdf";

function Resume() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: 8,
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 2,
              color: "#00d4ff",
            }}
          >
            My <span style={{ color: "#b19cd9" }}>Resume</span>
          </Typography>
          <Box
            sx={{
              width: 130,
              height: 4,
              bgcolor: "#00d4ff",
              margin: "0 auto",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 4,
          }}
        >
          <Box
            component="img"
            src={resumeImage}
            alt="Leena Resume"
            sx={{
              maxWidth: "100%",
              width: { xs: "100%", sm: "90%", md: "80%" },
              height: "auto",
              boxShadow: "0 10px 30px rgba(0, 212, 255, 0.3)",
              border: "2px solid rgba(0, 212, 255, 0.3)",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "0 15px 40px rgba(0, 212, 255, 0.5)",
                transform: "translateY(-5px)",
              },
            }}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            href={resumePdf}
            target="_blank"
            download="Leena_Resume.pdf"
            sx={{
              color: "#b19cd9",
              borderColor: "#b19cd9",
              textTransform: "none",
              fontSize: "1.1rem",
              px: 4,
              py: 1.5,
              fontWeight: 600,
              maxWidth: "250px",
              "&:hover": {
                borderColor: "#00d4ff",
                bgcolor: "rgba(0, 212, 255, 0.1)",
                color: "#00d4ff",
              },
            }}
          >
            Download CV
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Resume;
