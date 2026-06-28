import React, { useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function ScrollToTop() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
}

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Box
				sx={{
					minHeight: "100vh",
					bgcolor: "#0a192f",
					margin: 0,
					padding: 0,
				}}
			>
				<NavBar />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/experience" element={<Experience />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/achievements" element={<Achievements />} />
						<Route path="/resume" element={<Resume />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>
				<Footer />
			</Box>
		</Router>
	);
}

export default App;
