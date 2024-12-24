import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Header/Assests/omko.png'; // Adjust the path if necessary
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}><Link to="/about">About Us</Link></li>
            <li className={styles.navItem}><Link to="/service">Services</Link></li>
            <li className={styles.navItem}><Link to="/blog">Blog</Link></li>
          </ul>
          <button className={styles.contactButton}>
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
