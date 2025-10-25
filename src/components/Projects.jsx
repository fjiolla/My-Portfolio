import React from "react";
import { Typography, Container, Box, Grid, Button, Chip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import first from "../assets/Projects/first.png";
import second from "../assets/Projects/second.png";
import third from "../assets/Projects/third.png";
import fourth from "../assets/Projects/fourth.png";
import fifth from "../assets/Projects/fifth.png";
import sixth from "../assets/Projects/sixth.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Weather Application",
      description:
        "Interactive Weather Application that provides real-time weather updates, forecasts, and air quality insights using WeatherAPI. Built with HTML, CSS, and JavaScript, it features dynamic backgrounds that change with weather conditions, a live clock, city search with autocomplete, and detailed daily or weekly statistics, all wrapped in a glassmorphism UI.",
      image: first,
      tags: ["HTML", "CSS", "Javascript", "Weather API"],
      github: "https://github.com/fjiolla/Weather.git",
    },
    {
      id: 2,
      title: "BBM92 Quantum Key Distribution Simulator",
      description:
        "A Python-based simulator that implements the BBM92 entanglement-based QKD protocol for secure quantum communication. It models realistic satellite-to-ship channels with atmospheric loss, quantum noise, and eavesdropping detection, while computing key metrics like QBER, SKR, and SNR. ",
      image: second,
      tags: ["Python", "Qiskit"],
      github: "https://github.com/fjiolla/bbm92-qkd-simulator.git",
    },
    {
      id: 3,
      title: "OSPF Protocol Simulator",
      description:
        "An interactive network simulator built with Python (Tkinter) that visualizes the working of the OSPF (Open Shortest Path First) routing protocol. It allows users to design router topologies, assign custom link costs, and simulate dynamic shortest-path routing using Dijkstra’s Algorithm. ",
      image: third,
      tags: ["Python", "Tkinter", "Computer Networks"],
      github: "https://github.com/fjiolla/OSPF-Protocol-Simulation.git",
    },
    {
      id: 4,
      title: "Traffic Navigation GUI",
      description:
        "A Python-based traffic simulation and navigation tool built with Tkinter, featuring real-time visualization and dynamic route computation. It enables users to design custom maps, add or remove nodes, and calculate the shortest path using Dijkstra’s or A* algorithms. The system automatically adapts to traffic delays or map changes, updating routes instantly for realistic navigation behavior. ",
      image: fourth,
      tags: ["Python", "Tkinter", "DSA"],
      github:
        "https://github.com/fjiolla/Interactive-Traffic-Navigation-GUI.git",
    },
    {
      id: 5,
      title: "My Portfolio",
      description:
        "A responsive portfolio building with React.js, designed to showcase my projects and skills in a visually appealing way. Deployed on Vercel.",
      image: fifth,
      tags: ["React.js", "Material UI"],
      github: "https://github.com/fjiolla/My-Portfolio.git",
    },
    {
      id: 6,
      title: "HTML Art Gallery",
      description:
        "A collection of random mini web scenes like flower pot, beach or guitar built with HTML, CSS, and JavaScript, all crafted with pure frontend code and CSS animations. Designed for fun, learning and visual storytelling.",
      image: sixth,
      tags: ["HTML", "CSS", "Javscript"],
      github: "https://github.com/fjiolla/html-art-gallery.git",
    },
  ];

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
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 2,
              color: "#00d4ff",
            }}
          >
            My <span style={{ color: "#b19cd9" }}>Projects</span>
          </Typography>
          <Box
            sx={{
              width: 130,
              height: 4,
              bgcolor: "#00d4ff",
              margin: "0 auto",
              mb: 3,
            }}
          />
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Box
                sx={{
                  bgcolor: "rgba(20, 25, 45, 0.8)",
                  border: "1px solid rgba(0, 212, 255, 0.2)",
                  borderRadius: 3,
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  maxWidth: 400,
                  margin: "0 auto",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    borderColor: "#00d4ff",
                    boxShadow: "0 10px 30px rgba(0, 212, 255, 0.3)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: 180,
                    bgcolor: "rgba(0, 212, 255, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: "1px solid rgba(0, 212, 255, 0.2)",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    p: 2.5,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      color: "#b19cd9",
                      mb: 1.5,
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      color: "#c0c0c0",
                      lineHeight: 1.6,
                      mb: 2,
                      flexGrow: 1,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.8,
                      mb: 2.5,
                    }}
                  >
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: "rgba(0, 212, 255, 0.1)",
                          color: "#64b5f6",
                          fontSize: "0.8rem",
                          height: "24px",
                          border: "1px solid rgba(0, 212, 255, 0.3)",
                          "&:hover": {
                            bgcolor: "rgba(0, 212, 255, 0.2)",
                          },
                        }}
                      />
                    ))}
                  </Box>

                  <Box sx={{ display: "flex", gap: 1.5 }}>
                    <Button
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                      sx={{
                        flex: 1,
                        color: "#b19cd9",
                        borderColor: "#b19cd9",
                        textTransform: "none",
                        fontSize: "0.9rem",
                        py: 0.8,
                        "&:hover": {
                          borderColor: "#b19cd9",
                          bgcolor: "rgba(177, 156, 217, 0.1)",
                        },
                      }}
                    >
                      GitHub
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
