import React from "react";
import { Typography, Container, Box, Button, Chip, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import syncupImg from "../assets/Projects/SyncUp.png";
import graphshieldImg from "../assets/Projects/GraphShield.png";
import trafficmindImg from "../assets/Projects/TrafficMind.png";
import kontexoImg from "../assets/Projects/Kontexo.jpg";
import bbm92Img from "../assets/Projects/bbm92.png";
import ospfImg from "../assets/Projects/ospf.png";
import trafficNavImg from "../assets/Projects/traffic-navigator.png";
import weatherImg from "../assets/Projects/weather.png";
import paintItImg from "../assets/Projects/paint-it.png";

const projects = [
	{
		title: "SyncUp",
		image: syncupImg,
		description:
			"A production-deployed full stack community platform where hosts create activity 'pods' (hackathons, treks, workshops) and people discover and join them. Built on a layered backend with real-time notifications, approval-based messaging, reviews, and an admin dashboard.",
		tags: ["React", "Node.js", "Express", "MongoDB", "Redis", "OAuth"],
		github: "https://github.com/fjiolla/SyncUp",
		live: "https://syncup-live.vercel.app",
	},
	{
		title: "GraphShield AI",
		image: graphshieldImg,
		description:
			"An enterprise-grade fairness platform that audits AI systems for bias across five modalities, from text and datasets to ML models and graph networks. Dual-LLM (Gemini + Groq) with auto-fallback, SHAP explanations, and EEOC compliance flags. Built for Google Solution Challenge 2026.",
		tags: ["FastAPI", "Next.js", "Gemini", "Groq", "Fairlearn", "SHAP"],
		github: "https://github.com/fjiolla/GraphShield",
		live: "https://graph-shield.vercel.app",
	},
	{
		title: "TrafficMind",
		image: trafficmindImg,
		description:
			"A real-time, multi-agent traffic incident command system using six LangGraph agents coordinated by a Gemini supervisor. Simulates 250 Brooklyn road segments, predicts congestion with DBSCAN, prioritizes emergency vehicles, and generates Digital Twin analyses. 🏆 1st place, Aetrix Hackathon 2026.",
		tags: ["Next.js", "FastAPI", "LangGraph", "Groq", "Mapbox", "WebSocket"],
		github: "https://github.com/fjiolla/Traffic-Analyser",
		live: "https://llm-co-pilot-for-traffic-incident-c.vercel.app",
	},
	{
		title: "Kontexo",
		image: kontexoImg,
		description:
			"A production-grade, multi-tenant SaaS platform that orchestrates cross-service workflows through an Agentic MCP Gateway. Features a LangGraph agent pipeline (planner, critic, HITL gate, executor), an MCP-Guard security proxy, and a custom MCP server exposing GitHub, Slack, Sheets, and Trello tools.",
		tags: ["Next.js", "FastAPI", "LangGraph", "Firebase", "RAG", "MCP"],
		github: "https://github.com/fjiolla/Kontexo",
		live: null,
	},
	{
		title: "BBM92 QKD Simulator",
		image: bbm92Img,
		description:
			"A Python/Qiskit simulator implementing the BBM92 entanglement-based QKD protocol for secure satellite-to-ship communication. Models atmospheric channel loss and eavesdropper interception, computing QBER, SKR, and SNR. Basis for a submitted research manuscript.",
		tags: ["Python", "Qiskit"],
		github: "https://github.com/fjiolla/bbm92-qkd-simulator",
		live: null,
	},
	{
		title: "OSPF Protocol Simulator",
		image: ospfImg,
		description:
			"An interactive Tkinter network simulator that visualizes the OSPF routing protocol. Design router topologies, assign link costs, and watch shortest-path routing computed live with Dijkstra's algorithm.",
		tags: ["Python", "Tkinter", "Networks"],
		github: "https://github.com/fjiolla/OSPF-Protocol-Simulation",
		live: null,
	},
	{
		title: "Traffic Navigation GUI",
		image: trafficNavImg,
		description:
			"A traffic simulation and navigation tool with real-time visualization and dynamic rerouting. Build custom maps and compute optimal paths with Dijkstra's or A*, adapting instantly to traffic delays.",
		tags: ["Python", "Tkinter", "DSA"],
		github: "https://github.com/fjiolla/Interactive-Traffic-Navigation-GUI",
		live: "https://interactive-traffic-navigation-gui.vercel.app",
	},
	{
		title: "Weather App",
		image: weatherImg,
		description:
			"A glassmorphism weather app with real-time updates, forecasts, and air quality from WeatherAPI. Dynamic backgrounds react to conditions, plus a live clock and city autocomplete search.",
		tags: ["HTML", "CSS", "JavaScript"],
		github: "https://github.com/fjiolla/Weather",
		live: null,
	},
	{
		title: "Paint It",
		image: paintItImg,
		description:
			"An interactive coloring board built in React: pick a color from the palette and click regions of an SVG to fill them in. A playful experiment in dynamic SVG manipulation.",
		tags: ["React", "SVG", "JavaScript"],
		github: "https://github.com/fjiolla/paint-it",
		live: "https://paint-it-six.vercel.app",
	},
];

function Projects() {
	return (
		<Box sx={{ minHeight: "100vh", py: 10, color: "#fff" }}>
			<Container maxWidth="lg">
				<Box sx={{ textAlign: "center", mb: 8 }}>
					<Typography
						variant="h2"
						sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: 700, mb: 2, color: "#00d4ff" }}
					>
						My <span style={{ color: "#b19cd9" }}>Projects</span>
					</Typography>
					<Box sx={{ width: 130, height: 4, bgcolor: "#00d4ff", margin: "0 auto", mb: 2 }} />
					<Typography sx={{ color: "#b0bccd", maxWidth: 620, mx: "auto" }}>
						From multi-agent AI systems to quantum simulators, here's what I've been building.
					</Typography>
				</Box>

				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
						gap: 3,
					}}
				>
					{projects.map((p) => (
						<Box
							key={p.title}
							sx={{
								bgcolor: "rgba(20, 25, 45, 0.85)",
								border: "1px solid rgba(0, 212, 255, 0.2)",
								borderRadius: 3,
								overflow: "hidden",
								display: "flex",
								flexDirection: "column",
								transition: "all 0.3s ease",
								"&:hover": {
									transform: "translateY(-8px)",
									borderColor: "#00d4ff",
									boxShadow: "0 12px 32px rgba(0, 212, 255, 0.28)",
								},
							}}
						>
							<Box
								sx={{
									height: 190,
									overflow: "hidden",
									borderBottom: "1px solid rgba(0, 212, 255, 0.2)",
								}}
							>
								<Box
									component="img"
									src={p.image}
									alt={p.title}
									sx={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
										transition: "transform 0.4s ease",
										"&:hover": { transform: "scale(1.06)" },
									}}
								/>
							</Box>

							<Box sx={{ p: 2.5, display: "flex", flexDirection: "column", flexGrow: 1 }}>
								<Typography variant="h6" sx={{ fontSize: "1.25rem", fontWeight: 600, color: "#b19cd9", mb: 1.2 }}>
									{p.title}
								</Typography>
								<Typography sx={{ fontSize: "0.9rem", color: "#c0c0c0", lineHeight: 1.6, mb: 2, flexGrow: 1 }}>
									{p.description}
								</Typography>

								<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.7, mb: 2.5 }}>
									{p.tags.map((tag) => (
										<Chip
											key={tag}
											label={tag}
											size="small"
											sx={{
												bgcolor: "rgba(0, 212, 255, 0.1)",
												color: "#64b5f6",
												fontSize: "0.75rem",
												height: "23px",
												border: "1px solid rgba(0, 212, 255, 0.3)",
											}}
										/>
									))}
								</Box>

								<Stack direction="row" spacing={1.5}>
									<Button
										variant="outlined"
										size="small"
										startIcon={<GitHubIcon />}
										href={p.github}
										target="_blank"
										sx={{
											flex: 1,
											color: "#b19cd9",
											borderColor: "#b19cd9",
											textTransform: "none",
											"&:hover": { borderColor: "#b19cd9", bgcolor: "rgba(177, 156, 217, 0.1)" },
										}}
									>
										Code
									</Button>
									{p.live && (
										<Button
											variant="contained"
											size="small"
											startIcon={<LaunchIcon />}
											href={p.live}
											target="_blank"
											sx={{
												flex: 1,
												bgcolor: "#00d4ff",
												color: "#0a192f",
												textTransform: "none",
												fontWeight: 600,
												"&:hover": { bgcolor: "#33ddff" },
											}}
										>
											Live
										</Button>
									)}
								</Stack>
							</Box>
						</Box>
					))}
				</Box>
			</Container>
		</Box>
	);
}

export default Projects;
