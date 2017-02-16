import React from 'react'
import { View } from 'components'
import GitHub from 'assets/github.svg'
import LinkedIn from 'assets/linkedin.svg'

import styles from './styles.css'

const Social = ({
  url,
  children,
  width = 40,
  height = 40
}) => (
  <a
    className={styles.social}
    href={url}
    target='_blank'
  >
    { React.cloneElement(children, { height, width }, children) }
  </a>
)

const Footer = () => (
  <View className={styles.container}>
    <View className={styles.content}>
      <View className={styles.icons}>
        <Social url='https://github.com/albertfdp'>
          <GitHub />
        </Social>
        <Social url='https://www.linkedin.com/in/albertfdp'>
          <LinkedIn />
        </Social>
      </View>
    </View>
  </View>
)

export default Footer
