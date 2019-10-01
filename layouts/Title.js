/** @jsx jsx */
import { jsx } from 'theme-ui'

export const Title = ({ children, ...props }) => {
  return (
    <div
      {...props}
      sx={{
        width: '100%',
        maxWidth: '50vw',
        height: '100%',
        pt: '15vh',
        mx: 'auto',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  )
}

export default Title
