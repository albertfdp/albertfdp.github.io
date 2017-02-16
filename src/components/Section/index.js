import React from 'react'
import { Header, View } from 'components'

import styles from './styles.css'

const Section = ({ title, children }) => (
  <View className={styles.container}>
    <Content>
      <Title>{ title }</Title>
      { children }
    </Content>
  </View>
)

const Title = ({ children }) => (
  <Header level={2} className={styles.title}>
    { children }
  </Header>
)

const Content = ({ children }) => (
  <View className={styles.content}>
    { children }
  </View>
)

export default Section
