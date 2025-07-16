import React from 'react'
import "./Home.css"
import Button from 'react-bootstrap/Button'
const Home = () => {
  return (
    <div className="container home_container">
      <div className="home_innerdiv">
        <div className="left_div">
          <h2>
            Welcome to <span style={{ color: "#6c63ff" }}>Devraj Jangid</span>
          </h2>
          <p style={{ color: "#666f", letterSpacing: ".5px" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            architecto similique minus quo possimus perferendis, qui quisquam
            fuga soluta aspernatur cum voluptatem maxime numquam deserunt
            reprehenderit temporibus natus molestias libero.
          </p>
          <div className="btn_div mt-4">
            <Button
              variant="danger"
              style={{
                color: "white",
                letterSpacing: "1px",
                border: "none",
                borderRadius: 4,
                background: "#4251f5",
                marginRight: 24,
              }}
            >
              Linkedin
            </Button>
            <Button
              variant="danger"
              style={{
                color: "white",  letterSpacing: "1px",  border: "none",  borderRadius: 4,     background: "#4251f5",
                marginRight: 24    }}      >Projects</Button>
          </div>
        </div>
        <div className="right_div">
          <img src="1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home
