'use client';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    //todo: Navbar Links -
    const navbarTitle = 'Tool Box Taja Info';
    const navLinks = [
        { url: '/', title: 'Home' },
        { url: '/contact', title: 'Contact' }
    ];

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>{navbarTitle}</div>
            <ul className={styles.navlinks}>
                {
                    navLinks.map((link, idx) => (
                        <li key={idx}>
                            <Link href={link.url}>{link.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Navbar;


