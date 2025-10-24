import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import "./index.css";

function App() {
	return (
		<Router>
			<Box
				sx={{
					minHeight: "100vh",
					bgcolor: "#0a192f",
					margin: 0,
					padding: 0,
					overflow: "hidden",
				}}
			>
				<NavBar />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</main>
			</Box>
		</Router>
	);
}

export default App;
