import React from 'react';
import SocialMedia from '../../components/SocialMedia';
import { socialMedia } from '../../helpers/helper';
import styles from '../../styles/pages/footer.module.scss';
import { FiArrowDown } from 'react-icons/fi';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.notify}>
          Don't forget to follow me
          <span>
            <FiArrowDown />
          </span>
        </p>
        <ul>
          {socialMedia.map((follows, i) => (
            <li key={i}>
              <SocialMedia follows={follows} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
