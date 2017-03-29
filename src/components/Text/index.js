import React, { PropTypes } from 'react';

const Text = (
  {
    children,
    ...props
  }
) => (
  <span {...props}>
    {children}
  </span>
);

Text.propTypes = {
  children: PropTypes.node.isRequired
};

export default Text;
