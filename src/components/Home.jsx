import React, { useState, useEffect } from "react";
import { Typography, Container, Box, Avatar, Button, Stack, IconButton } from "@mui/material";
import { keyframes } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import myIcon from "../assets/myIcon.svg";
import resumePdf from "../assets/Leena_Resume.pdf";

const wave = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(30deg); }
  20% { transform: rotate(-30deg); }
  30% { transform: rotate(30deg); }
  40% { transform: rotate(-30deg); }
  50% { transform: rotate(20deg); }
  60% { transform: rotate(-20deg); }
  70% { transform: rotate(10deg); }
  80% { transform: rotate(-10deg); }
  90% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`;

const blink = keyframes`
  50% { opacity: 0; }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.5); }
  70% { box-shadow: 0 0 0 8px rgba(74, 222, 128, 0); }
  100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
`;

const ROLES = [
	"a Full Stack Developer",
	"an AI Builder",
	"a Competitive Programmer",
	"a Problem Solver",
];

function useTypewriter(words, typingSpeed = 90, deletingSpeed = 45, pause = 1400) {
	const [text, setText] = useState("");
	const [wordIndex, setWordIndex] = useState(0);
	const [deleting, setDeleting] = useState(false);

	useEffect(() => {
		const current = words[wordIndex % words.length];
		let timeout;

		if (!deleting && text === current) {
			timeout = setTimeout(() => setDeleting(true), pause);
		} else if (deleting && text === "") {
			setDeleting(false);
			setWordIndex((i) => (i + 1) % words.length);
		} else {
			timeout = setTimeout(
				() => {
					setText((prev) =>
						deleting
							? current.slice(0, prev.length - 1)
							: current.slice(0, prev.length + 1),
					);
				},
				deleting ? deletingSpeed : typingSpeed,
			);
		}

		return () => clearTimeout(timeout);
	}, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

	return text;
}

function Home() {
	const typed = useTypewriter(ROLES);

	return (
		<Box
			sx={{
				minHeight: "calc(100vh - 116px)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				color: "#fff",
				py: { xs: 6, md: 0 },
			}}
		>
			<Container maxWidth="lg">
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column-reverse", md: "row" },
						alignItems: "center",
						justifyContent: "space-between",
						width: "100%",
						gap: { xs: 5, md: 4 },
					}}
				>
					<Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
						<Box
							sx={{
								display: "inline-flex",
								alignItems: "center",
								gap: 1,
								px: 2,
								py: 0.75,
								mb: 3,
								borderRadius: 999,
								border: "1px solid rgba(74, 222, 128, 0.35)",
								bgcolor: "rgba(74, 222, 128, 0.08)",
							}}
						>
							<Box
								sx={{
									width: 9,
									height: 9,
									borderRadius: "50%",
									bgcolor: "#4ade80",
									animation: `${pulse} 2s infinite`,
								}}
							/>
							<Typography sx={{ fontSize: "0.85rem", color: "#4ade80", fontWeight: 600 }}>
								Open to internships & opportunities
							</Typography>
						</Box>

						<Typography
							variant="h1"
							sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, fontWeight: 600, mb: 1 }}
						>
							Hi, I'm{" "}
							<Box component="span" sx={{ color: "#b19cd9", fontWeight: 700 }}>
								Leena Shah
							</Box>{" "}
							<Box
								component="span"
								sx={{
									display: "inline-block",
									animation: `${wave} 2.4s infinite`,
									transformOrigin: "70% 70%",
								}}
							>
								👋🏻
							</Box>
						</Typography>

						<Typography
							sx={{
								fontSize: { xs: "1.6rem", md: "2.4rem" },
								fontWeight: 700,
								color: "#00d4ff",
								minHeight: { xs: "2.4rem", md: "3rem" },
								mb: 2.5,
							}}
						>
							I'm {typed}
							<Box
								component="span"
								sx={{
									borderRight: "3px solid #00d4ff",
									ml: "2px",
									animation: `${blink} 0.9s infinite step-end`,
								}}
							/>
						</Typography>

						<Typography
							sx={{
								fontSize: { xs: "1rem", md: "1.1rem" },
								lineHeight: 1.8,
								color: "#b0bccd",
								maxWidth: 540,
								mx: { xs: "auto", md: 0 },
								mb: 4,
							}}
						>
							Computer Science undergrad at Nirma University building production-grade
							full stack and AI systems. I turn ideas into shipped products, from
							multi-agent platforms to fairness-auditing tools.
						</Typography>

						<Stack
							direction="row"
							spacing={2}
							flexWrap="wrap"
							useFlexGap
							justifyContent={{ xs: "center", md: "flex-start" }}
							sx={{ mb: 3 }}
						>
							<Button
								component={RouterLink}
								to="/projects"
								variant="contained"
								endIcon={<ArrowForwardIcon />}
								sx={{
									bgcolor: "#00d4ff",
									color: "#0a192f",
									textTransform: "none",
									fontWeight: 700,
									fontSize: "1rem",
									px: 3,
									py: 1.2,
									borderRadius: 2,
									"&:hover": { bgcolor: "#33ddff", transform: "translateY(-2px)" },
									transition: "all 0.25s ease",
								}}
							>
								View My Work
							</Button>
							<Button
								href={resumePdf}
								target="_blank"
								download="Leena_Shah_Resume.pdf"
								variant="outlined"
								startIcon={<DownloadIcon />}
								sx={{
									color: "#b19cd9",
									borderColor: "#b19cd9",
									textTransform: "none",
									fontWeight: 600,
									fontSize: "1rem",
									px: 3,
									py: 1.2,
									borderRadius: 2,
									"&:hover": {
										borderColor: "#00d4ff",
										color: "#00d4ff",
										bgcolor: "rgba(0, 212, 255, 0.08)",
									},
								}}
							>
								Resume
							</Button>
						</Stack>

						<Stack
							direction="row"
							spacing={1}
							justifyContent={{ xs: "center", md: "flex-start" }}
						>
							{[
								{ icon: <GitHubIcon />, href: "https://github.com/fjiolla" },
								{ icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/fjiolla/" },
								{ icon: <EmailIcon />, href: "mailto:shah.leena.287@gmail.com" },
							].map((s, i) => (
								<IconButton
									key={i}
									href={s.href}
									target="_blank"
									rel="noopener noreferrer"
									sx={{
										color: "#a8a7a7",
										border: "1px solid rgba(0, 212, 255, 0.2)",
										transition: "all 0.3s ease",
										"&:hover": {
											color: "#00d4ff",
											borderColor: "#00d4ff",
											transform: "translateY(-3px)",
										},
									}}
								>
									{s.icon}
								</IconButton>
							))}
						</Stack>
					</Box>

					<Box
						sx={{
							flex: 1,
							display: "flex",
							justifyContent: { xs: "center", md: "flex-end" },
						}}
					>
						<Box
							sx={{
								position: "relative",
								"&::before": {
									content: '""',
									position: "absolute",
									inset: -12,
									borderRadius: "50%",
									background:
										"radial-gradient(circle, rgba(0,212,255,0.25) 0%, rgba(177,156,217,0.12) 50%, transparent 70%)",
									filter: "blur(8px)",
								},
							}}
						>
							<Avatar
								src={myIcon}
								alt="Leena Shah"
								sx={{
									width: { xs: 220, md: 340 },
									height: { xs: 220, md: 340 },
									position: "relative",
									transition: "transform 0.3s ease",
									"&:hover": { transform: "scale(1.05)" },
								}}
							/>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}

export default Home;
