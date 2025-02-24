import { useState } from "react";
import { faHome, faList, faCog, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showSidebar, setShowSideBar] = useState(false);

  const links = [
    { name: "Home", path: "/", icon: faHome },
    { name: "Recipes", path: "/recipes", icon: faList },
    { name: "About", path: "/about", icon: faCog },
    { name: "Contact_Us", path: "/Contact_us", icon: faPhone },
  ];

  function closeSidebar() {
    setShowSideBar(false);
  }

  return (
    <>
      <div className="flex justify-between items-center bg-gray-900 shadow-md h-14 px-6 w-full">
        <Link to={"/"} className="text-2xl font-bold text-pink-600">
          F<span className="text-gray-100">oo</span>diesCorner
        </Link>
        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <a
              href={link.path}
              key={link.name}
              className="text-gray-300 uppercase text-sm tracking-wider hover:text-pink-600 relative"
            >
              {link.name}
              <span className="block absolute bottom-[-5px] left-0 w-full h-[2px] bg-pink-600 transform scale-x-0 transition-all duration-200 ease-in-out group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
        <div
          onClick={() => setShowSideBar(true)}
          className={`md:hidden w-8 h-8 relative flex flex-col justify-between items-center space-y-2`}
        >
          <div className={`w-full h-[6px] bg-gray-300 rounded-sm transition-all duration-300 ${showSidebar ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`w-full h-[6px] bg-gray-300 rounded-sm ${showSidebar ? "opacity-0" : ""}`}></div>
          <div className={`w-full h-[6px] bg-gray-300 rounded-sm transition-all duration-300 ${showSidebar ? "-rotate-45 -translate-y-2" : ""}`}></div>
        </div>
      </div>

      {/* Sidebar Component */}
      {showSidebar && <Sidebar links={links} close={closeSidebar} />}
    </>
  );
}
 