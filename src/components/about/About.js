import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-img">
        <img
          src="https://img.freepik.com/vector-gratis/ilustracion-plana-soporte-al-cliente_23-2148899114.jpg?w=2000"
          alt=""
        />
      </div>
      <div className="about-content">
        <div className="title">
          <span className="icon">
            <ion-icon name="chatbubbles-outline"></ion-icon>
          </span>
          <span>Thông tin liên hệ:</span>
        </div>
        <div className="detail">
          <Link className="info">
            <ion-icon name="call-outline"></ion-icon>
            <span>1800.1060</span>
          </Link>
          <Link className="info">
            <ion-icon name="call-outline"></ion-icon>
            <span>028.3622.1060</span>
          </Link>
          <Link className="info">
            <ion-icon name="mail-outline"></ion-icon>
            <span>TGDD@gmail.com</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
