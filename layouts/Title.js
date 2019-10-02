/** @jsx jsx */
import { jsx } from 'theme-ui'

export const Title = ({ children, ...props }) => {
  return (
    <div
      {...props}
      sx={{
        width: '100%',
        height: '100%',
        pt: '7vh',
        mx: 'auto',
        h1: {
          mb: '-1rem',
        },
      }}
    >
      {children}
    </div>
  )
}

export default Title
