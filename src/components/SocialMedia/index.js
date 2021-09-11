import React from 'react';

const SocialMedia = ({ follows }) => {
  return (
    <>
      <a href={follows.url} target="_blank" rel="noopener noreferrer">
        <span>{follows.icon}</span>
      </a>
    </>
  );
};

export default SocialMedia;
