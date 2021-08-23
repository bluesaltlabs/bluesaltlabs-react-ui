import React from 'react'
import PropTypes from 'prop-types'
//import './HoverBox.scss'

import { HoverBoxTitle } from '../HoverBoxTitle/HoverBoxTitle'

export const HoverBox = ({ width, height, title, href, onClick, className, style, margin, children, ...props }) => {
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
    ...(props ?? {})
  }

  return React.createElement((href ? 'a' : 'div'), boxProps, children ?? <HoverBoxTitle title={title} />)
}

HoverBox.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.number,
  onClick: PropTypes.func,
}

HoverBox.defaultProps = {
  margin: 6,
  width: 200,
  height: undefined,
  onClick: undefined,
}