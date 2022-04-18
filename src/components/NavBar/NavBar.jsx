import React from 'react';
import './NavBar.css'

function NavBar(props) {
    return (
        <div>
            <ul className='nav'>
                <li><a href=''>Home</a></li>
                <li><a href=''>Categorias</a></li>
                <li><a href=''>Galeria</a></li>
            </ul>
        </div>
    );
}

export default NavBar;