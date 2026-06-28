import React from "react";
import { Typography, Container, Box, Chip, Stack } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LaunchIcon from "@mui/icons-material/Launch";
import internshipImg from "../assets/experience/internship.jpg";
import boardImg from "../assets/experience/board-member.jpg";

const experiences = [
	{
		role: "Full Stack Developer Intern",
		org: "Reyna Solutions LLP",
		location: "Vadodara, India",
		duration: "May 2026 – Jun 2026",
		type: "work",
		image: internshipImg,
		certificate:
			"https://drive.google.com/file/d/1msVEIypFHyCj8muPl8O-JW2nn2vVjswM/view?usp=sharing",
		points: [
			"Built and integrated frontend and backend features for production applications using React, Node.js, Express.js, and MongoDB, collaborating with developers across the stack.",
			"Implemented REST APIs, database operations, authentication workflows, and responsive UI components while independently learning and applying new technologies on the job.",
		],
		tags: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
	},
	{
		role: "Board Member",
		org: "Computer Society of India (CSI), Nirma University",
		location: "Ahmedabad, India",
		duration: "Aug 2025 – Present",
		type: "club",
		image: boardImg,
		certificate: null,
		points: [
			"Organized technical events including Hack-NU-Thon and BID2CODE with over 1000 participants.",
			"Led promotions for CUBIX '25, driving 500+ registrations across 6 sub-events.",
		],
		tags: ["Event Management", "Leadership", "Marketing"],
	},
];

function Experience() {
	return (
		<Box sx={{ minHeight: "100vh", py: 10, color: "#fff" }}>
			<Container maxWidth="lg">
				<Box sx={{ textAlign: "center", mb: 8 }}>
					<Typography
						variant="h2"
						sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: 700, mb: 2, color: "#00d4ff" }}
					>
						My <span style={{ color: "#b19cd9" }}>Experience</span>
					</Typography>
					<Box sx={{ width: 130, height: 4, bgcolor: "#00d4ff", margin: "0 auto" }} />
				</Box>

				<Stack spacing={4}>
					{experiences.map((exp, i) => (
						<Box
							key={exp.role + exp.org}
							sx={{
								display: "flex",
								flexDirection: { xs: "column", md: i % 2 === 0 ? "row" : "row-reverse" },
								bgcolor: "rgba(20, 25, 45, 0.85)",
								border: "1px solid rgba(0, 212, 255, 0.2)",
								borderRadius: 4,
								overflow: "hidden",
								transition: "all 0.3s ease",
								"&:hover": {
									borderColor: "#00d4ff",
									boxShadow: "0 12px 36px rgba(0, 212, 255, 0.18)",
									transform: "translateY(-4px)",
								},
							}}
						>
							<Box
								sx={{
									flex: { xs: "none", md: "0 0 40%" },
									position: "relative",
									overflow: "hidden",
									minHeight: { xs: 240, md: 320 },
								}}
							>
								<Box
									component="img"
									src={exp.image}
									alt={exp.org}
									sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
								/>
								<Box
									sx={{
										position: "absolute",
										top: 14,
										left: 14,
										display: "flex",
										alignItems: "center",
										gap: 0.7,
										px: 1.5,
										py: 0.6,
										borderRadius: 2,
										bgcolor: exp.type === "work" ? "rgba(0,212,255,0.9)" : "rgba(177,156,217,0.9)",
										backdropFilter: "blur(4px)",
									}}
								>
									{exp.type === "work" ? (
										<WorkIcon sx={{ fontSize: 16, color: "#0a192f" }} />
									) : (
										<GroupsIcon sx={{ fontSize: 16, color: "#0a192f" }} />
									)}
									<Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#0a192f", textTransform: "uppercase" }}>
										{exp.type === "work" ? "Internship" : "Leadership"}
									</Typography>
								</Box>
							</Box>

							<Box sx={{ flex: 1, p: { xs: 3, md: 4 } }}>
								<Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "center" }, gap: 1, mb: 1 }}>
									<Typography variant="h6" sx={{ fontWeight: 700, color: "#b19cd9" }}>
										{exp.role}
									</Typography>
									<Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
										<CalendarMonthIcon sx={{ fontSize: 16, color: "#64b5f6" }} />
										<Typography sx={{ fontSize: "0.85rem", color: "#c0c0c0" }}>{exp.duration}</Typography>
									</Box>
								</Box>

								<Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
									<Typography sx={{ color: "#00d4ff", fontWeight: 500 }}>{exp.org}</Typography>
									<Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
										<LocationOnIcon sx={{ fontSize: 16, color: "#64b5f6" }} />
										<Typography sx={{ fontSize: "0.85rem", color: "#c0c0c0" }}>{exp.location}</Typography>
									</Box>
									{exp.certificate && (
										<Box
											component="a"
											href={exp.certificate}
											target="_blank"
											rel="noopener noreferrer"
											sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: "#b19cd9", fontSize: "0.85rem", textDecoration: "none", "&:hover": { color: "#00d4ff" } }}
										>
											<LaunchIcon sx={{ fontSize: 15 }} /> Certificate
										</Box>
									)}
								</Stack>

								<Box component="ul" sx={{ pl: 2.5, m: 0, mb: 2 }}>
									{exp.points.map((pt, idx) => (
										<Typography key={idx} component="li" sx={{ color: "#c0c0c0", fontSize: "0.95rem", lineHeight: 1.7, mb: 0.8 }}>
											{pt}
										</Typography>
									))}
								</Box>

								<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
									{exp.tags.map((tag) => (
										<Chip
											key={tag}
											label={tag}
											size="small"
											sx={{ bgcolor: "rgba(0, 212, 255, 0.1)", color: "#64b5f6", fontSize: "0.78rem", border: "1px solid rgba(0, 212, 255, 0.3)" }}
										/>
									))}
								</Box>
							</Box>
						</Box>
					))}
				</Stack>
			</Container>
		</Box>
	);
}

export default Experience;
