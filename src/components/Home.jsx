import React from "react";
import "./Home.css";
import myIcon from "../assets/myIcon.svg"

export default function Home() {
  return (
    <section className="home-section">
  <div className="home-content">
    <div className="text-part">
      <h1 className="intro">
        Hey There!{" "}
        <span className="wave" role="img" aria-label="wave">
          👋🏻
        </span>
      </h1>

      <div className="name-line">
        <span className="sub-intro">I'M</span>
        <span className="myname">LEENA SHAH</span>
      </div>

      <span className="role">A Student</span>
    </div>

    <div className="image-part">
      <img src={myIcon} alt="Leena Icon" className="my-icon" />
    </div>
  </div>
</section>

  );
}
