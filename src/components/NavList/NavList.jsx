import React from 'react';
import './NavList.css';

const NavList = ({ href, icon, title }) => {
  return (
    <>
      <div className='NavList'>
        <img className='icon' src={icon} alt={title} />
        <div className='title'>{title}</div>
      </div>
    </>
  );
};

export default NavList;
