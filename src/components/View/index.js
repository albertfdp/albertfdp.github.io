import React from 'react'

const View = ({ children, ...props }) => (
  <div {...props}>
    {children}
  </div>
)

export default View
