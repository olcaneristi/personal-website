import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { navLinks } from '../../helpers/helper';
import styles from '../../styles/pages/nav.module.scss';
import UseAnimations from 'react-useanimations';
import menu4 from 'react-useanimations/lib/menu4';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(prev => !prev);
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.list}>
          <div className={styles.elements}>
            <ol className={`${styles.items} ${show ? `${styles.items__show}` : ''}`}>
              {navLinks.map((nav, i) => (
                <li key={i}>
                  <Link to={nav.url} spy={true} offset={-50} smooth={true} duration={300}>
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ol>
            <button onClick={handleClick} className={styles.menu}>
              <UseAnimations animation={menu4} size={32} strokeColor="white" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
