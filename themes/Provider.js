/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { useDeck } from 'mdx-deck'

export default props => {
  const deck = useDeck()
  const { index, length } = deck
  const normalMode = deck.mode === 'normal'

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      {normalMode &&
        <header
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            py: 3,
            mx: '4vw',
            fontFamily: 'Fira Sans, sans-serif',
            fontSize: 2,
            color: 'grey',
          }}
        >
          {index > 0 ? (
            <>
              <span>Diving in Functional CSS</span>
              <span>{index} / {length - 1}</span>
            </>
          ) : (
            <span>October 2019</span>
          )}
        </header>
      }
      {props.children}
    </div>
  )
}
