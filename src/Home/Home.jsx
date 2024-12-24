import React from 'react';
import { Carousel } from 'antd';
import './Home.css'; // For custom styles
import img1 from './Images/Carousel 1.png';
import img2 from './Images/Carousel 2.png';
import img3 from './Images/Carousel 3.png';
import img4 from './Images/Frame 28.svg'
import img5 from './Images/Frame 31.svg'
import app from './Images/App Development.svg'
import web from './Images/Web Development.svg'
import img6 from './Pngimages/heroicons_user-group-16-solid.svg'
import img7 from './Pngimages/fe_prototype.svg'
import img8 from './Pngimages/fluent-mdl2_product-variant.svg'
import img9 from './Pngimages/game-icons_journey.svg'
import famobile from './Pngimages/fa_mobile.svg'
import material from './Pngimages/Frame 34.svg'
import tdesign from './Pngimages/tdesign_secured-filled.svg'
import pepicons from './Pngimages/pepicons-pop_code.svg'
import web1 from './Pngimages/ic_round-laptop.svg'
import web2 from './Pngimages/mdi_responsive.svg'
import web3 from './Pngimages/Frame 33.svg'
import web4 from  './Pngimages/ri_seo-fill.svg'
const Home = () => {
    return (
        <div>
         
         <section>
    <div class="carousel-container">
        <div class="carousel-wrapper">
            <Carousel
                autoplay
                autoplaySpeed={3000}
                className="custom-carousel"
                dots={{ className: 'custom-dots' }}
                dotPosition="bottom"
                infinite={true}
            >
                <div className="carousel-item">
                    <img src={img1} alt="Browse Template" className="carousel-image" />
                </div>
                <div className="carousel-item">
                    <img src={img2} alt="Upload Document" className="carousel-image" />
                </div>
                <div className="carousel-item">
                    <img src={img3} alt="Create" className="carousel-image" />
                </div>
            </Carousel>
        </div>
    </div>
</section>
            <section className='client'>
                <div className='delivery'>
                    <h2>Our Delivery Process</h2>
                </div>
                <div className='frame'>
                    <img src={img4} alt='frame'/>
                </div>
            </section>
            <section className='design'>
                <div className='services'>
                    <h2>Our Services</h2>
                </div>
                <div className='Ui'>
                    <h2>UI UX Design</h2>
                </div>
                <div className="uiux-section">
    <div className="uiux-left">
        <img className="uiux-image" src={img5} alt="UI UX Design" />
    </div>
    <div className="uiux-right">
        <ul className="uiux-list">
            <li className="uiux-item">
                <div className="uiux-icon">
                    <img src={img6} alt="uxx" />
                </div>
                <span className="uiux-text">
                    We craft intuitive and visually engaging interfaces by putting your users’ needs and behaviors at the forefront.
                </span>
            </li>
            <li className="uiux-item">
                <div className="uiux-icon">
                    <img src={img9} alt="uxx" />
                </div>
                <span className="uiux-text">
                    Our designs ensure smooth navigation and interaction, delivering a delightful and friction-free experience across all devices.
                </span>
            </li>
            <li className="uiux-item">
                <div className="uiux-icon">
                    <img src={img7} alt="uxx" />
                </div>
                <span className="uiux-text">
                    We provide clear wireframes and interactive prototypes to visualize the structure and functionality before development.
                </span>
            </li>
            <li className="uiux-item">
                <div className="uiux-icon">
                    <img src={img8} alt="uxx" />
                </div>
                <span className="uiux-text">
                    Every design element is tailored to reflect your brand identity, ensuring a cohesive and professional digital presence.
                </span>
            </li>
        </ul>
    </div>
</div>
<div className='appdevelopment'>
                    <h2>App Development</h2>
                </div>
        <div className='app-section'>
        <div className="app-left">
        <ul className="app-list">
            <li className="app-item">
                <div className="app-icon">
                    <img src={famobile} alt="app" />
                </div>
                <span className="app-text">
                We create tailored mobile applications designed to meet your business needs and deliver exceptional user experiences.
                   </span>
            </li>
            <li className="app-item">
                <div className="app-icon">
                    <img src={material} alt="app" />
                </div>
                <span className="uiux-text">
                Our apps are built to perform seamlessly across Android and iOS, ensuring a wide reach for your audience.
                          </span>
            </li>
            <li className="app-item">
                <div className="app-icon">
                    <img src={tdesign} alt="app" />
                </div>
                <span className="app-text">
                We prioritize scalability and security to ensure your app grows with your business while safeguarding user data.
                       </span>
            </li>
            <li className="app-item">
                <div className="app-icon">
                    <img src={pepicons} alt="app" />
                </div>
                <span className="app-text">
                Every design element is tailored to reflect your brand identity, ensuring a cohesive and professional digital presence.
                          </span>
            </li>
        </ul>
        </div>
        <div className="app-right">
        <img className="app-image" src={app} alt="App Design" />
    </div>
        </div>
        <div className='web'>
            <h2>Web Development</h2>
        </div>
        <div className="web-section">
    <div className="web-left">
        <img className="web-image" src={web} alt="web Design" />
    </div>
    <div className="web-right">
        <ul className="web-list">
            <li className="web-item">
                <div className="web-icon">
                    <img src={web1} alt="web" />
                </div>
                <span className="web-text">
                We design and develop websites tailored to your unique business goals and audience.
                </span>
            </li>
            <li className="web-item">
                <div className="web-icon">
                    <img src={web2} alt="web" />
                </div>
                <span className="web-text">
                Our websites adapt seamlessly across all devices, delivering an optimal user experience on desktop, tablet, and mobile.
                </span>
            </li>
            <li className="web-item">
                <div className="web-icon">
                    <img src={web3} alt="web"/>
                </div>
                <span className="web-text">
                We prioritize speed, scalability, and functionality to ensure your website performs at its best.
                </span>
            </li>
            <li className="web-item">
                <div className="web-icon">
                    <img src={web4} alt="web" />
                </div>
                <span className="web-text">
                Our websites are built with clean code and SEO best practices, helping you rank higher and reach your target audience.
                </span>
            </li>
        </ul>
    </div>
</div>
            </section>
            <section className='project'>
                <div className='ourprojects'>
                    <h2>Our Projects</h2>
                </div>
            </section>
        </div>
    );
};

export default Home;
