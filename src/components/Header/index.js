import React, { PropTypes } from 'react'
import { Button, Text, View } from 'components'

import styles from './styles.css'

const CallToAction = ({ email }) => (
  <View className={styles.actions}>
    <Text className={styles.text}>Available for freelance work.</Text>
    <Button
      className={styles.cta}
      id='work'
      to={`mailto:${email}`}
    >
      Work with me
    </Button>
    <a id='resume' href='/resume' className={styles.resume}>
      Resumé
    </a>
  </View>
)

const Header = ({ name, email, title }) => (
  <View className={styles.content}>
    <View className={styles.header}>
      <h1 className={styles.name}>
        {name}
      </h1>
      <h3 className={styles.title}>
        {title}
      </h3>
    </View>
    <CallToAction email={email} />
  </View>
)

Header.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

Header.defaultProps = {
  name: 'Albert Fern\xE1ndez de la Pe\xF1a',
  email: 'albert@nandez.cat',
  title: 'Web Developer'
}

export default Header
