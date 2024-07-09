import React, { useRef, useState } from 'react';
import styles from '../../styles/pages/contact.module.scss';
import { useDetectOutsideClick } from '../../hooks';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Mailto } from '../../hooks';
import { RiArrowRightUpLine } from 'react-icons/ri';

const Contact = () => {
  const dropdownRef = useRef(null);
  const [isActive, setActive] = useDetectOutsideClick(dropdownRef, false);
  const [value, setValue] = useState('ogulcaneristi123@gmail.com');
  const [copied, setCopied] = useState(false);

  const clickHandler = () => setActive(!isActive);

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2>Get In Touch</h2>
          <p>
            I’m not currently looking for any new opportunities. My inbox is always open for you!
            Whether you have a question or just want to say hi, I'll be happy to help and talk!
          </p>
          <button onClick={clickHandler} className={`${styles.btn} ${styles.btn__cta}`}>
            Say Hello! <span>🤟</span>
          </button>
        <nav ref={dropdownRef} className={`${styles.menu} ${isActive ? `${styles.menu__active}` : ''}`}>
          <ul>
            <li>
              <input type="text" value={value} disabled />
              <CopyToClipboard options={{ message: '' }} text={value} onCopy={() => setCopied(true)}>
                <button className={`${styles.btn} ${styles.btn__mail}`}>{copied ? 'Copied' : 'Copy'}</button>
              </CopyToClipboard>
            </li>
            <li>
              <button className={`${styles.btn} ${styles.btn__dark}`}>
                <Mailto email="ogulcaneristi123@gmail.com" subject="Hey there!">
                  Open in Email Client
                  <span>
                    <RiArrowRightUpLine />
                  </span>
                </Mailto>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Contact;
