import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import { GitHub } from "@mui/icons-material";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://avatars.githubusercontent.com/u/204212002?s=400&u=c8ab6e59136356e391085ba354dc32f49316e308&v=4" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            
            <a href="https://www.linkedin.com/in/anuja-patil-9804b325b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://github.com/TheAnuja" target="_blank" rel="noreferrer"><GitHub/></a>
          </div>
          <h1>Anuja Patil</h1>
          <p>Electronics And Telecommunication Engineer</p>

          <div className="mobile_social_icons">
            
            <a href="https://www.linkedin.com/in/anuja-patil-9804b325b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://github.com/TheAnuja" target="_blank" rel="noreferrer"><GitHub/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;