import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { navLinks } from '../../helpers/helper';
import styles from '../../styles/pages/nav.module.scss';
import { HiMenuAlt2 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
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
              {show ? <MdClose color="white" /> : <HiMenuAlt2 color="white" />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
