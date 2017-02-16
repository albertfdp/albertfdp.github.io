import React from 'react'

import styles from './styles.css'

const Button = ({ to, children, ...props }) => (
  <a {...props} className={styles.button} role='button' href={to}>
    {children}
  </a>
)

export default Button
