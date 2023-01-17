import React from 'react'
import styles from './Navbar.module.css';
import { ActiveLink } from './ActiveLink';

const menuItems : {  text: string, href: string}[] = [ 
  { text: 'Home' , href: '/'},
  { text: 'About', href: '/about'},
  { text: 'Contact', href: '/contact'},
  { text: 'Pricing', href: '/pricing'}
];
export const NavBar = () => {

  return (
    <nav className={styles.menu_navbar}>
      {
        menuItems.map( ({text, href}) => (
          <ActiveLink  key={href} texto={text} href={href}  />
        ))
      }
    </nav>
  )
}