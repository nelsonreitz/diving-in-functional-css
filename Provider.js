/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useDeck } from 'mdx-deck'

export default props => {
  const deck = useDeck()
  const { index } = deck

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      {index > 0 &&
        <header
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pt: 3,
            pb: 3,
            mx: 5,
            fontFamily: 'Fira Sans, sans-serif',
            fontSize: 2,
            color: 'grey',
            borderBottom: '1px solid lightgrey',
          }}
        >
          <span>Diving into Utility-first CSS</span>
          <span>{index}</span>
        </header>
      }
      {props.children}
    </div>
  )
}
