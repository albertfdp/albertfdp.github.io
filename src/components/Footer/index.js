import React from 'react'

import Twitter from 'assets/twitter.svg'
import GitHub from 'assets/github.svg'
import LinkedIn from 'assets/linkedin.svg'

import styles from './styles.css'

const Footer = () => (
  <footer className={styles.footer}>
    <section className={styles.social}>
      <a
        title='twitter'
        className={styles.icon}
        target='_blank'
        href='https://twitter.com/albertfdezp'
      >
        <Twitter />
      </a>
      <a
        title='linkedin'
        className={styles.icon}
        target='_blank'
        href='https://linkedin.com/in/albertfdezp'
      >
        <LinkedIn />
      </a>
      <a
        title='github'
        className={styles.icon}
        target='_blank'
        href='https://github.com/albertfdp'
      >
        <GitHub />
      </a>
    </section>
    <a
      target='_blank'
      className={styles.source}
      href='https://github.com/albertfdp/albertfdp.github.io'
    >
      Source
    </a>
  </footer>
)

export default Footer
