import React, { Component, PropTypes } from 'react';
import Navbar from './Navbar';

if (__CLIENT__) {
  require('../style/Index.scss');
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