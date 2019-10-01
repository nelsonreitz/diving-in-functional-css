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
        height: '100%',
        mx: '-2vw',
      }}
    >
      <div
        sx={{
          px: '2vw',
          width: firstCol,
        }}
      >
        {first}
      </div>
      <div
        sx={{
          px: '2vw',
          width: secondCol,
        }}
      >
        {rest}
      </div>
    </div>
  )
}

export default Layout
