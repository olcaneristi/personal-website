import React from 'react';
import styles from '../../styles/pages/hero.module.scss';
import { ScrollToTop } from '../../hooks/';

const Hero = () => {
  const resumeURL = 'https://drive.google.com/file/d/13gmJybdMzfQe7hcYjmjoj0NFHtVkB6gY/view';
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
            I'm a <span>Frontend Developer</span> building pretty UI's for users to have great experiences, 
            trying to improve myself on the web & mobile and enjoys it. I'm known for my calmness but I get 
            very excited about new ideas.
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
