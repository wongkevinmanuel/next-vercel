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
    //Esta escrito en typescript or javascript puro ???
    <nav className={styles.menu_navbar}>
      {
        menuItems.map( ({text, href}) => (
          <ActiveLink  key={href} texto={text} href={href}  />
        ))
      }
    </nav>
  )
}
/* all syntaxis typescript
export const NavBar = () => {

  return (
    <nav className={styles.menu_navbar}>
        <ActiveLink texto={menuItems[0].text} href={menuItems[0].href}  />
        <ActiveLink texto={menuItems[1].text} href={menuItems[1].href} />
        <ActiveLink texto={menuItems[2].text} href={menuItems[2].href} />
        <ActiveLink texto={menuItems[3].text} href={menuItems[3].href} />
    </nav>
  )
}
*/