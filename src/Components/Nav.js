import React from 'react';
import { Link } from "react-router-dom";
import {BiRadioCircleMarked} from 'react-icons/bi';

function Nav() {
  return (
    <div className='nav-wrapper'>
      <nav className='nav-container'>

        {/* =============== Logo =============== */}
        <div className='logo-container'>
          <BiRadioCircleMarked />
          <h1>CVC</h1>
        </div>

        {/* =============== Links =============== */}
        <ul>
          <li>
            <Link to="/" className='nav-link'>Home</Link>
          </li>
          <li>
            <Link to="/templates" className='nav-link'>Templates</Link>
          </li>
          <li>
            <Link to="/create" className='nav-link-special'>Create</Link>
          </li>
        </ul>

      </nav>
    </div>
  )
}

export default Nav;