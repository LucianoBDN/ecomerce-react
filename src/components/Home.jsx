import React from 'react';
import './Home.css';
import img1 from '../assets/img/carrusel-main/1.jpg';
import img2 from '../assets/img/carrusel-main/2.jpg';
import img3 from '../assets/img/carrusel-main/4.jpg';
import img4 from '../assets/img/carrusel-main/5.jpg';
import logo123 from '../assets/img/logo-ecomerce.png';



function Home() {
    return (
            <main>
                <section class="banner">
                    <div class="slider">
                        <ul>
                            <li>
                                <img src= {img1} alt="RELLENAR ALT" loading="lazy"/>
                            </li>
                            <li>
                                <img src={img2} alt="RELLENAR ALT" loading="lazy"/>
                            </li>
                            <li>
                                <img src={img3} alt="RELLENAR ALT" loading="lazy"/>
                            </li>
                            <li>
                                <img src={img4} alt="RELLENAR ALT" loading="lazy"/>
                            </li>
                        </ul>
                    </div>

                    <div class="logo">
                        <img src={logo123} alt="RELLENAR ALT"/>
                    </div>
                </section>







            </main>



    )
}
export default Home