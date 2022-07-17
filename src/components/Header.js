import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinkStyle = { activeStyle: { color: '#0a6ecc' } };

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/portfolio" {...navLinkStyle}>
        Portfolio
      </NavLink>
      <NavLink to="/cv" {...navLinkStyle}>
        My CV
      </NavLink>
      <NavLink to="/contact" {...navLinkStyle}>
        Contact me
      </NavLink>
    </div>
  );
};

export default Header;
