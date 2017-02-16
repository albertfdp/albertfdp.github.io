import React from 'react'
import styles from './styles.css'
import { Header, Text, View } from 'components'

const Name = ({ name, email }) => (
  <a
    className={styles.name}
    href={`mailto:${email}`}
    target='_blank'
  >
    { name }
  </a>
)

const Basics = ({
  name,
  label,
  picture,
  email,
  phone,
  summary
}) => (
  <View className={styles.container}>
    <View className={styles.content}>
      <Header className={styles.title}>
        I'm a {label}.
      </Header>
      <Text className={styles.summary}>
        Hi, my name is <Name name={name} email={email} />.&nbsp;
        { summary }
      </Text>
    </View>
  </View>
)

export default Basics
