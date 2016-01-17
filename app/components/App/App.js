import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

if (__CLIENT__) {
  require('./App.scss');
}

export default class App extends Component {

  render() {
    const { title } = this.props;
    return (
      <div className="app">
        <Helmet
          title={title}
          meta={[
            {charset: 'utf-8'}
          ]}
          link={[
            { rel: 'stylesheet', href: 'style.css' }
          ]} />
        {this.props.children}
      </div>
    );
  }

};

App.propTypes = {
  title: PropTypes.string.isRequired
};