import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div
        className="container mb3 about_container"
        style={{ minHeight: "100%" }}
      >
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Meet Devraj Jangid</h2>
            <p
              style={{
                color: "#666",
                letterSpacing: ".5px",
                marginTop: 2,
                lineHeight: 2,
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              architecto similique minus quo possimus perferendis, qui quisquam
              fuga soluta aspernatur cum voluptatem maxime numquam deserunt
              reprehenderit temporibus natus molestias libero.
            </p>
          </div>
          <div className="right_container mt-3">
            <img src="devpro.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
