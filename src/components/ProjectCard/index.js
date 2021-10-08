import React from 'react';
import styles from '../../styles/components/projectcard.module.scss';
import { RiGithubLine } from 'react-icons/ri';
import { BiGitRepoForked, BiStar } from 'react-icons/bi';
import { BsCircleFill, BsBoxArrowUpRight } from 'react-icons/bs';

const ProjectCard = ({ repos }) => {
  return (
    <>
      <a
        className={styles.repoOverview}
        href={repos?.homepage?.length > 0 ? repos?.homepage : repos?.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>
          {repos?.name}
          <span>
            <BsBoxArrowUpRight />
          </span>
        </h3>
        <p>{repos?.description}</p>
        <div className={styles.repoDetails}>
          <p>
            <BsCircleFill />
            {repos?.language}
          </p>
          <span>
            <BiStar />
            {repos?.stargazers_count}
          </span>
          <span>
            <BiGitRepoForked />
            {repos?.forks_count}
          </span>
        </div>
      </a>
      <a className={styles.accessRepo} href={repos.html_url} target="_blank" rel="noreferrer noopener">
        <span>
          <RiGithubLine />
        </span>
      </a>
    </>
  );
};

export default ProjectCard;
