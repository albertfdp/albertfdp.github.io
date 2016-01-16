import React, { Component, PropTypes } from 'react';
import { Router } from 'react-router';

export default class App extends Component {

  render() {
    const { title } = this.props;
    return (
      <html>
        <head>
          <title>{title}</title>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }

};

App.propTypes = {
  title: PropTypes.string.isRequired
};