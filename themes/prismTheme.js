import React from 'react'
import { Prism } from 'react-syntax-highlighter'
import { xt256 } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import merge from 'lodash.merge'

import { getLanguage } from './syntax-highlighter'

export const pre = props => props.children

export const createCode = (opts = {}) => props => {
  const language = getLanguage(props.className)
  return <Prism {...opts} language={language} style={xt256} {...props} />
}

export default theme =>
  merge(theme, {
    components: {
      pre,
      code: createCode(theme.prism),
    },
  })
