import "../css/navbar.css";
import {NavLink} from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="navbar">
            <div>
                <ul className="navlist">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to ="/projects">Projects</NavLink></li>
                    <li><NavLink to="/resume">Resume</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}
