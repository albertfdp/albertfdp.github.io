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
            { charset: 'utf-8' },
            { name: 'google-site-verification', content: 'VnqbeTWcp7gWpS1AX51WIPG2PZY_lUjl4OP6Ss0dk_g' }
          ]}
          link={[
            { rel: 'stylesheet', type: 'text/css', href: 'dist/style.css' }
          ]} />
        {this.props.children}
      </div>
    );
  }

};

App.propTypes = {
  title: PropTypes.string.isRequired
};