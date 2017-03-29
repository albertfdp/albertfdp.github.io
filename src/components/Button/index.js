import React, { PropTypes } from 'react';

import styles from './styles.css';

const Button = ({ to, children, ...props }) => (
  <a {...props} className={styles.button} role="button" href={to}>
    {children}
  </a>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};

export default Button;
