import React, { PropTypes } from 'react'

const Header = ({
  children,
  level,
  ...props
}) => React.createElement(
  `h${level}`,
  props,
  children
)

Header.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([ 1, 2, 3, 4 ])
}

Header.defaultProps = {
  level: 1
}

export default Header
