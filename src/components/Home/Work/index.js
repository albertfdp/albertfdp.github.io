import React from 'react'
import styles from './styles.css'
import { Header, Section, Text, Label, View } from 'components'
import * as logos from 'assets/logos'

const Company = ({ id, name, url }) => (
  <View className={styles.company}>
    <img className={styles.logo} src={logos[id]} />
    <View className={styles.name}>
      <a href={url} target='_blank'>
        { name }
      </a>
    </View>
  </View>
)

const DateFormatter = ({ start, end }) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long'
  })

  const endDate = end ? formatter.format(new Date(end)) : 'Currently'

  return (
    <View className={styles.date}>
      { formatter.format(new Date(start)) } - { endDate }
    </View>
  )
}

const Job = ({
  id,
  company,
  highlights,
  startDate,
  endDate,
  position,
  summary,
  tags = [],
  website
}) => (
  <View className={styles.job}>
    <View className={styles.side}>
      <Company id={id} name={company} url={website} />
      <DateFormatter start={startDate} end={endDate} />
      <View className={styles.tags}>
        { tags.map((tag, i) => <Label key={i}>{tag}</Label>)}
      </View>
    </View>
    <View className={styles.description}>
      <Header level={3}>{position}</Header>
      <Text className={styles.summary}>
        { summary }
      </Text>
      <ul className={styles.highlights}>
        { highlights.map((highlight, i) => (
          <li key={i}>{highlight}</li>
        ))}
      </ul>
    </View>
  </View>
)

const Work = ({ jobs }) => (
  <Section
    title='#Work'
    className={styles.container}>
    { jobs.map((job, i) => (
      <Job {...job} key={i} />
    ))}
  </Section>
)

export default Work
