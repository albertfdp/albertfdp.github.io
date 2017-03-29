import React, { PropTypes } from 'react';

import styles from './styles.css';

const Navbar = ({ items }) => (
  <nav className={styles.navbar} role="navigation">
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item.link} className={styles.item}>
          <a id={item.link} className={styles.link} href={item.link}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

Navbar.propTypes = {
  items: PropTypes.array.isRequired
};

Navbar.defaultProps = {
  items: [{ link: 'resume', name: 'Resumé' }]
};

export default Navbar;
