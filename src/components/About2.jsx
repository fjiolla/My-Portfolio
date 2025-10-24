import React, { useState, useEffect } from "react";
import {
	TrendingUp,
	Award,
	Target,
	Zap,
	Calendar,
	Trophy,
	Code,
	Users,
} from "lucide-react";

function CodingStats() {
	const [leetcodeData, setLeetcodeData] = useState(null);
	const [codeforcesData, setCodeforcesData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const leetcodeResponse = await fetch(
					"https://leetcode-stats-api.herokuapp.com/fjiolla",
				);
				const leetcodeJson = await leetcodeResponse.json();
				setLeetcodeData(leetcodeJson);

				const codeforcesResponse = await fetch(
					"https://codeforces.com/api/user.info?handles=wed12_",
				);
				const codeforcesJson = await codeforcesResponse.json();
				if (codeforcesJson.status === "OK") {
					setCodeforcesData(codeforcesJson.result[0]);
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center py-16">
				<div className="relative">
					<div className="w-16 h-16 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
					<Code
						className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400"
						size={24}
					/>
				</div>
			</div>
		);
	}

	const leetcodePercentage = leetcodeData
		? ((leetcodeData.totalSolved / leetcodeData.totalQuestions) * 100).toFixed(
				1,
			)
		: 0;
	const acceptanceRate = leetcodeData?.acceptanceRate
		? parseFloat(leetcodeData.acceptanceRate).toFixed(1)
		: 0;

	return (
		<div className="w-full mx-auto">
			{/* Header */}
			<div className="flex items-center mb-11">
				<TrendingUp
					style={{ fontSize: "2rem", color: "#00d4ff", marginRight: "16px" }}
				/>
				<div>
					<h2
						style={{
							fontSize: "2.2rem",
							fontWeight: 600,
							color: "#b19cd9",
							margin: 0,
						}}
					>
						Competitive Programming
					</h2>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{/* LeetCode Card */}
				{leetcodeData && (
					<div
						style={{
							background: "rgba(255, 255, 255, 0.05)",
							backdropFilter: "blur(10px)",
							borderRadius: "16px",
							border: "2px solid rgba(0, 212, 255, 0.2)",
							overflow: "hidden",
							transition: "all 0.3s ease",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.4)";
							e.currentTarget.style.boxShadow =
								"0 8px 32px rgba(0, 212, 255, 0.15)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.2)";
							e.currentTarget.style.boxShadow = "none";
						}}
					>
						{/* Header */}
						<div
							style={{
								background: "rgba(0, 212, 255, 0.08)",
								padding: "24px",
								borderBottom: "1px solid rgba(0, 212, 255, 0.15)",
							}}
						>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<div
										style={{
											padding: "8px",
											background: "rgba(0, 212, 255, 0.15)",
											borderRadius: "8px",
										}}
									>
										<Code style={{ color: "#00d4ff" }} size={24} />
									</div>
									<div>
										<h3
											style={{
												fontSize: "1.5rem",
												fontWeight: 700,
												color: "#f0c92eff",
												margin: 0,
											}}
										>
											LeetCode
										</h3>
										<p
											style={{
												color: "#ffffffff",
												fontSize: "0.9rem",
												fontFamily: "monospace",
												margin: 0,
											}}
										>
											@fjiolla
										</p>
									</div>
								</div>
								<div style={{ textAlign: "right" }}>
									<p
										style={{
											color: "#ffffffff",
											fontSize: "0.75rem",
											margin: 0,
										}}
									>
										Completion
									</p>
									<p
										style={{
											fontSize: "1.5rem",
											fontWeight: "bold",
											color: "#e00000ff",
											margin: 0,
										}}
									>
										{leetcodePercentage}%
									</p>
								</div>
							</div>
						</div>

						{/* Content */}
						<div style={{ padding: "24px" }}>
							{/* Key Stats */}
							<div
								className="grid grid-cols-2 gap-4"
								style={{ marginBottom: "24px" }}
							>
								<div
									style={{
										background: "rgba(0, 212, 255, 0.08)",
										padding: "16px",
										borderRadius: "12px",
										border: "1px solid rgba(0, 212, 255, 0.2)",
									}}
								>
									<div
										className="flex items-center gap-2"
										style={{ marginBottom: "8px" }}
									>
										<Trophy style={{ color: "#00d4ff" }} size={16} />
										<p
											style={{
												color: "#4ade80",
												fontSize: "0.75rem",
												margin: 0,
											}}
										>
											Total Solved
										</p>
									</div>
									<p
										style={{
											fontSize: "2rem",
											fontWeight: "bold",
											color: "#ffffffff",
											margin: 0,
										}}
									>
										{leetcodeData.totalSolved}
									</p>
									<p
										style={{
											color: "#ffffffff",
											fontSize: "0.75rem",
											marginTop: "4px",
										}}
									>
										of {leetcodeData.totalQuestions}
									</p>
								</div>

								<div
									style={{
										background: "rgba(0, 212, 255, 0.08)",
										padding: "16px",
										borderRadius: "12px",
										border: "1px solid rgba(0, 212, 255, 0.2)",
									}}
								>
									<div
										className="flex items-center gap-2"
										style={{ marginBottom: "8px" }}
									>
										<Target style={{ color: "#00d4ff" }} size={16} />
										<p
											style={{
												color: "#4ade80",
												fontSize: "0.75rem",
												margin: 0,
											}}
										>
											Acceptance
										</p>
									</div>
									<p
										style={{
											fontSize: "2rem",
											fontWeight: "bold",
											color: "#fff",
											margin: 0,
										}}
									>
										{acceptanceRate}%
									</p>
									<p
										style={{
											color: "#ffffffff",
											fontSize: "0.75rem",
											marginTop: "4px",
										}}
									>
										Success rate
									</p>
								</div>
							</div>

							{/* Difficulty Breakdown */}
							<div>
								{[
									{
										level: "easy",
										solved: leetcodeData.easySolved,
										total: leetcodeData.totalEasy,
										color: "#4ade80",
										label: "Easy",
									},
									{
										level: "medium",
										solved: leetcodeData.mediumSolved,
										total: leetcodeData.totalMedium,
										color: "#fbbf24",
										label: "Medium",
									},
									{
										level: "hard",
										solved: leetcodeData.hardSolved,
										total: leetcodeData.totalHard,
										color: "#ef4444",
										label: "Hard",
									},
								].map(({ level, solved, total, color, label }) => {
									const percentage = ((solved / total) * 100).toFixed(1);
									return (
										<div key={level} style={{ marginBottom: "16px" }}>
											<div
												className="flex justify-between items-center"
												style={{ marginBottom: "8px" }}
											>
												<span
													style={{
														color,
														fontWeight: 500,
														fontSize: "0.95rem",
													}}
												>
													{label}
												</span>
												<span
													style={{
														color: "#fff",
														fontWeight: 600,
														fontSize: "0.95rem",
													}}
												>
													{solved} / {total}{" "}
													<span style={{ color: "#999" }}>({percentage}%)</span>
												</span>
											</div>
											<div
												style={{
													height: "6px",
													background: "rgba(255, 255, 255, 0.05)",
													borderRadius: "4px",
													overflow: "hidden",
												}}
											>
												<div
													style={{
														height: "100%",
														width: `${percentage}%`,
														background: color,
														transition: "width 1s ease",
														borderRadius: "4px",
													}}
												/>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				)}

				{/* Codeforces Card */}
				{codeforcesData && (
					<div
						style={{
							background: "rgba(255, 255, 255, 0.05)",
							backdropFilter: "blur(10px)",
							borderRadius: "16px",
							border: "2px solid rgba(0, 212, 255, 0.2)",
							overflow: "hidden",
							transition: "all 0.3s ease",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.4)";
							e.currentTarget.style.boxShadow =
								"0 8px 32px rgba(0, 212, 255, 0.15)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.2)";
							e.currentTarget.style.boxShadow = "none";
						}}
					>
						{/* Header */}
						<div
							style={{
								background: "rgba(0, 212, 255, 0.08)",
								padding: "24px",
								borderBottom: "1px solid rgba(0, 212, 255, 0.15)",
							}}
						>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<div
										style={{
											padding: "8px",
											background: "rgba(0, 212, 255, 0.15)",
											borderRadius: "8px",
										}}
									>
										<Code style={{ color: "#00d4ff" }} size={24} />
									</div>
									<div>
										<h3
											style={{
												fontSize: "1.5rem",
												fontWeight: 700,
												color: "#f0c92eff",
												margin: 0,
											}}
										>
											Codeforces
										</h3>
										<p
											style={{
												color: "#ffffffff",
												fontSize: "0.9rem",
												fontFamily: "monospace",
												margin: 0,
											}}
										>
											@wed12_
										</p>
									</div>
								</div>

								<div
									style={{
										padding: "8px 16px",
										borderRadius: "8px",
										fontWeight: "bold",
										fontSize: "0.85rem",
										border: "2px solid rgba(0, 212, 255, 0.3)",
										background: "rgba(0, 212, 255, 0.1)",
										color: "#b7b7b7ff",
										textTransform: "uppercase",
									}}
								>
									{codeforcesData.rank}
								</div>
							</div>
						</div>

						{/* Content */}
						<div style={{ padding: "24px" }}>
							{/* Stats Grid */}
							<div
								className="grid grid-cols-2 gap-4"
								style={{ marginBottom: "24px" }}
							>
								<div
									style={{
										background: "rgba(0, 212, 255, 0.08)",
										padding: "20px",
										borderRadius: "12px",
										border: "1px solid rgba(0, 212, 255, 0.2)",
										textAlign: "center",
									}}
								>
									<div
										className="flex items-center justify-center gap-2"
										style={{ marginBottom: "8px" }}
									>
										<Award style={{ color: "#00d4ff" }} size={18} />
										<p
											style={{
												color: "#ffffffff",
												fontSize: "0.75rem",
												margin: 0,
											}}
										>
											Current Rating
										</p>
									</div>
									<p
										style={{
											fontSize: "1.8rem",
											fontWeight: "bold",
											color: "#fff",
											margin: 0,
										}}
									>
										{codeforcesData.rating}
									</p>
									<p
										style={{
											color: "#ffffffff",
											fontSize: "0.75rem",
											marginTop: "4px",
											textTransform: "uppercase",
										}}
									>
										{codeforcesData.rank}
									</p>
								</div>

								<div
									style={{
										background: "rgba(0, 212, 255, 0.08)",
										padding: "20px",
										borderRadius: "12px",
										border: "1px solid rgba(0, 212, 255, 0.2)",
										textAlign: "center",
									}}
								>
									<div
										className="flex items-center justify-center gap-2"
										style={{ marginBottom: "8px" }}
									>
										<Trophy style={{ color: "#00d4ff" }} size={18} />
										<p
											style={{
												color: "#ffffffff",
												fontSize: "0.75rem",
												margin: 0,
											}}
										>
											Max Rating
										</p>
									</div>
									<p
										style={{
											fontSize: "1.8rem",
											fontWeight: "bold",
											color: "#4ade80",
											margin: 0,
										}}
									>
										{codeforcesData.maxRating}
									</p>
									<p
										style={{
											color: "#ffffffff",
											fontSize: "0.75rem",
											marginTop: "4px",
											textTransform: "capitalize",
										}}
									>
										{codeforcesData.maxRank}
									</p>
								</div>
							</div>

							{/* Additional Info */}
							<div>
								{codeforcesData.friendOfCount > 0 && (
									<div
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
											padding: "16px",
											background: "rgba(0, 212, 255, 0.05)",
											borderRadius: "12px",
											border: "1px solid rgba(0, 212, 255, 0.15)",
											marginBottom: "12px",
										}}
									>
										<div className="flex items-center gap-2">
											<Users style={{ color: "#00d4ff" }} size={16} />
											<p
												style={{
													color: "#e0e0e0",
													fontSize: "0.9rem",
													margin: 0,
												}}
											>
												Friends
											</p>
										</div>
										<p style={{ color: "#fff", fontWeight: 600, margin: 0 }}>
											{codeforcesData.friendOfCount}
										</p>
									</div>
								)}

								{codeforcesData.registrationTimeSeconds && (
									<div
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
											padding: "16px",
											background: "rgba(0, 212, 255, 0.05)",
											borderRadius: "12px",
											border: "1px solid rgba(0, 212, 255, 0.15)",
											marginBottom: "12px",
										}}
									>
										<div className="flex items-center gap-2">
											<Calendar style={{ color: "#00d4ff" }} size={16} />
											<p
												style={{
													color: "#e0e0e0",
													fontSize: "0.9rem",
													margin: 0,
												}}
											>
												Member Since
											</p>
										</div>
										<p style={{ color: "#fff", fontWeight: 600, margin: 0 }}>
											{new Date(
												codeforcesData.registrationTimeSeconds * 1000,
											).getFullYear()}
										</p>
									</div>
								)}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default CodingStats;
