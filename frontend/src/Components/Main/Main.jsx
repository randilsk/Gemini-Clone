import React from "react";
import "./main.css";
import { assets } from "../../assets/assets";
const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Developer.</span>
          </p>
          <p>How can I assist you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat.</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>How do black holes form, and what happens inside them?</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Make a webdeveloper road map in 2024.</p>
            <img src={assets.code_icon} alt="" />
          </div>
          <div className="card">
            <p>Make a one year travel plan in Europe.</p>
            <img src={assets.compass_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a promt here." />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
            <a href="#"> Your privacy & Gemini Apps</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
