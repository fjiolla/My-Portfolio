import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	AppBar,
	Toolbar,
	Button,
	Box,
	Avatar,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/logo.png";

function NavBar() {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const menuItems = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Projects", path: "/projects" },
		{ name: "Events", path: "/events" },
		{ name: "Resume", path: "/resume" },
	];

	return (
		<>
			<AppBar
				position="static"
				elevation={0}
				sx={{
					bgcolor: "transparent",
					py: 1,
				}}
			>
				<Toolbar sx={{ justifyContent: "space-between", px: 3 }}>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Link to="/">
							<Avatar
								src={logo}
								alt="Logo"
								sx={{ width: 100, height: 100, cursor: "pointer" }}
								variant="square"
							/>
						</Link>
					</Box>

					<Box
						sx={{
							display: { xs: "none", md: "flex" },
							gap: 5,
						}}
					>
						{menuItems.map((item) => (
							<Button
								key={item.name}
								component={Link}
								to={item.path}
								sx={{
									color: "#a8a7a7",
									fontSize: "1.3rem",
									fontWeight: 600,
									textTransform: "none",
									textDecoration: "none",
									"&:hover": {
										color: "#007bff",
										bgcolor: "transparent",
									},
								}}
							>
								{item.name}
							</Button>
						))}
					</Box>

					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ display: { md: "none" } }}
					>
						<MenuIcon sx={{ fontSize: "2rem", color: "#a8a7a7" }} />
					</IconButton>
				</Toolbar>
			</AppBar>

			<Drawer
				anchor="right"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				sx={{
					display: { xs: "block", md: "none" },
					"& .MuiDrawer-paper": {
						bgcolor: "#0a192f",
						width: 250,
						pt: 2,
					},
				}}
			>
				<Box sx={{ display: "flex", justifyContent: "flex-end", px: 2 }}>
					<IconButton onClick={handleDrawerToggle}>
						<CloseIcon sx={{ color: "#a8a7a7" }} />
					</IconButton>
				</Box>

				<List>
					{menuItems.map((item) => (
						<ListItem key={item.name} disablePadding>
							<ListItemButton
								component={Link}
								to={item.path}
								onClick={handleDrawerToggle}
								sx={{
									py: 2,
									textDecoration: "none",
									"&:hover": {
										bgcolor: "rgba(0, 123, 255, 0.1)",
									},
								}}
							>
								<ListItemText
									primary={item.name}
									sx={{
										"& .MuiTypography-root": {
											color: "#a8a7a7",
											fontSize: "1.2rem",
											fontWeight: 600,
											"&:hover": {
												color: "#007bff",
											},
										},
									}}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</>
	);
}

export default NavBar;
