import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/pages/404.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <h1 className={styles.title}>404 Not Found!</h1>
      <p>You can </p>
      <Link to="/">go back</Link>
    </div>
  );
};

export default NotFound;
