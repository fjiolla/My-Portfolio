import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

const menuItems = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Experience", path: "/experience" },
	{ name: "Projects", path: "/projects" },
	{ name: "Achievements", path: "/achievements" },
	{ name: "Resume", path: "/resume" },
	{ name: "Contact", path: "/contact" },
];

function NavBar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const { pathname } = useLocation();

	const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

	return (
		<>
			<AppBar position="sticky" elevation={0} sx={{ bgcolor: "rgba(10, 25, 47, 0.85)", backdropFilter: "blur(8px)", py: 0.5 }}>
				<Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 3 } }}>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Link to="/">
							<Avatar
								src={logo}
								alt="Logo"
								sx={{ width: 72, height: 72, cursor: "pointer" }}
								variant="square"
							/>
						</Link>
					</Box>

					<Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
						{menuItems.map((item) => {
							const active = pathname === item.path;
							return (
								<Button
									key={item.name}
									component={Link}
									to={item.path}
									sx={{
										color: active ? "#00d4ff" : "#a8a7a7",
										fontSize: "1.05rem",
										fontWeight: 600,
										textTransform: "none",
										position: "relative",
										"&::after": {
											content: '""',
											position: "absolute",
											bottom: 4,
											left: "50%",
											transform: "translateX(-50%)",
											width: active ? "60%" : 0,
											height: 2,
											bgcolor: "#00d4ff",
											transition: "width 0.25s ease",
										},
										"&:hover": { color: "#00d4ff", bgcolor: "transparent", "&::after": { width: "60%" } },
									}}
								>
									{item.name}
								</Button>
							);
						})}
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
					"& .MuiDrawer-paper": { bgcolor: "#0a192f", width: 250, pt: 2 },
				}}
			>
				<Box sx={{ display: "flex", justifyContent: "flex-end", px: 2 }}>
					<IconButton onClick={handleDrawerToggle}>
						<CloseIcon sx={{ color: "#a8a7a7" }} />
					</IconButton>
				</Box>

				<List>
					{menuItems.map((item) => {
						const active = pathname === item.path;
						return (
							<ListItem key={item.name} disablePadding>
								<ListItemButton
									component={Link}
									to={item.path}
									onClick={handleDrawerToggle}
									sx={{ py: 2, "&:hover": { bgcolor: "rgba(0, 123, 255, 0.1)" } }}
								>
									<ListItemText
										primary={item.name}
										sx={{
											"& .MuiTypography-root": {
												color: active ? "#00d4ff" : "#a8a7a7",
												fontSize: "1.2rem",
												fontWeight: 600,
											},
										}}
									/>
								</ListItemButton>
							</ListItem>
						);
					})}
				</List>
			</Drawer>
		</>
	);
}

export default NavBar;
