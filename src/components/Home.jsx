import React from "react";
import { Typography, Container, Box, Avatar } from "@mui/material";
import { keyframes } from "@mui/system";
import myIcon from "../assets/myIcon.svg";

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

const typing = keyframes`
  from { width: 0; }
  to { width: 9ch; }
`;

const blink = keyframes`
  50% { border-color: transparent; }
`;

function Home() {
	return (
		<Box
			sx={{
				minHeight: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				color: "#fff",
				fontFamily: '"Press Start 2P", monospace',
			}}
		>
			<Container maxWidth="lg">
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						alignItems: "center",
						justifyContent: "space-between",
						width: "100%",
						gap: 4,
					}}
				>
					<Box
						sx={{
							flex: 1,
							textAlign: { xs: "center", md: "left" },
							mt: { xs: 0, md: -8 },
							ml: { xs: 0, md: -8 },
						}}
					>
						<Typography
							variant="h1"
							sx={{
								fontSize: { xs: "2.5rem", md: "4rem" },
								mb: 1,
								fontFamily: "inherit",
								margin: 0,
							}}
						>
							Hey There!{" "}
							<Box
								component="span"
								sx={{
									display: "inline-block",
									animation: `${wave} 2s infinite`,
									transformOrigin: "70% 70%",
									ml: -1,
								}}
							>
								👋🏻
							</Box>
						</Typography>

						<Box
							sx={{
								display: "flex",
								flexDirection: { xs: "column", sm: "row" },
								alignItems: { xs: "center", sm: "baseline" },
								gap: { xs: 1, sm: 3 },
								mb: 3,
							}}
						>
							<Typography
								sx={{
									fontSize: { xs: "1.5rem", md: "2rem" },
									fontFamily: "inherit",
								}}
							>
								I'M
							</Typography>
							<Typography
								sx={{
									fontSize: { xs: "2rem", md: "3rem" },
									color: "#b19cd9",
									fontFamily: "inherit",
								}}
							>
								LEENA SHAH
							</Typography>
						</Box>

						<Typography
							sx={{
								fontSize: { xs: "1.8rem", md: "3rem" },
								color: "#00d4ff",
								textDecoration: "underline",
								fontFamily: "inherit",
								display: "inline-block",
								overflow: "hidden",
								borderRight: "2px solid #00d4ff",
								whiteSpace: "nowrap",
								width: 0,
								animation: `${typing} 2s steps(9, end) forwards, ${blink} 0.9s infinite step-end`,
							}}
						>
							A Student
						</Typography>
					</Box>

					<Box
						sx={{
							flex: 1,
							display: "flex",
							justifyContent: { xs: "center", md: "flex-end" },
							mt: { xs: 4, md: -8 },
							mr: { xs: 0, md: -7 },
						}}
					>
						<Avatar
							src={myIcon}
							alt="Leena Icon"
							sx={{
								width: { xs: 200, md: 350 },
								height: { xs: 200, md: 350 },
								transition: "transform 0.3s ease",
								"&:hover": {
									transform: "scale(1.05)",
								},
							}}
						/>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}

export default Home;
