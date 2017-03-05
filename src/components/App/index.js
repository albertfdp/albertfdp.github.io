import React from 'react'
import { Footer, Navbar, Header, View } from 'components'

import styles from './styles.css'

const App = () => (
  <View className={styles.container}>
    <Navbar />
    <Header />
    <Footer />
  </View>
)

export default App
