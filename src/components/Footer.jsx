import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className='Contactos'>
                <ul className='lista-footer'>
                    <li>Quienes somos</li>
                    <li>Preguntas frecuentes</li>
                    <li>Sucursales</li>
                </ul>
                <ul className='lista2-footer'>
                    <li>Formas de pago</li>
                    <li>Terminos y condiciones</li>
                    <li>Compras online</li>
                </ul>
            </div>
            <div className='final'>
                <div class="icons-redes">
                    <i class="fa-brands fa-facebook"><Link /></i>
                    <i class="fa-brands fa-instagram"><Link /></i>
                    <i class="fa-brands fa-whatsapp"><Link /></i>
                </div>
                
                <div class="copyright">
                    <p>Copyright © 2023 SportStrade</p>
                </div>
            </div>
        </footer>


    )
}

export default Footer
