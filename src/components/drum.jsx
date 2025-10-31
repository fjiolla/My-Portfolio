import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import bass from "../assets/sound/bass.wav";
import snare from "../assets/sound/snare.wav";
import hiHat from "../assets/sound/hi_hat.wav";
import crash from "../assets/sound/crash.wav";
import ride from "../assets/sound/ride.wav";
import tom1 from "../assets/sound/tom1.wav";
import tom2 from "../assets/sound/tom2.wav";
import floor from "../assets/sound/floor.wav";

export default function DrumSetTopView() {
  const [pressedButtons, setPressedButtons] = useState([]);

  const sounds = {
    "Bass Drum": bass,
    Snare: snare,
    "Hi-Hat": hiHat,
    "Crash Cymbal": crash,
    "Ride Cymbal": ride,
    "High Tom": tom1,
    "Mid Tom": tom2,
    "Floor Tom": floor,
  };

  const playSound = (drum) => {
    const audio = new Audio(sounds[drum]);
    audio.play().catch(error => console.error("Error playing sound:", error));

    const newPressed = [...pressedButtons, drum];
    console.log("All pressed buttons:", newPressed);
    setPressedButtons(newPressed);
  };

  const drumStyle = {
    borderRadius: "50%",
    width: "6rem",
    height: "6rem",
    fontSize: "12px",
    color: "#fff",
    bgcolor: "#968306ff",
      
  };

  const style = {
    display: "flex",
    gap: 3,
    alignItems: "center",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        p: 4,
        bgcolor: "#1a1a1a",
        minHeight: "100%",
        width: "100%",
      }}
    >
      <Typography variant="h4" sx={{ color: "#fff", mb: 2 }}>Drum Set</Typography>

      <Box sx={style}>
        {/* Crash Cymbal */}
        <Button onClick={() => playSound("Crash Cymbal")} sx={drumStyle}>CRASH</Button>

        {/* Hi-Hat */}
        <Button onClick={() => playSound("Hi-Hat")} sx={drumStyle}>HI-HAT</Button>
      </Box>

      <Box sx={style}>
        {/* High Tom */}
        <Button onClick={() => playSound("High Tom")} sx={drumStyle}>TOM 1</Button>

        {/* Snare Drum */}
        <Button onClick={() => playSound("Snare")} sx={drumStyle}>SNARE</Button>

        {/* Mid Tom */}
        <Button onClick={() => playSound("Mid Tom")} sx={drumStyle}>TOM 2</Button>
        </Box>

      <Box sx={style}>
        {/* Floor Tom */}
        <Button onClick={() => playSound("Floor Tom")} sx={drumStyle}>FLOOR TOM</Button>

        {/* Ride Cymbal */}
        <Button onClick={() => playSound("Ride Cymbal")} sx={drumStyle}>RIDE</Button>
      </Box>

      {/* Bass Drum (Kick) */}
      <Button onClick={() => playSound("Bass Drum")} sx={drumStyle}>BASS DRUM</Button>

      {pressedButtons.length > 0 && (
        <Box sx={{ color: "#4CAF50", fontSize: "1.25rem", textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 1 }}>Pressed buttons: {pressedButtons.join(" → ")}</Typography>
        </Box>
      )}
    </Box>
  );
}
