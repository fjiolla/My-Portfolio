import React from "react";
import { Typography, Container, Box, Button, Stack } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import resumePdf from "../assets/Leena_Resume.pdf";

function Resume() {
	return (
		<Box sx={{ minHeight: "100vh", py: 10, color: "#fff" }}>
			<Container maxWidth="md">
				<Box sx={{ textAlign: "center", mb: 5 }}>
					<Typography
						variant="h2"
						sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: 700, mb: 2, color: "#00d4ff" }}
					>
						My <span style={{ color: "#b19cd9" }}>Resume</span>
					</Typography>
					<Box sx={{ width: 130, height: 4, bgcolor: "#00d4ff", margin: "0 auto" }} />
				</Box>

				<Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }} flexWrap="wrap" useFlexGap>
					<Button
						variant="contained"
						startIcon={<DownloadIcon />}
						href={resumePdf}
						download="Leena_Shah_Resume.pdf"
						sx={{
							bgcolor: "#00d4ff",
							color: "#0a192f",
							textTransform: "none",
							fontSize: "1rem",
							fontWeight: 700,
							px: 3.5,
							py: 1.3,
							borderRadius: 2,
							"&:hover": { bgcolor: "#33ddff" },
						}}
					>
						Download PDF
					</Button>
					<Button
						variant="outlined"
						startIcon={<OpenInNewIcon />}
						href={resumePdf}
						target="_blank"
						rel="noopener noreferrer"
						sx={{
							color: "#b19cd9",
							borderColor: "#b19cd9",
							textTransform: "none",
							fontSize: "1rem",
							fontWeight: 600,
							px: 3.5,
							py: 1.3,
							borderRadius: 2,
							"&:hover": { borderColor: "#00d4ff", color: "#00d4ff", bgcolor: "rgba(0, 212, 255, 0.08)" },
						}}
					>
						Open in New Tab
					</Button>
				</Stack>

				<Box
					sx={{
						borderRadius: 2,
						overflow: "hidden",
						border: "2px solid rgba(0, 212, 255, 0.3)",
						boxShadow: "0 10px 30px rgba(0, 212, 255, 0.25)",
						bgcolor: "#0a192f",
					}}
				>
					<Box
						component="object"
						data={`${resumePdf}#toolbar=0&navpanes=0`}
						type="application/pdf"
						sx={{ width: "100%", height: { xs: "70vh", md: "85vh" }, display: "block" }}
					>
						<Box sx={{ p: 4, textAlign: "center" }}>
							<Typography sx={{ color: "#c0c0c0", mb: 2 }}>
								Your browser can't display the embedded PDF.
							</Typography>
							<Button
								variant="contained"
								href={resumePdf}
								target="_blank"
								sx={{ bgcolor: "#00d4ff", color: "#0a192f", textTransform: "none", fontWeight: 700 }}
							>
								Open Resume
							</Button>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}

export default Resume;
