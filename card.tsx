import React from 'react';
import styles from './stylecard.module.css';

// Define the Props interface
interface Props {
  title: string;
  content: string;
}

const Card: React.FC<Props> = ({ title, content }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default Card;
