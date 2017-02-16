import React from 'react'
import { View } from 'components'

import styles from './styles.css'

const Navbar = () => (
  <View className={styles.container}>
    <View className={styles.home}>
      <a className={styles.link} href='/'>
        Albert Fern&aacute;ndez
      </a>
    </View>
  </View>
)

export default Navbar
