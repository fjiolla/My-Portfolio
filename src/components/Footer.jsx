import React from "react";
import { Box, Container, Typography, IconButton, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
	return (
		<Box
			component="footer"
			sx={{
				bgcolor: "rgba(10, 15, 30, 0.95)",
				borderTop: "1px solid rgba(0, 212, 255, 0.2)",
				py: 2,
			}}
		>
			<Container maxWidth="lg">
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						justifyContent: "space-between",
						alignItems: "center",
						gap: 3,
					}}
				>
					<Box sx={{ textAlign: { xs: "center", md: "left" } }}>
						<Typography
							sx={{
								color: "#e0e0e0",
								fontSize: "0.95rem",
								mb: 0.5,
							}}
						>
							Designed and Developed by{" "}
							<Box
								component="span"
								sx={{
									color: "#b19cd9",
									fontWeight: 600,
								}}
							>
								Leena Shah
							</Box>
						</Typography>
						
					</Box>

					<Box
						sx={{
							display: "flex",
							gap: 2,
						}}
					>
						<IconButton
							component={Link}
							href="https://github.com/fjiolla"
							target="_blank"
							rel="noopener noreferrer"
							sx={{
								color: "#a8a7a7",
								bgcolor: "rgba(0, 212, 255, 0.1)",
								border: "1px solid rgba(0, 212, 255, 0.2)",
								transition: "all 0.3s ease",
								"&:hover": {
									color: "#00d4ff",
									bgcolor: "rgba(0, 212, 255, 0.2)",
									borderColor: "#00d4ff",
									transform: "translateY(-3px)",
								},
							}}
						>
							<GitHubIcon />
						</IconButton>

						<IconButton
							component={Link}
							href="https://x.com/fji0lla"
							target="_blank"
							rel="noopener noreferrer"
							sx={{
								color: "#a8a7a7",
								bgcolor: "rgba(0, 212, 255, 0.1)",
								border: "1px solid rgba(0, 212, 255, 0.2)",
								transition: "all 0.3s ease",
								"&:hover": {
									color: "#00d4ff",
									bgcolor: "rgba(0, 212, 255, 0.2)",
									borderColor: "#00d4ff",
									transform: "translateY(-3px)",
								},
							}}
						>
							<TwitterIcon />
						</IconButton>

						<IconButton
							component={Link}
							href="https://linkedin.com/in/fjiolla"
							target="_blank"
							rel="noopener noreferrer"
							sx={{
								color: "#a8a7a7",
								bgcolor: "rgba(0, 212, 255, 0.1)",
								border: "1px solid rgba(0, 212, 255, 0.2)",
								transition: "all 0.3s ease",
								"&:hover": {
									color: "#00d4ff",
									bgcolor: "rgba(0, 212, 255, 0.2)",
									borderColor: "#00d4ff",
									transform: "translateY(-3px)",
								},
							}}
						>
							<LinkedInIcon />
						</IconButton>

						<IconButton
							component={Link}
							href="https://www.instagram.com/leenaaa__28/"
							target="_blank"
							rel="noopener noreferrer"
							sx={{
								color: "#a8a7a7",
								bgcolor: "rgba(0, 212, 255, 0.1)",
								border: "1px solid rgba(0, 212, 255, 0.2)",
								transition: "all 0.3s ease",
								"&:hover": {
									color: "#00d4ff",
									bgcolor: "rgba(0, 212, 255, 0.2)",
									borderColor: "#00d4ff",
									transform: "translateY(-3px)",
								},
							}}
						>
							<InstagramIcon />
						</IconButton>

						<IconButton
							component={Link}
							href="mailto:shah.leena.287@gmail.com"
							sx={{
								color: "#a8a7a7",
								bgcolor: "rgba(0, 212, 255, 0.1)",
								border: "1px solid rgba(0, 212, 255, 0.2)",
								transition: "all 0.3s ease",
								"&:hover": {
									color: "#00d4ff",
									bgcolor: "rgba(0, 212, 255, 0.2)",
									borderColor: "#00d4ff",
									transform: "translateY(-3px)",
								},
							}}
						>
							<EmailIcon />
						</IconButton>
					</Box>

					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 0.5,
							textAlign: { xs: "center", md: "right" },
						}}
					>
						<Typography
							sx={{
								color: "#a8a7a7",
								fontSize: "0.85rem",
							}}
						>
							© 2025 All rights reserved
						</Typography>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}

export default Footer;