import React, { useState, useEffect } from 'react';
import styles from '../../styles/components/scroll.module.scss';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = ({ title }) => {
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
        <FiArrowUp />
      </button>
    )
  );
};

export default ScrollToTop;
