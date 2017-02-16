import React from 'react'
import { Text, View } from 'components'
import Twitter from 'assets/twitter.svg'
import GitHub from 'assets/github.svg'
import LinkedIn from 'assets/linkedin.svg'

import styles from './styles.css'

const App = ({ name, email, title }) => (
  <View className={styles.container}>
    <View className={styles.content}>
      <View className={styles.header}>
        <h1 className={styles.name}>
          {name}
        </h1>
        <h3 className={styles.title}>
          {title}
        </h3>
      </View>
      <View className={styles.actions}>
        <Text className={styles.text}>Available for freelance work.</Text>
        <a id='work' href={`mailto:${email}`} className={styles.cta}>Work with me</a>
        <a id='resume' href='/resume' className={styles.resume}>Resumé</a>
      </View>
    </View>
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
  </View>
)

App.defaultProps = {
  name: 'Albert Fern\xE1ndez de la Pe\xF1a',
  email: 'albert@nandez.cat',
  title: 'Web Developer'
}

export default App
