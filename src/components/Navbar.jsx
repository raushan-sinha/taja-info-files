'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    const navbarTitle = 'Tool Box';
    const navLinks = [
        { url: '/', title: 'Home' },
        { url: '/contact', title: 'Contact' }
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>{navbarTitle}</div>

            {/* Hamburger / Close Icon */}
            <div className={styles.hamburger} onClick={toggleMenu}>
                {menuOpen ? (
                    <span className={styles.closeIcon}>&times;</span>
                ) : (
                    <>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </>
                )}
            </div>

            {/* Nav Links */}
            <ul className={`${styles.navlinks} ${menuOpen ? styles.active : ''}`}>
                {navLinks.map((link, idx) => (
                    <li key={idx}>
                        <Link href={link.url} onClick={() => setMenuOpen(false)}>
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
