import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Events from "./components/Events";
import Footer from "./components/Footer";
import DrumSet from "./components/drum";
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
						<Route path="/projects" element={<Projects />} />
						<Route path="/resume" element={<Resume />} />
						<Route path="/events" element={<Events />} />
						<Route path="/drum" element={<DrumSet />} />
					</Routes>
				</main>
				<Footer/>
			</Box>
		</Router>
	);
}

export default App;
