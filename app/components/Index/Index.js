import React, { Component, PropTypes } from 'react';
import Navbar from '../Navbar/Navbar';

if (__CLIENT__) {
  require('./Index.scss');
}

export default class Index extends Component {

  render() {
    return (
      <div className="index">
        <Navbar />
      </div>
    );
  }

};

Index.propTypes = {};