import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export const getLanguage = className => {
  const match = /language-(\w*)/.exec(className || 'language-javascript')
  let lang = 'javascript'
  if (match && match.length > 1) {
    lang = match[1]
  }
  return lang
}

export const pre = props => props.children

export const code = props => {
  const language = getLanguage(props.className)
  return <SyntaxHighlighter language={language} style={shadesOfPurple} {...props} />
}

export default {
  components: {
    pre,
    code,
  },
}
