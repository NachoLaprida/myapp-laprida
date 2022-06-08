import React from 'react'
import { Link } from 'react-router-dom'

import './footer.css'

const Footer = () => {
    return (
        <div className='footer container-fluid'>
                <div className='row d-flex'>
                    <div className='develope col-lg-4 col-md-6 col-sm-12 p-2'>
                        <h2 className='colores'>Mi Primer Tienda</h2>
                        <p className='colores'>All Rights Reserved by &copy; Mi Primer Tienda 2022.</p>
                    </div>
                    <div className='explorer col-lg-4 col-md-6 col-sm-12 p-2'>
                        <h2 className='colores'>Explorador</h2>
                        <ul className='box'>
                            <li><Link to='/'>Inicio</Link></li>

                        </ul>
                    </div>
                    
                    <div className='legal col-lg-4 col-md-6 col-sm-12 p-2'>
                        <h2 className='colores'>Legal</h2>
                        <ul className='box'>
                            <li><Link to='/'>Política de privacidad</Link></li>
                            <li><Link to='/'>Términos de Uso</Link></li>
                        </ul>
                    </div>


                </div>
            </div>
    )
}

export default Footer