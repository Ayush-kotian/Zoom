import React from "react";
import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Apna Video Call</h2>
        </div>
        <div className="navList">
          <p>Join</p>
          <p>Register</p>
          <div role="button">
            <p>Login</p>
          </div>
        </div>
      </nav>
      <div className="landingMainContainer">
        <div>
          <h1><span style={{color: "#FF9839"}}>Connect </span>with your <br/> Loved Ones</h1>
          <p>Cover a distance by apna video call</p>
          <div role="button">
            <Link to="/auth">Get Started</Link>
          </div>
        </div>
        <div>
          <img src="/mobile.png"/>
        </div>
      </div>
    </div>
  );
}
