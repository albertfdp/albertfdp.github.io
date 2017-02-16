import React, { Component } from 'react'
import Basics from './Basics'
import { View } from 'components'
import styles from './styles.css'

import resume from 'data/resume-en.json'

class Home extends Component {
  render () {
    const { basics } = resume

    return (
      <View className={styles.container}>
        <Basics {...basics} />
      </View>
    )
  }
}

export default Home
