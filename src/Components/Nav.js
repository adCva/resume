import React from 'react';
import { Link } from "react-router-dom";
import {BiRadioCircleMarked} from 'react-icons/bi';

function Nav() {
  return (
    <div className='nav-wrapper'>
      <nav className='nav-container'>

        {/* =============== Logo =============== */}
        <Link to="/" className='logo-container'>
          <BiRadioCircleMarked className='logo-icon'/>
          <h1>Quasar</h1>
        </Link>

        {/* =============== Links =============== */}
        <ul>
          <li>
            <Link to="/" className='nav-link'>Home</Link>
          </li>
          <li>
            <Link to="/" className='nav-link'>Cover Letter</Link>
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