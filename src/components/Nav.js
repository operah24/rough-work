import React from 'react';
import Button from './Button';
import '../styles/Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="nav">
    <div className="logo-cont">
      <img
        src="https://res.cloudinary.com/ddh4kd4ab/image/upload/v1606728913/Layer_x0020_1_dvw2sz.svg"
        alt="logo"
      />
    </div>
    <ul className="link-cont">
      <li>
        <NavLink to="/login">
          <Button name="Login" className="login-button" />{' '}
        </NavLink>
      </li>
      <li>
        <NavLink to="/register">
          <Button name="Register" className="register-button" />{' '}
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;
