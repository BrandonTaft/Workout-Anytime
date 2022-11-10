import React, { useState } from "react"
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import "./App.css"



function Navbar() {

    const [navbarOpen, setNavbarOpen] = useState(false)

    //change button from off to on at on click
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }


    return (
        <nav className="navBar">
            <button onClick={handleToggle}>
                {navbarOpen ? (
                    <MdClose style={{ color: "#3fffd2", width: "40px", height: "40px" }} />) : (
                    <FiMenu style={{ color: "#3fffd2", width: "40px", height: "40px" }} />
                )}
            </button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <li><NavLink to="/publicfeed" className='noShow' id='a' >Home</NavLink></li>
                <li><NavLink to="/private" className='inactive' id='a' >Profile</NavLink></li>
                <li><NavLink to="/messages" className='inactive' id='a' >Messages</NavLink></li>
                <li><NavLink to="/logout" className='inactive' id="a">Log Out</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar