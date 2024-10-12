import React, { useContext } from "react";
import "./main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const Main = () => {
  const {
    onSent,
    recentPromt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
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
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPromt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a promt here."
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
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
