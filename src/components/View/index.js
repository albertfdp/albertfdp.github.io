import React, { PropTypes } from 'react';

const View = ({ children, ...props }) => (
  <div {...props}>
    {children}
  </div>
);

View.propTypes = {
  children: PropTypes.node.isRequired
};

export default View;
