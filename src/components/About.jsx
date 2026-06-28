import React from "react";
import CodingStats from "./About2.jsx";
import { Typography, Container, Box, Tooltip, Chip } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import BuildIcon from "@mui/icons-material/Build";
import myIcon2 from "../assets/myIcon2.svg";

// Local tool icons
import GitHub from "../assets/Icons/github.svg";
import vscode from "../assets/Icons/vscode.svg";
import firefox from "../assets/Icons/Firefox.svg";
import vercel from "../assets/Icons/vercel.svg";
import macos from "../assets/Icons/macos.png";

// simpleicons CDN helper -> consistent, always-visible brand icons
const si = (slug, color) => `https://cdn.simpleicons.org/${slug}/${color}`;

const techStack = [
	{ name: "C++", icon: si("cplusplus", "00599C") },
	{ name: "Python", icon: si("python", "3776AB") },
	{ name: "JavaScript", icon: si("javascript", "F7DF1E") },
	{ name: "TypeScript", icon: si("typescript", "3178C6") },
	{ name: "React", icon: si("react", "61DAFB") },
	{ name: "Next.js", icon: si("nextdotjs", "ffffff") },
	{ name: "Tailwind CSS", icon: si("tailwindcss", "06B6D4") },
	{ name: "Material UI", icon: si("mui", "007FFF") },
	{ name: "Node.js", icon: si("nodedotjs", "5FA04E") },
	{ name: "Express", icon: si("express", "ffffff") },
	{ name: "FastAPI", icon: si("fastapi", "009688") },
	{ name: "MongoDB", icon: si("mongodb", "47A248") },
	{ name: "MySQL", icon: si("mysql", "4479A1") },
	{ name: "Redis", icon: si("redis", "FF4438") },
	{ name: "Docker", icon: si("docker", "2496ED") },
	{ name: "Git", icon: si("git", "F05032") },
];

const aiTooling = ["LangGraph", "Gemini API", "Groq", "SHAP", "Fairlearn", "Qiskit"];

const coreCS = [
	"Data Structures & Algorithms",
	"OOP",
	"Operating Systems",
	"DBMS",
	"Computer Networks",
];

const tools = [
	{ name: "VS Code", icon: vscode },
	{ name: "macOS", icon: macos },
	{ name: "Firefox", icon: firefox },
	{ name: "Vercel", icon: vercel },
	{ name: "GitHub", icon: GitHub },
];

const IconBox = ({ item }) => (
	<Tooltip title={item.name} arrow placement="top">
		<Box
			sx={{
				width: "100%",
				height: 100,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				gap: 1,
				bgcolor: "rgba(0, 212, 255, 0.06)",
				border: "1px solid rgba(0, 212, 255, 0.2)",
				borderRadius: 2,
				cursor: "pointer",
				transition: "all 0.3s ease",
				"&:hover": {
					borderColor: "#00d4ff",
					transform: "translateY(-5px) scale(1.04)",
					boxShadow: "0 10px 20px rgba(0, 212, 255, 0.2)",
				},
			}}
		>
			<img src={item.icon} alt={item.name} style={{ width: 38, height: 38, objectFit: "contain" }} />
			<Typography sx={{ fontSize: "0.72rem", color: "#b0bccd", textAlign: "center", px: 0.5 }}>
				{item.name}
			</Typography>
		</Box>
	</Tooltip>
);

const IconGrid = ({ items, cols }) => (
	<Box sx={{ display: "grid", gridTemplateColumns: cols, gap: 2 }}>
		{items.map((item) => (
			<IconBox key={item.name} item={item} />
		))}
	</Box>
);

const PillRow = ({ items, color = "#64b5f6", border = "rgba(0, 123, 255, 0.3)", bg = "rgba(0, 123, 255, 0.1)" }) => (
	<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, justifyContent: { xs: "center", md: "space-between" } }}>
		{items.map((label) => (
			<Chip
				key={label}
				label={label}
				sx={{
					flexGrow: 1,
					bgcolor: bg,
					color,
					fontSize: "0.92rem",
					fontWeight: 500,
					py: 2.4,
					border: `1px solid ${border}`,
					"&:hover": { transform: "translateY(-2px)", transition: "all 0.3s ease" },
				}}
			/>
		))}
	</Box>
);

const SectionHeader = ({ icon, children }) => (
	<Box sx={{ display: "flex", alignItems: "center", mb: 4, justifyContent: { xs: "center", md: "flex-start" } }}>
		{icon}
		<Typography variant="h4" sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" }, fontWeight: 600, color: "#b19cd9", ml: 2 }}>
			{children}
		</Typography>
	</Box>
);

function About() {
	return (
		<Box sx={{ minHeight: "100vh", py: 10, color: "#fff" }}>
			<Container maxWidth="lg">
				<Box sx={{ textAlign: "center", mb: 7 }}>
					<Typography
						variant="h2"
						sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: 700, mb: 2, color: "#00d4ff" }}
					>
						About <span style={{ color: "#b19cd9" }}>Me</span>
					</Typography>
					<Box sx={{ width: 130, height: 4, bgcolor: "#00d4ff", margin: "0 auto" }} />
				</Box>

				{/* Intro: text + avatar side by side */}
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr" },
						gap: { xs: 4, md: 6 },
						alignItems: "center",
						mb: 12,
					}}
				>
					<Box sx={{ order: { xs: 2, md: 1 } }}>
						<Typography sx={{ fontSize: "1.12rem", lineHeight: 1.9, color: "#e0e0e0", mb: 2 }}>
							Hi! I'm{" "}
							<span style={{ color: "#b19cd9", fontWeight: 600 }}>Leena Shah</span>, a Computer
							Science undergrad at{" "}
							<span style={{ color: "#b19cd9", fontWeight: 600 }}>Nirma University, Ahmedabad</span>{" "}
							with a minor in{" "}
							<span style={{ color: "#b19cd9", fontWeight: 600 }}>Cyber Security</span> (CGPA 8.26).
						</Typography>
						<Typography sx={{ fontSize: "1.12rem", lineHeight: 1.9, color: "#e0e0e0", mb: 2 }}>
							I build production-grade full stack and AI products, from multi-agent systems and
							bias-auditing platforms to quantum communication simulators. I recently interned as
							a Full Stack Developer and placed in the global top 106 at the Google Solution
							Challenge 2026.
						</Typography>
						<Typography sx={{ fontSize: "1.12rem", lineHeight: 1.9, color: "#e0e0e0", mb: 3 }}>
							I love problem-solving, give regular Codeforces contests, and enjoy turning rough
							ideas into things people can actually use.
						</Typography>

						<Typography sx={{ fontSize: "1.1rem", color: "#e0e0e0", mb: 1.5 }}>
							Outside of coding, you'll find me:
						</Typography>
						<Box>
							{[
								{ emoji: "🏊‍♀️", text: "Swimming laps" },
								{ emoji: "🚗", text: "Going on long drives" },
								{ emoji: "♟️", text: "Playing chess" },
								{ emoji: "🎬", text: "Watching cliché movies" },
							].map((h) => (
								<Box
									key={h.text}
									sx={{ display: "flex", alignItems: "center", mb: 1.2, fontSize: "1.05rem", color: "#e0e0e0" }}
								>
									<Box component="span" sx={{ mr: 2, fontSize: "1.3rem" }}>
										{h.emoji}
									</Box>
									{h.text}
								</Box>
							))}
						</Box>

						<Box sx={{ mt: 4, pl: 3, borderLeft: "3px solid #b19cd9" }}>
							<Typography sx={{ fontSize: "1.1rem", fontStyle: "italic", color: "#c0c0c0" }}>
								"I believe people work well under pressure, and so do I."
							</Typography>
						</Box>
					</Box>

					<Box sx={{ order: { xs: 1, md: 2 }, display: "flex", justifyContent: "center" }}>
						<Box
							sx={{
								position: "relative",
								"&::before": {
									content: '""',
									position: "absolute",
									inset: -10,
									borderRadius: 4,
									background:
										"radial-gradient(circle, rgba(0,212,255,0.18) 0%, rgba(177,156,217,0.1) 55%, transparent 72%)",
									filter: "blur(6px)",
								},
							}}
						>
							<Box
								component="img"
								src={myIcon2}
								alt="Leena Shah"
								sx={{ position: "relative", width: "100%", maxWidth: 300, height: "auto", display: "block" }}
							/>
						</Box>
					</Box>
				</Box>

				{/* Tech Stack — spread full width */}
				<Box sx={{ mb: 12 }}>
					<SectionHeader icon={<CodeIcon sx={{ fontSize: "2rem", color: "#00d4ff" }} />}>
						Tech Stack
					</SectionHeader>
					<IconGrid
						items={techStack}
						cols={{ xs: "repeat(3, 1fr)", sm: "repeat(4, 1fr)", md: "repeat(8, 1fr)" }}
					/>
					<Box sx={{ mt: 4 }}>
						<Typography sx={{ color: "#8a96a8", fontSize: "0.9rem", fontWeight: 600, mb: 1.5, textTransform: "uppercase", letterSpacing: 1, textAlign: { xs: "center", md: "left" } }}>
							AI / LLM Tooling
						</Typography>
						<PillRow items={aiTooling} color="#b19cd9" bg="rgba(177, 156, 217, 0.1)" border="rgba(177, 156, 217, 0.3)" />
					</Box>
				</Box>

				{/* Core CS — spread full width */}
				<Box sx={{ mb: 12 }}>
					<SectionHeader icon={<SchoolIcon sx={{ fontSize: "2rem", color: "#00d4ff" }} />}>
						Core CS Foundations
					</SectionHeader>
					<PillRow items={coreCS} />
				</Box>

				{/* Tools — spread full width */}
				<Box sx={{ mb: 12 }}>
					<SectionHeader icon={<BuildIcon sx={{ fontSize: "2rem", color: "#00d4ff" }} />}>
						Tools I Use
					</SectionHeader>
					<IconGrid items={tools} cols={{ xs: "repeat(3, 1fr)", sm: "repeat(5, 1fr)" }} />
				</Box>

				<CodingStats />
			</Container>
		</Box>
	);
}

export default About;
