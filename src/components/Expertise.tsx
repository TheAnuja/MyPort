import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython} from '@fortawesome/free-brands-svg-icons'; 
import { faMicrochip, faMemory, faPowerOff } from '@fortawesome/free-solid-svg-icons'; // Import solid icons
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Microcontrollers (MCUs)",
    "Microprocessors (MPUs)",
    "Sensors",
    "Actuators",
    "Communication Modules",
    "Memory",
    "Power Supply",
    "Embedded Linux",
];

const labelsSecond = [
    "Data Security",
    "dentity and Access Management (IAM)",
    "Security Operations",
    "Cloud Security",
    "Application Security (AppSec)",
    "Network Security",
    "Security Architecture",
    "Security Engineering",
    "Security Analysis",
    "Security Testing",
];

const labelsThird = [
    "OpeSemiconductor Devices",
    "GroThyristors (SCRs, GTOs)",
    "Power MOSFETs",
    "Capacitors",
    "Circuit Topologies",
    "Control Techniques",   
    "Simulation and Modeling",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={ faMicrochip } size="3x"/>
                    <h3>Embedded System</h3>
                    <p>a microprocessor-based computer hardware system with software that is designed to perform a dedicated function, either as an independent system or as a part of a large system</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMemory} size="3x"/>
                    <h3>CyberSecurity </h3>
                    <p> CyberSecurity encompasses the practices and technologies used to protect computer systems, networks, and data from unauthorized access, misuse, damage, or disruption, aiming to safeguard digital assets and maintain confidentiality, integrity, and availability</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPowerOff} size="3x"/>
                    <h3>Power Electronics</h3>
                    <p>Power electronics is the application of electronics to control and convert electric power. It deals with the control and flow of electrical energy with high efficiency and high power density.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;