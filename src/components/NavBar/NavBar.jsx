import React from 'react';
import './NavBar.css'
import cart from './../../images/shopping-cart.png'
import logo from './../../images/logo-gamer.jpg'
function NavBar(props) {
    return (
        <div className='navBar'>
            <a href="">
                <img src={logo} className="logo-nav" alt="" />
            </a>

            <ul className='nav'>
                <li><a href=''>Home</a></li>
                <li><a href=''>Categorias</a></li>
                <li><a href=''>Galeria</a></li>
            </ul>
            <a href="">
                <img src={cart} className="cart-image" alt="logo" />    
            </a>
            

        </div>
    );
}

export default NavBar;