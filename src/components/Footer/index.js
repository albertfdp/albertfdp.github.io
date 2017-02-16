import React from 'react'
import { View } from 'components'

import Twitter from 'assets/twitter.svg'
import GitHub from 'assets/github.svg'
import LinkedIn from 'assets/linkedin.svg'

import styles from './styles.css'

const Footer = () => (
  <View className={styles.footer}>
    <a
      className={styles.icon}
      target='_blank'
      href='https://twitter.com/albertfdezp'
    >
      <Twitter />
    </a>
    <a
      className={styles.icon}
      target='_blank'
      href='https://linkedin.com/in/albertfdezp'
    >
      <LinkedIn />
    </a>
    <a
      className={styles.icon}
      target='_blank'
      href='https://github.com/albertfdp'
    >
      <GitHub />
    </a>
  </View>
)

export default Footer
