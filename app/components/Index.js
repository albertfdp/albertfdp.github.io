import React, { Component, PropTypes } from 'react';
import Navbar from './Navbar';

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