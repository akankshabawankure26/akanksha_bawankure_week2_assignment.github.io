import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css'

function NavBar() {
  return (
    <div>

      <ul className="nav justify-content-center">
        <li className='nav-item'> <NavLink className="nav-link" to="/"> Home </NavLink> </li>
        <li className='nav-item'> <NavLink className="nav-link" to="/addentity"> Add Entity </NavLink> </li>
        <li className='nav-item'> <NavLink className="nav-link" to="/viewentity"> View Entity </NavLink> </li>
      </ul>
      
    </div>
  )
}

export default NavBar;