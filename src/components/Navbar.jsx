import React from "react";
import './Navbar.css';
import { useState } from 'react'
import sportStrade from '../assets/img/logo-ecomerce-nav.png';
import carrito from '../assets/img/carrito-de-compras.png';
import buscar from '../assets/img/busqueda.png';
import hamburger from '../assets/img/menu-hamburguesa.png';



function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [mostrarCampo, setMostrarCampo] = useState(false);

    const toggleCampoBusqueda = () => {
        setMostrarCampo(!mostrarCampo);
    }
    


    return (

        <nav className="Nav_bar">
            <button id="abrir" className={`burguer ${isMenuOpen ? 'active' : ''}`}onClick={toggleMenu}>
                <img src={hamburger} alt="" />
            </button>
            <div className={`nav_visible ${isMenuOpen ? 'container_nav_item' : ''}`}>
                <ul className="nav">
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Ofertas</li>
                    <li>Contacto</li>
                </ul>
            </div>
            <div className="logo">
                <img className="sportstrade" src={sportStrade} alt="..." />
            </div>
            
                <div className="boton-busqueda">
                    <button onClick={toggleCampoBusqueda} className="btn-buscar"><img className="buscar" src={buscar} alt="..." /></button>{mostrarCampo && (
                        <div>
                        <input type="text" placeholder="Buscar" aria-label="Search" />
                        </div>
                    )}
                </div>
            
            <div className="carrito">
                <img className="carrito" src={carrito} alt="" />
            </div>
        </nav>


    )
}

export default Navbar