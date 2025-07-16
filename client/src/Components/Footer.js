import React from 'react'
import "./Footer.css"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      return (
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Devraj Jangid</h4>
            <p>© {year} Devraj Jangid All rights reserved</p>
            <p className="d-flex">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-snapchat mx-3"></i>
            </p>
          </div>

          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore, adipisci.
            </p>
            <p>jangiddev2023@gmail.com</p>
            <p>+91 9460740800</p>
          </div>

          <div className="third mt-5">
            <h4>About</h4>
            <h4>Resume</h4>
          </div>
        </div>
      </div>
      );
    </>
  );
}

export default Footer
