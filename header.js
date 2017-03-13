import React from 'react';

import styles from './styles/header.css';

const Header = ({navigate}) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Check</h1>
      <svg viewBox="0 0 8 8" className={styles.header__svgWrap}>
        <circle r="4" cx="4" cy="4" className={styles.header__svgCircle}/>
        <path 
          d="M2.1,5.5 l1,1 l3,-3"
          className={styles.header__svgCheck3}
          strokeLinecap="round"
        />
        <path 
          d="M2.1,4.5 l1,1 l3,-3"
          className={styles.header__svgCheck2}
          strokeLinecap="round"
        />
        <path 
          d="M2.1,3.5 l1,1 l3,-3"
          className={styles.header__svgCheck}
          strokeLinecap="round"
        />
      </svg>
      <a href="#" className={styles.header__link} onClick={e => {
        e.preventDefault();
        navigate('add')
      }}>Add a Todo</a>
    </header>
  )
};


export default Header;