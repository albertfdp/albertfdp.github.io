import React, { Component, PropTypes } from 'react';

export default class App extends Component {

  render() {
    const { title } = this.props;
    return (
      <html>
        <head>
          <title>{title}</title>
        </head>
        <body>
          hello world
        </body>
      </html>
    );
  }

};

App.propTypes = {
  title: PropTypes.string.isRequired
};