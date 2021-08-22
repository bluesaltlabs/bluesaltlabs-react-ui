import React from 'react'
//import './HoverBox.scss'

import { HoverBoxTitle } from './HoverBoxTitle'

export function HoverBox(props) {
  const {
    width, height, title, href, onClick, className, style, margin, children, ...rest
  } = props

  let calculatedWidth   = parseInt(width) > -1 ? parseInt(width) : 0
  let calculatedHeight  = parseInt(width) > -1 ? parseInt(width) : 0

  const combinedStyle = Object.assign({
    width: `${calculatedWidth ?? calculatedHeight}px`,
    height: `${calculatedHeight ?? calculatedWidth}px`,
    margin: (style ?? {})?.margin ? style.margin : `${(margin ?? 6)}px`
  }, (style ?? {}))

  const boxProps = {
    className: `${className ? `${className} ` : ''}HoverBox`,
    role: (href || onClick ? "button" : undefined),
    style: combinedStyle,
    title: title,
    ...(rest ?? {})
  }

  return React.createElement((href ? 'a' : 'div'), boxProps, children ?? <HoverBoxTitle title={title} />)
}
