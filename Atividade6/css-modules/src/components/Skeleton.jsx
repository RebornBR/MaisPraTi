import React from 'react';
import styles from './Skeleton.module.css';

const Skeleton = () => {
  return <div className={styles.skeleton} aria-hidden="true" />;
};

export default Skeleton;