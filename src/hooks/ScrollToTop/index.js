import React, { useState, useEffect } from 'react';
import styles from '../../styles/components/scroll.module.scss';
import UseAnimations from 'react-useanimations';
import arrowUp from 'react-useanimations/lib/arrowUp';

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 800 ? setShowScroll(true) : setShowScroll(false);
    });
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    showScroll && (
      <button className={styles.scrollTop} onClick={scrollTop}>
        <UseAnimations animation={arrowUp} size={24} strokeColor="white" />
      </button>
    )
  );
};

export default ScrollToTop;
