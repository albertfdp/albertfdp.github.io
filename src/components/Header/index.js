import React, { PropTypes } from 'react';
import { Button, View } from 'components';

import styles from './styles.css';

const CallToAction = ({ email }) => (
  <View className={styles.actions}>
    <Button className={styles.cta} id="work" to={`mailto:${email}`}>
      Work with me
    </Button>
  </View>
);

CallToAction.propTypes = {
  email: PropTypes.string.isRequired
};

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
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

Header.defaultProps = {
  name: 'Albert Fern\xE1ndez de la Pe\xF1a',
  email: 'albert+site@nandez.cat',
  title: 'Web Developer'
};

export default Header;
