import {useState} from "react"

import { faHome, faList, faCog} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Sidebar";

export default function Navbar() {
    const [showSidebar, setShowSideBar]= useState(false)
    const links = [
        {
            name: "Home",
            path: "/" ,
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }

    ]
    return (
        <>
        <div className="navbar container">
            <a href="#!" className="logo">F<span>oo</span>diesCorner</a>
            <div className="nav-links">
                {links.map (link => (
                    <a href="#!"key={link.name}>{link.name}</a>
                ))}
    
            </div>
            <div onClick= {()=> setShowSideBar(!showSidebar)}className={showSidebar ? "sidebar-btn active" :"sidebar-btn"}>
             <div className="bar"></div>
             <div className="bar"></div>
             <div className="bar"></div>
            </div>

        </div>
       <Sidebar links={links}/>
        </>


    )
}