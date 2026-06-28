import React from "react";
import { Typography, Container, Box, Chip, Stack } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import ScienceIcon from "@mui/icons-material/Science";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

import solutionBadge from "../assets/achievements/solution-challenge-badge.png";
import coreCommittee from "../assets/achievements/core-committee.jpeg";
import executiveMember from "../assets/achievements/executive-member.jpeg";
import researchImg from "../assets/achievements/bbm92-research.png";
import aetrixCert from "../assets/achievements/Hackathon-Certificate.pdf";

const awards = [
	{
		title: "Google Solution Challenge 2026",
		highlight: "Top 106 Globally",
		date: "Jun 2026",
		accent: "#4285F4",
		badge: solutionBadge,
		emoji: null,
		description:
			"Selected from 85,000+ registrations and 6,700+ prototype submissions worldwide. GraphShield AI, my multi-domain bias detection platform, made the global top 106.",
		link: "https://drive.google.com/file/d/1EsBQWaX2d-OLhgZ8is4gEPJtodmypBKr/view?usp=sharing",
	},
	{
		title: "Aetrix Hackathon 2026 — Smart Transportation",
		highlight: "1st Place",
		date: "Mar 2026",
		accent: "#ffd700",
		badge: null,
		emoji: "🏆",
		description:
			"Won a 36-hour hackathon at PDEU with team 2AM Coders by building TrafficMind, a six-agent AI system for real-time traffic incident management.",
		link: aetrixCert,
	},
];

const involvement = [
	{
		title: "Hack-NU-Thon Organizer",
		org: "Computer Society of India, Nirma University",
		duration: "29 – 31 March 2025",
		description:
			"Helped organize one of Nirma University's largest hackathons with 1000+ participants, handling sponsorships, logistics, creatives, and marketing through the 48-hour event.",
		stats: ["1000+ participants", "48-hour event", "5+ sponsors"],
		image: coreCommittee,
	},
	{
		title: "CUBIX '25 Technical Fest",
		org: "Computer Society of India, Nirma University",
		duration: "8 – 9 Feb 2025",
		description:
			"Led promotions for a flagship technical fest spanning 6 sub-events including Bid2Code, LogicLeague and Coder's Hunt, driving 500+ registrations.",
		stats: ["500+ registrations", "6 sub-events", "3+ sponsors"],
		image: executiveMember,
	},
];

function Achievements() {
	return (
		<Box sx={{ minHeight: "100vh", py: 10, color: "#fff" }}>
			<Container maxWidth="lg">
				<Box sx={{ textAlign: "center", mb: 8 }}>
					<Typography
						variant="h2"
						sx={{ fontSize: { xs: "2.2rem", md: "3.3rem" }, fontWeight: 700, mb: 2, color: "#00d4ff" }}
					>
						Achievements & <span style={{ color: "#b19cd9" }}>Involvement</span>
					</Typography>
					<Box sx={{ width: 150, height: 4, bgcolor: "#00d4ff", margin: "0 auto", mb: 3 }} />
					<Typography sx={{ color: "#b0bccd", maxWidth: 600, mx: "auto" }}>
						Recognition, leadership, and research from my journey so far.
					</Typography>
				</Box>

				{/* Awards */}
				<Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" }, gap: 3, mb: 8 }}>
					{awards.map((a) => (
						<Box
							key={a.title}
							sx={{
								bgcolor: "rgba(20, 25, 45, 0.85)",
								border: `1px solid ${a.accent}55`,
								borderRadius: 3,
								p: 3.5,
								transition: "all 0.3s ease",
								"&:hover": { transform: "translateY(-6px)", borderColor: a.accent, boxShadow: `0 12px 36px ${a.accent}33` },
							}}
						>
							<Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
								<Box
									sx={{
										width: 68,
										height: 68,
										borderRadius: "50%",
										flexShrink: 0,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										overflow: "hidden",
										background: a.badge ? "transparent" : `linear-gradient(135deg, ${a.accent}, ${a.accent}aa)`,
										border: a.badge ? "none" : `2px solid ${a.accent}`,
										fontSize: "2rem",
									}}
								>
									{a.badge ? (
										<Box component="img" src={a.badge} alt={a.title} sx={{ width: "100%", height: "100%", objectFit: "contain" }} />
									) : (
										a.emoji
									)}
								</Box>
								<Box>
									<Typography sx={{ fontSize: "1.4rem", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
										{a.highlight}
									</Typography>
									<Typography sx={{ fontSize: "0.8rem", color: "#b0bccd" }}>{a.date}</Typography>
								</Box>
							</Stack>
							<Typography sx={{ fontWeight: 600, color: "#b19cd9", mb: 1 }}>{a.title}</Typography>
							<Typography sx={{ color: "#c0c0c0", fontSize: "0.92rem", lineHeight: 1.7, mb: 2 }}>
								{a.description}
							</Typography>
							<Box
								component="a"
								href={a.link}
								target="_blank"
								rel="noopener noreferrer"
								sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: "#00d4ff", fontSize: "0.88rem", fontWeight: 600, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
							>
								<LaunchIcon sx={{ fontSize: 16 }} /> View Certificate
							</Box>
						</Box>
					))}
				</Box>

				{/* Research */}
				<Box
					sx={{
						mb: 8,
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						bgcolor: "rgba(20, 25, 45, 0.85)",
						border: "1px solid rgba(177, 156, 217, 0.35)",
						borderRadius: 3,
						overflow: "hidden",
					}}
				>
					<Box sx={{ flex: { xs: "none", md: "0 0 40%" }, position: "relative", overflow: "hidden", minHeight: { xs: 220, md: 280 }, bgcolor: "#fff" }}>
						<Box component="img" src={researchImg} alt="Quantum research" sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", p: 1.5 }} />
					</Box>
					<Box sx={{ flex: 1, p: { xs: 3, md: 4 } }}>
						<Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
							<ScienceIcon sx={{ color: "#b19cd9", fontSize: 26 }} />
							<Typography variant="h5" sx={{ fontWeight: 700, color: "#b19cd9" }}>
								Research
							</Typography>
						</Stack>
						<Typography sx={{ fontWeight: 600, color: "#fff", mb: 0.5 }}>
							Satellite-Vehicular Quantum Communication (2025)
						</Typography>
						<Typography sx={{ fontSize: "0.85rem", color: "#00d4ff", mb: 1.5 }}>
							Manuscript submitted · expected Dec 2026
						</Typography>
						<Typography sx={{ color: "#c0c0c0", fontSize: "0.95rem", lineHeight: 1.7, mb: 2 }}>
							Implemented BBM92 and MDI-QKD protocols in Qiskit, modelling atmospheric channel
							loss using the Beer-Lambert law, eavesdropper interception with basis mismatch, and
							computed QBER, SKR, and SNR across varying distances.
						</Typography>
						<Box
							component="a"
							href="https://github.com/fjiolla/bbm92-qkd-simulator"
							target="_blank"
							rel="noopener noreferrer"
							sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: "#b19cd9", fontSize: "0.88rem", fontWeight: 600, textDecoration: "none", "&:hover": { color: "#00d4ff" } }}
						>
							<GitHubIcon sx={{ fontSize: 18 }} /> View Simulator
						</Box>
					</Box>
				</Box>

				{/* Involvement */}
				<Stack direction="row" spacing={1.5} alignItems="center" justifyContent="center" sx={{ mb: 4 }}>
					<GroupsIcon sx={{ color: "#00d4ff", fontSize: 28 }} />
					<Typography variant="h4" sx={{ fontWeight: 700, color: "#b19cd9", textAlign: "center" }}>
						Leadership & Community
					</Typography>
				</Stack>

				<Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 3 }}>
					{involvement.map((item) => (
						<Box
							key={item.title}
							sx={{
								bgcolor: "rgba(20, 25, 45, 0.85)",
								border: "1px solid rgba(0, 212, 255, 0.2)",
								borderRadius: 3,
								overflow: "hidden",
								transition: "all 0.3s ease",
								"&:hover": { transform: "translateY(-8px)", borderColor: "#00d4ff", boxShadow: "0 10px 30px rgba(0, 212, 255, 0.25)" },
							}}
						>
							<Box component="img" src={item.image} alt={item.title} sx={{ width: "100%", height: 230, objectFit: "cover", display: "block" }} />
							<Box sx={{ p: 3 }}>
								<Typography variant="h6" sx={{ fontWeight: 600, color: "#b19cd9", mb: 0.5 }}>
									{item.title}
								</Typography>
								<Typography sx={{ color: "#00d4ff", fontSize: "0.9rem", mb: 0.5 }}>{item.org}</Typography>
								<Typography sx={{ color: "#8a96a8", fontSize: "0.82rem", mb: 1.5 }}>{item.duration}</Typography>
								<Typography sx={{ color: "#c0c0c0", fontSize: "0.92rem", lineHeight: 1.6, mb: 2 }}>
									{item.description}
								</Typography>
								<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
									{item.stats.map((s) => (
										<Chip
											key={s}
											label={s}
											size="small"
											sx={{ bgcolor: "rgba(177, 156, 217, 0.1)", color: "#b19cd9", fontSize: "0.78rem", border: "1px solid rgba(177, 156, 217, 0.3)" }}
										/>
									))}
								</Box>
							</Box>
						</Box>
					))}
				</Box>
			</Container>
		</Box>
	);
}

export default Achievements;
