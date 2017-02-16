import React from 'react'
import styles from './styles.css'
import { Header, Section, Text, View } from 'components'

const Study = ({
  institution,
  area,
  studyType,
  startDate,
  endDate,
  courses
}) => (
  <View className={styles.job}>
    <View className={styles.side}>
      Foo
    </View>
    <View className={styles.description}>
      <Header level={3}>{area}</Header>
      <Text className={styles.summary}>
        { studyType }
      </Text>
    </View>
  </View>
)

const Education = ({ educations }) => (
  <Section
    title='#Education'
    className={styles.container}>
    { educations.map((study, i) => (
      <Study {...study} key={i} />
    ))}
  </Section>
)

export default Education
