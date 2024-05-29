import React from "react";
import { links } from "../utils/constants";
import { Link } from "react-router-dom";

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <nav className={`sidebar ${showSidebar ? "show" : ""}`}>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.url}
              onClick={toggleSidebar}
              className='flex justify-center mt-4 hover:text-yellow-500 '>
              {link.text}
            </Link>
          </li>
        ))}
        <li></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
