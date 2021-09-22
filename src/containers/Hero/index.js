import React from 'react';
import styles from '../../styles/pages/hero.module.scss';
import { ScrollToTop } from '../../hooks/';

const Hero = () => {
  const resumeURL = 'https://drive.google.com/file/d/1EMxlkNIdzBlNldYBL1AcfmN_5RnJx8oW/view';
  const profilePhoto = 'https://avatars.githubusercontent.com/u/45832621?v=4';

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h4>
            <span className={styles.heymoji}>👋🏼</span>Hey there! My name is
          </h4>
          <h2>Ogulcan Eristi.</h2>
          <h3>I build beautiful things for the web!</h3>
          <p>
            I'm a freshly graduated <span>Frontend Developer</span> who builds interfaces for users to have great
            experiences, trying to improve himself on the web and enjoys it.
          </p>
          <button className={`${styles.btn} ${styles.btn__cta}`}>
            <a href={resumeURL} target="_blank" rel="noopener noreferrer">
              Check out my resume!
            </a>
          </button>
        </div>
        <div className={styles.image}>
          <img src={profilePhoto} alt="profilephoto" />
        </div>

        <ScrollToTop />
      </div>
    </section>
  );
};

export default Hero;
