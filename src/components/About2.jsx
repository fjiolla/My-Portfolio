import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { TrendingUp, Code2, Trophy, ExternalLink } from "lucide-react";

// Resume-accurate fallbacks so the section always renders, even if the
// live APIs are unreachable.
const LEETCODE = { handle: "fjiolla", rating: 1753, profile: "https://leetcode.com/u/fjiolla/" };
const CODEFORCES = {
	handle: "wed12_",
	rank: "Pupil",
	rating: 1138,
	maxRating: 1138,
	profile: "https://codeforces.com/profile/wed12_",
};

const Card = ({ children, accent }) => (
	<Box
		sx={{
			bgcolor: "rgba(20, 25, 45, 0.85)",
			border: `1px solid ${accent}33`,
			borderRadius: 3,
			overflow: "hidden",
			transition: "all 0.3s ease",
			"&:hover": { borderColor: `${accent}88`, boxShadow: `0 12px 32px ${accent}22`, transform: "translateY(-4px)" },
		}}
	>
		{children}
	</Box>
);

const StatTile = ({ label, value, sub, accent }) => (
	<Box
		sx={{
			flex: 1,
			bgcolor: "rgba(255,255,255,0.03)",
			border: "1px solid rgba(255,255,255,0.06)",
			borderRadius: 2,
			p: 2,
			textAlign: "center",
		}}
	>
		<Typography sx={{ fontSize: "0.72rem", color: "#8a96a8", textTransform: "uppercase", letterSpacing: 0.5, mb: 0.5 }}>
			{label}
		</Typography>
		<Typography sx={{ fontSize: "1.7rem", fontWeight: 700, color: accent, lineHeight: 1.1 }}>{value}</Typography>
		{sub && <Typography sx={{ fontSize: "0.72rem", color: "#8a96a8", mt: 0.5 }}>{sub}</Typography>}
	</Box>
);

function CodingStats() {
	const [cf, setCf] = useState(CODEFORCES);

	useEffect(() => {
		let cancelled = false;
		fetch(`https://codeforces.com/api/user.info?handles=${CODEFORCES.handle}`)
			.then((r) => r.json())
			.then((j) => {
				if (!cancelled && j.status === "OK" && j.result?.[0]) {
					const u = j.result[0];
					setCf((prev) => ({
						...prev,
						rank: u.rank ? u.rank.replace(/\b\w/g, (c) => c.toUpperCase()) : prev.rank,
						rating: u.rating ?? prev.rating,
						maxRating: u.maxRating ?? prev.maxRating,
					}));
				}
			})
			.catch(() => {});
		return () => {
			cancelled = true;
		};
	}, []);

	return (
		<Box>
			<Box sx={{ display: "flex", alignItems: "center", mb: 4, justifyContent: { xs: "center", md: "flex-start" } }}>
				<TrendingUp style={{ color: "#00d4ff" }} size={30} />
				<Typography variant="h4" sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" }, fontWeight: 600, color: "#b19cd9", ml: 2 }}>
					Competitive Programming
				</Typography>
			</Box>

			<Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" }, gap: 3 }}>
				{/* LeetCode */}
				<Card accent="#FFA116">
					<Box sx={{ p: 3, bgcolor: "rgba(255,161,22,0.08)", borderBottom: "1px solid rgba(255,161,22,0.18)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
						<Stack direction="row" spacing={1.5} alignItems="center">
							<Box sx={{ p: 1, bgcolor: "rgba(255,161,22,0.15)", borderRadius: 2, display: "flex" }}>
								<Code2 style={{ color: "#FFA116" }} size={24} />
							</Box>
							<Box>
								<Typography sx={{ fontSize: "1.35rem", fontWeight: 700, color: "#FFA116" }}>LeetCode</Typography>
								<Typography sx={{ fontSize: "0.85rem", color: "#b0bccd", fontFamily: "monospace" }}>@{LEETCODE.handle}</Typography>
							</Box>
						</Stack>
						<Trophy style={{ color: "#FFA116" }} size={26} />
					</Box>
					<Box sx={{ p: 3 }}>
						<Stack direction="row" spacing={2} sx={{ mb: 2.5 }}>
							<StatTile label="Contest Rating" value={LEETCODE.rating} sub="Knight tier" accent="#FFA116" />
							<StatTile label="Activity" value="Regular" sub="Weekly contests" accent="#FFA116" />
						</Stack>
						<Button
							fullWidth
							variant="outlined"
							endIcon={<ExternalLink size={16} />}
							href={LEETCODE.profile}
							target="_blank"
							sx={{ color: "#FFA116", borderColor: "rgba(255,161,22,0.4)", textTransform: "none", fontWeight: 600, "&:hover": { borderColor: "#FFA116", bgcolor: "rgba(255,161,22,0.08)" } }}
						>
							View Profile
						</Button>
					</Box>
				</Card>

				{/* Codeforces */}
				<Card accent="#1f8acb">
					<Box sx={{ p: 3, bgcolor: "rgba(31,138,203,0.08)", borderBottom: "1px solid rgba(31,138,203,0.18)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
						<Stack direction="row" spacing={1.5} alignItems="center">
							<Box sx={{ p: 1, bgcolor: "rgba(31,138,203,0.15)", borderRadius: 2, display: "flex" }}>
								<Code2 style={{ color: "#1f8acb" }} size={24} />
							</Box>
							<Box>
								<Typography sx={{ fontSize: "1.35rem", fontWeight: 700, color: "#5abef0" }}>Codeforces</Typography>
								<Typography sx={{ fontSize: "0.85rem", color: "#b0bccd", fontFamily: "monospace" }}>@{cf.handle}</Typography>
							</Box>
						</Stack>
						<Box sx={{ px: 1.5, py: 0.5, borderRadius: 2, border: "1px solid rgba(31,138,203,0.4)", bgcolor: "rgba(31,138,203,0.12)" }}>
							<Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#5abef0", textTransform: "uppercase" }}>{cf.rank}</Typography>
						</Box>
					</Box>
					<Box sx={{ p: 3 }}>
						<Stack direction="row" spacing={2} sx={{ mb: 2.5 }}>
							<StatTile label="Current Rating" value={cf.rating} sub={cf.rank} accent="#5abef0" />
							<StatTile label="Max Rating" value={cf.maxRating} sub="Peak" accent="#4ade80" />
						</Stack>
						<Button
							fullWidth
							variant="outlined"
							endIcon={<ExternalLink size={16} />}
							href={cf.profile}
							target="_blank"
							sx={{ color: "#5abef0", borderColor: "rgba(31,138,203,0.4)", textTransform: "none", fontWeight: 600, "&:hover": { borderColor: "#5abef0", bgcolor: "rgba(31,138,203,0.08)" } }}
						>
							View Profile
						</Button>
					</Box>
				</Card>
			</Box>
		</Box>
	);
}

export default CodingStats;
