import React from 'react';
import './Main.css';
import img1 from '../assets/img/carrusel-main/1.jpg';
import img2 from '../assets/img/carrusel-main/2.jpg';
import img3 from '../assets/img/carrusel-main/4.jpg';
import img4 from '../assets/img/carrusel-main/5.jpg';
import logo123 from '../assets/img/logo-ecomerce.png';
import Airforceone from '../assets/img/cards-main/AIR.png';
import pigeot from '../assets/img/cards-main/pigeot.png';
import pink from '../assets/img/cards-main/pink.png';
import campus from '../assets/img/cards-main/campus.png';
import uproot from '../assets/img/cards-main/uproot.png';
import firered from '../assets/img/cards-main/fire-red.png';
import forum from '../assets/img/cards-main/forum-84.png';
import marina from '../assets/img/cards-main/marina-blue.png';
import adidas from '../assets/img/logos-de-marcas/adidas2.png';
import jordan from '../assets/img/logos-de-marcas/Jordan2.png';
import nike from '../assets/img/logos-de-marcas/nike2.png';

function Main() {
    return (
        <main>
            <section class="banner">
                <div class="slider">
                    <ul>
                        <li>
                            <img src={img1} alt="RELLENAR ALT" loading="lazy" />
                        </li>
                        <li>
                            <img src={img2} alt="RELLENAR ALT" loading="lazy" />
                        </li>
                        <li>
                            <img src={img3} alt="RELLENAR ALT" loading="lazy" />
                        </li>
                        <li>
                            <img src={img4} alt="RELLENAR ALT" loading="lazy" />
                        </li>
                    </ul>
                </div>

                <div class="logo_banner">
                    <img src={logo123} alt="RELLENAR ALT" />
                </div>
            </section>

            <br />

            <div class="novedades">
                <h1>NOVEDADES</h1>
            </div>

            <div class="cards-container">
                <div class="cards-item">
                    <img src={Airforceone} alt="Modelo Air Force 1" />
                    <div class="overlay-card">
                        <p class="descripcion">Nike Air Force 1 Low SP Slam Jam White</p>
                    </div>
                </div>

                <div class="cards-item">
                    <img src={pigeot} alt="Modelo Dunk Low" />
                    <div class="overlay-card">
                        <p class="descripcion">Nike SB Dunk Low Black Pigeon</p>
                    </div>
                </div>
                <div class="cards-item">
                    <img src={pink} alt="Modelo Dunk Low" />
                    <div class="overlay-card">
                        <p class="descripcion">Nike Dunk Low Rose Whisper</p>
                    </div>
                </div>


                <div class="cards-item">
                    <img src={campus} alt="Modelo Campus" />
                    <div class="overlay-card">
                        <p class="descripcion">Adidas Campus 00S</p>
                    </div>
                </div>

                <div class="cards-item">
                    <img src={uproot} alt="Modelo Uptroot" />
                    <div class="overlay-card">
                        <p class="descripcion">Fila Uproot Black</p>
                    </div>
                </div>

                <div class="cards-item">
                    <img src={firered} alt="Modelo Jordan 3 Tro" />
                    <div class="overlay-card">
                        <p class="descripcion">Jordan 3 Retro Fire Red </p>
                    </div>
                </div>

                <div class="cards-item">

                    <img src={forum} alt="publicidad mujer nike air force one" />
                    <div class="overlay-card">
                        <p class="descripcion">Adidas Forum 84 Low x Midwest </p>
                    </div>
                </div>

                <div class="cards-item">
                    <img src={marina} alt="publicidad air jordan higth" />
                    <div class="overlay-card">
                        <p class="descripcion">Air Jordan 1 Low Marina Blue</p>
                    </div>
                </div>
            </div>
            
            <h3 class="c-marcas">NAVEGA POR MARCAS</h3>

            <div class="img-marcas">
                <img src={adidas} alt="adidas" />
                <img src={jordan} alt="jordan" />
                <img src={nike} alt="nike" />
            </div>



        </main >



    )
}
export default Main