import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CiSearch, CiBookmark } from "react-icons/ci";
import { NavLink } from "react-router-dom";

function Menu() {
 return (
  <nav className="px-2">
   <ul className="flex flex-col">
    <li>
     <NavLink
      activeClassName="bg-active text-white"
      exact to="/"
      className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
     >
      <span>
       <AiOutlineHome size={24} />
      </span>
      Home
     </NavLink>
    </li>
    <li>
     <NavLink
     activeClassName="bg-active text-white"
      to="/search"
      className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4 "
     >
      <span>
       <CiSearch size={24} />
      </span>
      Search
     </NavLink>
    </li>
    <li>
     <NavLink
     activeClassName="bg-active text-white"
      to="/collection"
      className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4 "
     >
      <span>
       <CiBookmark size={24} />
      </span>
      My Playlists
     </NavLink>
    </li>
   </ul>
  </nav>
 );
}

export default Menu;
