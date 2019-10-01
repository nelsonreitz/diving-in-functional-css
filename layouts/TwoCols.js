/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

export const Layout = ({ children, firstCol, secondCol, ...props }) => {
  const [first, ...rest] = React.Children.toArray(children)
  return (
    <div
      {...props}
      sx={{
        display: 'flex',
        alignItems: 'baseline',
        width: '100%',
        height: '100%',
        mx: '-1rem',
      }}
    >
      <div
        sx={{
          px: 3,
          width: firstCol,
        }}
      >
        {first}
      </div>
      <div
        sx={{
          px: 3,
          width: secondCol,
        }}
      >
        {rest}
      </div>
    </div>
  )
}

export default Layout
