import React from 'react';
import styles from '../../styles/pages/hero.module.scss';
import { ScrollToTop } from '../../hooks/';

const Hero = () => {
  const resumeURL = 'https://drive.google.com/file/d/1OrI4n_oXar1Xy55CPyFGrlusHnDyIBP5/view';
  const profilePhoto = 'https://avatars.githubusercontent.com/u/45832621?v=4';

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h4>
            <span className={styles.heymoji}>👋🏼</span>Hey there! My name is
          </h4>
          <h2>Ogulcan Eristi.</h2>
          <h3>I build beautiful things for the web & mobile!</h3>
          <p>
            I'm a <span>Frontend Developer</span> with 3 years of relevant work experience in building visually appealing and user-friendly interfaces for
            web and mobile applications. Passionate about continuous learning and self-improvement, I’m dedicated to enhancing user
            experiences. I’m enthusiastic about exploring new ideas and technologies.
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
