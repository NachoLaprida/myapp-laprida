import React from 'react';
import './NavBar.css'
import CartWidget from '../CartWidget';

import logo from './../../images/logo-gamer.jpg'
import { NavLink } from 'react-router-dom';

function NavBar(props) {
    return (
        <div className='navBar'>
            <a href="">
                <img src={logo} className="logo-nav" alt="" />
            </a>

            <ul className='nav'>
                <li><NavLink to='/category/pequenos' className={nav => nav.isActive ? 'nav-active' : ''}>Pequeños</NavLink></li>
                <li><NavLink to='/category/medianos' className={nav => nav.isActive ? 'nav-active' : ''}>Medianos</NavLink></li>
                <li><NavLink to='/category/grandes' className={nav => nav.isActive ? 'nav-active' : ''}>Grandes</NavLink></li>
            </ul>
            <a href="">
                <CartWidget />    
            </a>
            

        </div>
    );
}

export default NavBar;