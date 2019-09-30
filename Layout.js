/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

export const Layout = ({ children, ...props }) => {
  const [first, ...rest] = React.Children.toArray(children)
  return (
    <div
      {...props}
      sx={{
        display: 'flex',
        alignItems: 'baseline',
        width: '100%',
        height: '100%',
      }}>
      <div sx={{ width: '33%' }}>{first}</div>
      <div sx={{ width: '66%' }}>{rest}</div>
    </div>
  )
}

export default Layout
