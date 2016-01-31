import React, { Component, PropTypes } from 'react';
import Icon from 'react-fa';
import ga from 'react-ga';

if (__CLIENT__) {
  require('./Index.scss');
}

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.renderIcon = this.renderIcon.bind(this);
  }

  componentWillMount() {
    ga.pageview(this.props.location.pathname);
  }

  render() {
    const { icons } = this.props;
    return (
      <div className="index">
        <h1 className="index__title">
          {'Albert Fernández de la Peña'}
        </h1>
        <div className="index__divider"></div>
        <section className="index__icons">
          {icons.map(this.renderIcon}
        </section>
      </div>
    );
  }

  handleClick(icon) {
    ga.event({ category: 'link', action: icon.href });
  }

  renderIcon(icon, idx) {
    return (
      <a key={idx} className="index__icon" href={icon.href} target="_blank" onClick={() => this.handleClick(icon)}>
        <Icon name={icon.name} size="2x"/>
      </a>
    );
  }

};

Index.propTypes = {
  icons: PropTypes.array
};

Index.defaultProps = {
  icons: [
    { name: 'github', href: 'https://github.com/albertfdp' },
    { name: 'linkedin-square', href: 'https://dk.linkedin.com/in/albertfdp' },
    { name: 'twitter', href: 'https://twitter.com/albertfdezp' },
    { name: 'envelope-o', href: 'mailto:albert@nandez.cat' },
  ]
};