import React, { Component } from 'react'
import Github from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import '../App.css';

export class Home extends Component {
  render() {
    return (
      <div className="mainContent">
        <h3>PHP and React Native developer</h3>
        <p>
          I've been working as a software engineer at Medserv in Dublin since mid-2018, where I've built numerous internal tools and systems as well as built and maintained a cross-platform React Native mobile app.
            </p>
        <div className="icons">
          <Github
            className="linkIcon"
            title="Github"
            onClick={() => window.open("https://github.com/walshs33", "_blank")
            } />
          <LinkedIn
            className="linkIcon"
            title="LinkedIn"
            onClick={() => window.open("https://www.linkedin.com/in/sam-walsh-528103116/", "_blank")}
          />
          <Instagram
            className="linkIcon"
            title="Instagram"
            onClick={() => window.open("https://www.instagram.com/samwalsh2110/", "_blank")}
          />
        </div>
      </div>
    );
  }
}

export default Home;
