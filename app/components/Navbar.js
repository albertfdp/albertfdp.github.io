import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar">
        <h1 className="navbar__title">Albert Fern&aacute;ndez</h1>
        <Link className="navbar__link" to={'/about'}>About</Link>
      </nav>
    );
  }

};

Navbar.propTypes = {};