import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import mock11 from '../assets/images/mock11.jpg';
import mock12 from '../assets/images/mock12.jpg';
import mock13 from '../assets/images/mock13.jpg';
import mock14 from '../assets/images/mock14.jpg';


import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href={mock14} target="_blank" rel="noreferrer"><img src={mock12} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href={mock14} target="_blank" rel="noreferrer"><h2>GPS tracking system using Arduino nano</h2></a>
                <p> Tracking the location of that device at any time and anywhere by sending sms gsm to mobile phone.</p>
            </div>
            <div className="project">
                <a href={mock13} target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href={mock13} target="_blank" rel="noreferrer"><h2>Wireless Fire fighting robot</h2></a>
                <p>A wireless firefighting robot is a remotely operated device designed to detect and extinguish fires. This project aims to enhance safety and efficiency in fire emergencies by minimizing human risk.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;