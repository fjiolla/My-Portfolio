import React from "react";
import CodingStats from "./About2.jsx";
import { Typography, Container, Box, Grid, Tooltip, Chip } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import BuildIcon from "@mui/icons-material/Build";
import myIcon2 from "../assets/myIcon2.svg";

// Import icons
import Javascript from "../assets/Icons/javaScript.svg";
import GitHub from "../assets/Icons/github.svg";
import cpp from "../assets/Icons/C++.svg";
import ReactIcon from "../assets/Icons/ReactIcon.svg";
import Python from "../assets/Icons/Python.svg";
import Git from "../assets/Icons/Git.svg";
import SQL from "../assets/Icons/SQL.svg";
import Tailwind from "../assets/Icons/Tailwind CSS.svg";
import MUI from "../assets/Icons/Material UI.svg";
import macos from "../assets/Icons/macos.png";
import vscode from "../assets/Icons/vscode.svg";
import firefox from "../assets/Icons/Firefox.svg";
import vercel from "../assets/Icons/vercel.svg";
import oop from "../assets/Icons/OOP.png";
import dbms from "../assets/Icons/dbms.png";
import os from "../assets/Icons/OS.png";
import cn from "../assets/Icons/CN.png";

function About() {
	const techStack = [
		{ name: "C++", icon: cpp },
		{ name: "Python", icon: Python },
		{ name: "JavaScript", icon: Javascript },
		{ name: "React.js", icon: ReactIcon },
		{ name: "Tailwind CSS", icon: Tailwind },
		{ name: "Material-UI", icon: MUI },
		{ name: "MySQL", icon: SQL },
		{ name: "Git", icon: Git },
	];

	const favorites = [
		{ name: "Computer Networks", icon: cn },
		{ name: "Operating Systems", icon: os },
		{ name: "Object-Oriented Programming", icon: oop },
		{ name: "Database Management Systems", icon: dbms },
	];

	const tools = [
		{ name: "VS Code", icon: vscode },
		{ name: "MacOS", icon: macos },
		{ name: "Firefox", icon: firefox },
		{ name: "Vercel", icon: vercel },
		{ name: "GitHub", icon: GitHub },
	];

	const IconBox = ({ item, color, hoverColor }) => (
		<Tooltip title={item.name} arrow placement="top">
			<Box
				sx={{
					width: 100,
					height: 80,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					bgcolor: `${color}15`,
					border: `2px solid ${color}40`,
					borderRadius: 2,
					cursor: "pointer",
					transition: "all 0.3s ease",
					"&:hover": {
						bgcolor: `${color}25`,
						borderColor: hoverColor || color,
						transform: "translateY(-5px) scale(1.05)",
						boxShadow: `0 10px 20px ${color}30`,
					},
				}}
			>
				<img
					src={item.icon}
					alt={item.name}
					style={{
						width: 40,
						height: 40,
						objectFit: "contain",
					}}
				/>
			</Box>
		</Tooltip>
	);

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
						About <span style={{ color: "#b19cd9" }}>Me</span>
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

				{/* About Me Section */}
				<Grid container spacing={3} sx={{ mb: 8, alignItems: "center" }}>
					{/* Content Section */}
					<Grid item xs={12} sm={6} md={7}>
						<Box>
							<Typography
								sx={{
									fontSize: "1.15rem",
									lineHeight: 1.9,
									color: "#e0e0e0",
									mb: 2,
								}}
							>
								Hi everyone! I'm{" "}
								<span style={{ color: "#b19cd9", fontWeight: 600 }}>
									Leena Shah
								</span>{" "}
								from{" "}
								<span style={{ color: "#b19cd9", fontWeight: 600 }}>
									Vadodara, India.
								</span>
							</Typography>
							<Typography
								sx={{
									fontSize: "1.15rem",
									lineHeight: 1.9,
									color: "#e0e0e0",
									mb: 2,
								}}
							>
								I'm currently in my pre-final year with minors in{" "}
								<span style={{ color: "#b19cd9", fontWeight: 600 }}>
									Cyber Security
								</span>{" "}
								at{" "}
								<span style={{ color: "#b19cd9", fontWeight: 600 }}>
									Nirma University, Ahmedabad.
								</span>
							</Typography>
							<Typography
								sx={{
									fontSize: "1.15rem",
									lineHeight: 1.9,
									color: "#e0e0e0",
									mb: 3,
								}}
							>
								I enjoy problem-solving, giving regular codeforces contests, and
								developing web applications.
							</Typography>

							<Typography
								sx={{
									fontSize: "1.15rem",
									lineHeight: 1.9,
									color: "#e0e0e0",
									mb: 2,
								}}
							>
								Outside of coding, you will find me:
							</Typography>

							<Box sx={{ mb: 4 }}>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										mb: 1.5,
										fontSize: "1.1rem",
										color: "#e0e0e0",
									}}
								>
									<Box
										component="span"
										sx={{
											mr: 2,
											fontSize: "1.3rem",
										}}
									>
										🏊‍♀️
									</Box>
									Swimming laps
								</Box>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										mb: 1.5,
										fontSize: "1.1rem",
										color: "#e0e0e0",
									}}
								>
									<Box
										component="span"
										sx={{
											mr: 2,
											fontSize: "1.3rem",
										}}
									>
										🚗
									</Box>
									Going on long drives
								</Box>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										mb: 1.5,
										fontSize: "1.1rem",
										color: "#e0e0e0",
									}}
								>
									<Box
										component="span"
										sx={{
											mr: 2,
											fontSize: "1.3rem",
										}}
									>
										♟️
									</Box>
									Playing chess
								</Box>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										mb: 1.5,
										fontSize: "1.1rem",
										color: "#e0e0e0",
									}}
								>
									<Box
										component="span"
										sx={{
											mr: 2,
											fontSize: "1.3rem",
										}}
									>
										🎬
									</Box>
									Watching cliche movies
								</Box>
							</Box>

							{/* Quote Section */}
							<Box
								sx={{
									mt: 4,
									pl: 3,
									borderLeft: "3px solid #b19cd9",
								}}
							>
								<Typography
									sx={{
										fontSize: "1.15rem",
										fontStyle: "italic",
										color: "#c0c0c0",
										mb: 1,
									}}
								>
									"I believe people work well under pressure, and so do I."
								</Typography>
							</Box>
						</Box>
					</Grid>

					{/* Image Section */}
					<Grid item xs={12} sm={6} md={5}>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Box
								component="img"
								src={myIcon2}
								alt="Leena Shah"
								sx={{
									width: "100%",
									maxWidth: 300,
									height: "auto",
									objectFit: "contain",
								}}
							/>
						</Box>
					</Grid>
				</Grid>
				{/* Tech Stack */}
				<Box sx={{ mb: 10 }}>
					<Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
						<CodeIcon sx={{ fontSize: "2rem", color: "#00d4ff", mr: 2 }} />
						<Typography
							variant="h4"
							sx={{
								fontSize: { xs: "1.8rem", md: "2.2rem" },
								fontWeight: 600,
								color: "#b19cd9",
							}}
						>
							Tech Stack
						</Typography>
					</Box>
					<Grid container spacing={4}>
						{techStack.map((tech) => (
							<Grid item key={tech.name}>
								<IconBox item={tech} color="#00d4ff" hoverColor="#00d4ff" />
							</Grid>
						))}
					</Grid>
				</Box>

				{/* Academic Favorites */}
				<Box sx={{ mb: 10 }}>
					<Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
						<SchoolIcon sx={{ fontSize: "2rem", color: "#00d4ff", mr: 2 }} />
						<Typography
							variant="h4"
							sx={{
								fontSize: { xs: "1.8rem", md: "2.2rem" },
								fontWeight: 600,
								color: "#b19cd9",
							}}
						>
							Academic Favorites
						</Typography>
					</Box>
					<Grid container spacing={2}>
						{favorites.map((subject) => (
							<Grid item key={subject.name}>
								<Chip
									icon={
										<img
											src={subject.icon}
											alt={subject.name}
											style={{ width: 20, height: 20 }}
										/>
									}
									label={subject.name}
									sx={{
										bgcolor: "rgba(0, 123, 255, 0.1)",
										color: "#64b5f6",
										fontSize: "1rem",
										fontWeight: 500,
										py: 2.5,
										px: 1,
										border: "1px solid rgba(0, 123, 255, 0.3)",
										"& .MuiChip-icon": {
											marginLeft: "8px",
										},
										"&:hover": {
											bgcolor: "rgba(0, 123, 255, 0.2)",
											transform: "translateY(-2px)",
											transition: "all 0.3s ease",
										},
									}}
								/>
							</Grid>
						))}
					</Grid>
				</Box>

				{/* Tools */}
				<Box>
					<Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
						<BuildIcon sx={{ fontSize: "2rem", color: "#00d4ff", mr: 2 }} />
						<Typography
							variant="h4"
							sx={{
								fontSize: { xs: "1.8rem", md: "2.2rem" },
								fontWeight: 600,
								color: "#b19cd9",
							}}
						>
							Tools I Use
						</Typography>
					</Box>
					<Grid container spacing={2}>
						{tools.map((tool) => (
							<Grid item key={tool.name}>
								<Chip
									icon={
										<img
											src={tool.icon}
											alt={tool.name}
											style={{ width: 20, height: 20 }}
										/>
									}
									label={tool.name}
									sx={{
										bgcolor: "rgba(0, 123, 255, 0.1)",
										color: "#64b5f6",
										fontSize: "1rem",
										fontWeight: 500,
										py: 2.5,
										px: 1,
										border: "1px solid rgba(0, 123, 255, 0.3)",
										"& .MuiChip-icon": {
											marginLeft: "8px",
										},
										"&:hover": {
											bgcolor: "rgba(0, 123, 255, 0.2)",
											transform: "translateY(-2px)",
											transition: "all 0.3s ease",
										},
									}}
								/>
							</Grid>
						))}
					</Grid>
				</Box>
				<Box sx={{ mt: 10 }}>
					<CodingStats />
				</Box>
			</Container>
		</Box>
	);
}

export default About;
