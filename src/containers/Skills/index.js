import React from 'react';
import SkillCard from '../../components/SkillCard';
import { skillsList } from '../../helpers/helper';
import styles from '../../styles/pages/skills.module.scss';

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>Skills I've experienced</h3>
        </div>
          <ul className={styles.itemlist}>
            {skillsList.map((items, i) => (
              <li key={i} className={styles.item}>
                <SkillCard items={items} />
              </li>
            ))}
          </ul>{' '}
      </div>
    </section>
  );
};

export default Skills;
