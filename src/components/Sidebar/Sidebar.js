import React from 'react';
import { Link } from 'react-router-dom';

// React icons
import { ImHome } from 'react-icons/im';
import { FaAward, FaPalette } from 'react-icons/fa';
import { MdDevices } from 'react-icons/md';
 
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h4>Pages</h4>
      <ul className='nav'>
        <Link to="/" className='nav_links'>
          <div className='d-flex align-items-center'>
              <ImHome className='nav_icons' />
              <h5 className='nav_title'>Home</h5>
          </div>
        </Link>
        <Link to="/populor" className='nav_links'>
          <div className='d-flex align-items-center' >
              <FaAward className='nav_icons' />
              <h5 className='nav_title'>Populor</h5>
          </div>
        </Link>
        <Link to="/genres" className='nav_links'>
          <div className='d-flex align-items-center'>
              <FaPalette className='nav_icons' />
              <h5 className='nav_title'>Genres</h5>
          </div>
        </Link>
        <Link to="/platforms" className='nav_links'>
          <div className='d-flex align-items-center' >
              <MdDevices className='nav_icons' />
              <h5 className='nav_title'>Plattforms</h5>
          </div>
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar