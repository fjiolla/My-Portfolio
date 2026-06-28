import React, { useState } from "react";
import {
	Typography,
	Container,
	Box,
	TextField,
	Button,
	Stack,
	Alert,
	IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const fieldStyles = {
	"& .MuiOutlinedInput-root": {
		color: "#fff",
		"& fieldset": { borderColor: "rgba(0, 212, 255, 0.3)" },
		"&:hover fieldset": { borderColor: "rgba(0, 212, 255, 0.5)" },
		"&.Mui-focused fieldset": { borderColor: "#00d4ff" },
	},
	"& .MuiInputLabel-root": { color: "#8a96a8" },
	"& .MuiInputLabel-root.Mui-focused": { color: "#00d4ff" },
};

function Contact() {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [status, setStatus] = useState({ type: null, msg: "" });
	const [sending, setSending] = useState(false);

	const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

	const handleSubmit = async (e) => {
		e.preventDefault();
		const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

		if (!accessKey) {
			setStatus({
				type: "error",
				msg: "The form isn't configured yet. Email me directly at shah.leena.287@gmail.com.",
			});
			return;
		}

		setSending(true);
		setStatus({ type: null, msg: "" });
		try {
			const res = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: { "Content-Type": "application/json", Accept: "application/json" },
				body: JSON.stringify({
					access_key: accessKey,
					subject: `Portfolio contact from ${form.name}`,
					from_name: "Portfolio Contact Form",
					name: form.name,
					email: form.email,
					message: form.message,
				}),
			});
			const data = await res.json().catch(() => ({}));
			if (res.ok && data.success) {
				setStatus({ type: "success", msg: "Thanks! Your message has been sent." });
				setForm({ name: "", email: "", message: "" });
			} else {
				setStatus({
					type: "error",
					msg: data.message || "Something went wrong. You can also email me directly.",
				});
			}
		} catch {
			setStatus({
				type: "error",
				msg: "Couldn't send right now. Please email me directly at shah.leena.287@gmail.com.",
			});
		} finally {
			setSending(false);
		}
	};

	return (
		<Box sx={{ minHeight: "100vh", py: 10, color: "#fff" }}>
			<Container maxWidth="md">
				<Box sx={{ textAlign: "center", mb: 6 }}>
					<Typography
						variant="h2"
						sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: 700, mb: 2, color: "#00d4ff" }}
					>
						Get In <span style={{ color: "#b19cd9" }}>Touch</span>
					</Typography>
					<Box sx={{ width: 130, height: 4, bgcolor: "#00d4ff", margin: "0 auto", mb: 3 }} />
					<Typography sx={{ color: "#b0bccd", maxWidth: 560, mx: "auto" }}>
						Have an opportunity, an idea, or just want to say hi? Drop me a message.
					</Typography>
				</Box>

				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: { xs: "1fr", md: "5fr 7fr" },
						gap: { xs: 4, md: 6 },
						alignItems: "start",
					}}
				>
					<Stack spacing={3}>
						<Typography variant="h6" sx={{ color: "#b19cd9", fontWeight: 600 }}>
							Let's connect
						</Typography>
						<Stack direction="row" spacing={2} alignItems="center">
							<EmailIcon sx={{ color: "#00d4ff" }} />
							<Box
								component="a"
								href="mailto:shah.leena.287@gmail.com"
								sx={{ color: "#e0e0e0", textDecoration: "none", "&:hover": { color: "#00d4ff" } }}
							>
								shah.leena.287@gmail.com
							</Box>
						</Stack>
						<Stack direction="row" spacing={2} alignItems="center">
							<LocationOnIcon sx={{ color: "#00d4ff" }} />
							<Typography sx={{ color: "#e0e0e0" }}>Ahmedabad / Vadodara, India</Typography>
						</Stack>
						<Stack direction="row" spacing={1.5}>
							<IconButton
								href="https://github.com/fjiolla"
								target="_blank"
								sx={{ color: "#a8a7a7", border: "1px solid rgba(0, 212, 255, 0.2)", "&:hover": { color: "#00d4ff", borderColor: "#00d4ff" } }}
							>
								<GitHubIcon />
							</IconButton>
							<IconButton
								href="https://www.linkedin.com/in/fjiolla/"
								target="_blank"
								sx={{ color: "#a8a7a7", border: "1px solid rgba(0, 212, 255, 0.2)", "&:hover": { color: "#00d4ff", borderColor: "#00d4ff" } }}
							>
								<LinkedInIcon />
							</IconButton>
						</Stack>
					</Stack>

					<Box
						component="form"
						onSubmit={handleSubmit}
						sx={{
							bgcolor: "rgba(20, 25, 45, 0.85)",
							border: "1px solid rgba(0, 212, 255, 0.2)",
							borderRadius: 3,
							p: { xs: 3, md: 4 },
						}}
					>
						<Stack spacing={2.5}>
							{status.type && (
								<Alert
									severity={status.type}
									sx={{ bgcolor: status.type === "success" ? "rgba(74,222,128,0.1)" : "rgba(239,68,68,0.1)", color: "#fff" }}
								>
									{status.msg}
								</Alert>
							)}
							<TextField
								name="name"
								label="Your Name"
								value={form.name}
								onChange={handleChange}
								required
								fullWidth
								sx={fieldStyles}
							/>
							<TextField
								name="email"
								label="Your Email"
								type="email"
								value={form.email}
								onChange={handleChange}
								required
								fullWidth
								sx={fieldStyles}
							/>
							<TextField
								name="message"
								label="Message"
								value={form.message}
								onChange={handleChange}
								required
								fullWidth
								multiline
								rows={4}
								sx={fieldStyles}
							/>
							<Button
								type="submit"
								variant="contained"
								endIcon={<SendIcon />}
								disabled={sending}
								sx={{
									bgcolor: "#00d4ff",
									color: "#0a192f",
									textTransform: "none",
									fontWeight: 700,
									fontSize: "1rem",
									py: 1.3,
									borderRadius: 2,
									"&:hover": { bgcolor: "#33ddff" },
									"&.Mui-disabled": { bgcolor: "rgba(0,212,255,0.4)", color: "#0a192f" },
								}}
							>
								{sending ? "Sending..." : "Send Message"}
							</Button>
						</Stack>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}

export default Contact;
