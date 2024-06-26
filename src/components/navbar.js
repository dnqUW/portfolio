import "../css/navbar.css";
import {NavLink} from "react-router-dom";
import {FaBars} from "react-icons/fa";
import {useState} from "react";

export default function Navbar() {
    
    const [showMenu, toggleMenu] = useState(false); 
    // showmenu is state variable
    // toggleMenu is state changer

    function handleMenuTap() {
        console.log(showMenu);
        toggleMenu(!showMenu); 
    }
    
    
    return(
        <nav className="navbar">
            
                <ul className= {`navlist ${showMenu ? "displayMenu" : ""}`}>
                    <li><NavLink to="/">Derek Quach</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to ="/projects">Projects</NavLink></li>
                    <li><a href="./assets/Updated_tech_writer_resume (6).pdf" target="_blank" rel="noreferrer">Resume</a></li>
                </ul>
                <div className="bars-container">
                    <FaBars className="bars" onClick= {handleMenuTap} />

                    {/* <FaBars className="bars" onClick= {() => {toggleMenu(!showMenu)} } /> */}
                </div>
                    
             

        </nav>
    );
}
