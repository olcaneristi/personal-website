import React from 'react';
import styles from '../../styles/components/skillcard.module.scss';

const SkillCard = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.icon} <span> {items.name} </span>
    </div>
  );
};

export default SkillCard;
