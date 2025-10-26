import React from "react";
import { Typography, Container, Box, Chip } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";

import club1Image from "../assets/Events/club1.jpeg"; 
import club2Image from "../assets/Events/club2.jpeg";
import hackathon1Image from "../assets/Events/hackathon1.jpeg";
import hackathon2Image from "../assets/Events/hackathon2.jpeg";

function Events() {
	const events = [
		{
			id: 1,
			title: "Core Committee Member",
			organization: "Computer Society of India",
			duration: "29 - 31 March 2025",
			location: "Nirma University, Ahmedabad",
			description:"Contributed to organizing one of Nirma University's largest hackathons, attracting over 1000 participants from across the country. Responsibilities included securing sponsorships, coordinating event logistics, designing creatives such as posters and promotional materials, executing marketing campaigns, and managing participant engagement throughout the 48-hour event.",
			achievements: ["1000+ participants", "48-hour event", "5+ sponsors"],
			image: club1Image,
			type: "club",
		},
		{
			id: 2,
            title: "Hacovate Hackathon",
			organization: "Organized by LJ University",
			duration: "14 Sept 2025",
			location: "Ahmedabad, Gujarat",
			description: "Developed ScamShield, an AI-powered scam detection application capable of identifying fraudulent content across audio, image, and video formats. The project was built during a 36-hour hackathon and selected among the top 25 finalists.",
			achievement: "Finalist - Top 25",
			teamSize: "4 members",
			technologies: ["Python", "DL", "OpenCV"],
			image: hackathon2Image,
			type: "hackathon",
			
		},
		{
			id: 3,
			title: "Executive Member",
			organization: "Computer Society of India",
			duration: "8 - 9 Feb 2025",
			location: "Nirma University, Ahmedabad",
			description: "A flagship technical fest featuring multiple innovative events including Bid2Code, LogicLeague, Meme-O-Tech, Mockcelerate, Skribblify, Treasure Hunt, and Coder's Hunt. The fest combined multiple technical series varying from mock placement simulations and coding competitions to meme-based challenges and interactive design games.",
			achievements: ["3+ sponsors", "600+ participants", "2 days event"],
			image: club2Image,
			type: "club",
		},
		{
			id: 4,
            title: "Smart City Solutions Hackathon",
			organization: "Ministry of Education's Innovation Cell",
			duration: "16 Sept 2024",
			location: "Nirma University, Ahmedabad",
			description: "Selected among the top 30 teams in the internal round of the Smart India Hackathon, the project focused on developing a Deepfake Detection System using ensemble learning techniques, integrating multiple machine learning models to enhance detection accuracy and reliability.",
			achievement: "Top 30 Finalist",
			teamSize: "6 members",
			technologies: ["Python", "Tensorflow", "CNN"],
			image: hackathon1Image,
			type: "hackathon",
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
			<Container maxWidth="lg">
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
						Events & <span style={{ color: "#b19cd9" }}>Experiences</span>
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
					<Typography
						sx={{
							fontSize: "1.15rem",
							color: "#e0e0e0",
							maxWidth: 600,
							margin: "0 auto",
						}}
					>
						My journey through club activities and hackathon competitions
					</Typography>
				</Box>

				<Box
					sx={{
						position: "relative",
						"&::before": {
							content: '""',
							position: "absolute",
							left: "50%",
							transform: "translateX(-50%)",
							width: 2,
							height: "100%",
							bgcolor: "rgba(0, 212, 255, 0.3)",
							display: { xs: "none", md: "block" },
						},
					}}
				>
					{events.map((event, index) => {
						const isRight = index % 2 === 0;
						
						return (
							<Box
								key={event.id}
								sx={{
									display: "flex",
									justifyContent: isRight ? "flex-start" : "flex-end",
									mb: 6,
									position: "relative",
								}}
							>
								{/* Timeline dot */}
								<Box
									sx={{
										position: "absolute",
										left: "50%",
										transform: "translateX(-50%)",
										width: 20,
										height: 20,
										bgcolor: event.type === "club" ? "#b19cd9" : "#00d4ff",
										borderRadius: "50%",
										border: "4px solid rgba(20, 25, 45, 1)",
										zIndex: 2,
										top: 20,
									}}
								/>

								<Box
									sx={{
										width: { xs: "100%", md: "45%" },
										bgcolor: "rgba(20, 25, 45, 0.8)",
										border: "1px solid rgba(0, 212, 255, 0.2)",
										borderRadius: 3,
										overflow: "hidden",
										transition: "all 0.3s ease",
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
											height: 280,
											overflow: "hidden",
											position: "relative",
										}}
									>
										<Box
											component="img"
											src={event.image}
											alt={event.title}
											sx={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
											}}
										/>
										<Box
											sx={{
												position: "absolute",
												top: 12,
												right: 12,
												bgcolor: event.type === "club" ? "#b19cd9" : "#00d4ff",
												px: 2,
												py: 0.5,
												borderRadius: 2,
												display: "flex",
												alignItems: "center",
												gap: 0.5,
											}}
										>
											{event.type === "club" ? (
												<GroupsIcon sx={{ fontSize: 18, color: "#fff" }} />
											) : (
												<EmojiEventsIcon sx={{ fontSize: 18, color: "#fff" }} />
											)}
											<Typography
												sx={{
													color: "#fff",
													fontSize: "0.85rem",
													fontWeight: 600,
													textTransform: "uppercase",
												}}
											>
												{event.type === "club" ? "Club" : "Hackathon"}
											</Typography>
										</Box>
									</Box>

									<Box sx={{ p: 3 }}>
										<Typography
											variant="h6"
											sx={{
												fontSize: "1.3rem",
												fontWeight: 600,
												color: "#b19cd9",
												mb: 1,
											}}
										>
											{event.title}
										</Typography>

										<Typography
											sx={{
												fontSize: "1rem",
												color: "#00d4ff",
												mb: 2,
												fontWeight: 500,
											}}
										>
											{event.organization}
										</Typography>

										<Box sx={{ display: "flex", alignItems: "center", mb: 1, gap: 1 }}>
											<CalendarMonthIcon sx={{ fontSize: 18, color: "#64b5f6" }} />
											<Typography sx={{ fontSize: "0.9rem", color: "#c0c0c0" }}>
												{event.duration}
											</Typography>
										</Box>

										<Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1 }}>
											<LocationOnIcon sx={{ fontSize: 18, color: "#64b5f6" }} />
											<Typography sx={{ fontSize: "0.9rem", color: "#c0c0c0" }}>
												{event.location}
											</Typography>
										</Box>

										<Typography
											sx={{
												fontSize: "0.95rem",
												color: "#c0c0c0",
												lineHeight: 1.6,
												mb: 2,
											}}
										>
											{event.description}
										</Typography>

										{event.type === "club" && event.achievements && (
											<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
												{event.achievements.map((achievement, idx) => (
													<Chip
														key={idx}
														label={achievement}
														size="small"
														sx={{
															bgcolor: "rgba(177, 156, 217, 0.1)",
															color: "#b19cd9",
															fontSize: "0.8rem",
															border: "1px solid rgba(177, 156, 217, 0.3)",
														}}
													/>
												))}
											</Box>
										)}

										{event.type === "hackathon" && (
											<>
												{event.achievement && (
													<Box
														sx={{
															bgcolor: "rgba(0, 212, 255, 0.1)",
															border: "1px solid rgba(0, 212, 255, 0.3)",
															borderRadius: 2,
															p: 1.5,
															mb: 2,
														}}
													>
														<Typography
															sx={{
																fontSize: "1rem",
																color: "#00d4ff",
																fontWeight: 600,
																mb: 0.5,
															}}
														>
															🏆 {event.achievement}
														</Typography>
													</Box>
												)}

												{event.technologies && (
													<Box sx={{ mb: 2 }}>
														<Typography
															sx={{
																fontSize: "0.85rem",
																color: "#b19cd9",
																mb: 1,
																fontWeight: 600,
															}}
														>
															Technologies Used:
														</Typography>
														<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
															{event.technologies.map((tech, idx) => (
																<Chip
																	key={idx}
																	label={tech}
																	size="small"
																	sx={{
																		bgcolor: "rgba(0, 212, 255, 0.1)",
																		color: "#64b5f6",
																		fontSize: "0.8rem",
																		height: "24px",
																		border: "1px solid rgba(0, 212, 255, 0.3)",
																	}}
																/>
															))}
														</Box>
													</Box>
												)}

												{event.teamSize && (
													<Typography
														sx={{
															fontSize: "0.85rem",
															color: "#c0c0c0",
														}}
													>
														Team Size: {event.teamSize}
													</Typography>
												)}
											</>
										)}
									</Box>
								</Box>
							</Box>
						);
					})}
				</Box>
			</Container>
		</Box>
	);
}

export default Events;