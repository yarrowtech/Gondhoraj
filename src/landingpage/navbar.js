import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
    return ( 
        <nav class="navbar navbar-expand-md navbar-light sticky-top border-bottom ">
        <div class="container p-2">
          
          <NavLink className="navbar-brand" to="/" >
          <b><span style={{color:"purple"}}>G</span>ondhoraj</b>
        </NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex">
            <ul class="navbar-nav  mb-lg-0">
              <li class="nav-item">
                
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
               
                >
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
               
                <NavLink
                  to="/about"
                  className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              
                >
                  About
                </NavLink>
              </li>
              <li class="nav-item">
              
                <NavLink
                  to="/menu"
                  className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                
                >
                 Menu
                </NavLink>
              </li>
              <li class="nav-item">
              
                <NavLink
                  to="/Bookpage"
                  className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                 
                >
                  Book Your Table
                </NavLink>
              </li>
              
            </ul>
            </form>
          </div>
        </div>
      </nav>
    
     );
}

export default Navbar;