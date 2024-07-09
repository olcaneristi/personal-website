import React from 'react';
import { useQuery } from 'react-query';
import * as api from '../../api';
import ProjectCard from '../../components/ProjectCard/';
import styles from '../../styles/pages/projects.module.scss';
import { RiArrowRightUpLine } from 'react-icons/ri';

const Projects = () => {
  const { data, error, isLoading } = useQuery('repositories', api.getRepos);
  const ownerURL = 'https://github.com/olcaneristi/';
  const sortItems = (a, b) => (a.stargazers_count < b.stargazers_count ? 1 : -1);

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Projects I've built</h2>
          <a href={ownerURL} target="_blank" rel="noopener noreferrer">
            See more
            <span>
              <RiArrowRightUpLine />
            </span>
          </a>
        </div>
        <ul>
          {isLoading && <p> Loading.. </p>}
          {error && <p>Projects couldn't loaded.</p>}
          {data
            ?.filter(
              x =>
                x.id === 508092256 ||
                x.id === 288119806 ||
                x.id === 285895390 ||
                x.id === 291145655 ||
                x.id === 414820976 ||
                x.id === 441765788,
            )
            .sort(sortItems)
            .map(repos => (
                <li>
                  <ProjectCard repos={repos} />
                </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
