import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpeg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Daniel Jeong</div>
            <div className="brief_description">
              Hobbies: Squash, Stocks, and Violin
            </div>
          </div>
        </div>
      </div>
    );
  }
}
