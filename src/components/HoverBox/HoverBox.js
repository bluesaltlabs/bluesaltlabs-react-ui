import React from 'react'
import PropTypes from 'prop-types'
import './HoverBox.scss'

export const HoverBox = ({ width, height, title, href, onClick, className, style, margin, children, ...props }) => {
  let calculatedWidth   = parseInt(width) > -1 ? parseInt(width) : 0
  let calculatedHeight  = parseInt(width) > -1 ? parseInt(width) : 0

  const combinedStyle = Object.assign({
    width: `${calculatedWidth ?? calculatedHeight}px`,
    height: `${calculatedHeight ?? calculatedWidth}px`,
    margin: (style ?? {})?.margin ? style.margin : `${(margin ?? 6)}px`
  }, (style ?? {}))

  const boxProps = {
    //className: `${className ? `${className} ` : ''}HoverBox card bg-default d-flex justify-content-center align-items-center position-relative item-hover__fade-child box-shadow-dark-1 item-hover-grow__outline align-content-center overflow-hidden`,
    className: `${className ? `${className} ` : ''}HoverBox`,
    role: (href || onClick ? "button" : undefined),
    style: combinedStyle,
    title: title,
    ...(props ?? {})
  }

  return React.createElement((href ? 'a' : 'div'), boxProps, children)
}

HoverBox.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.number,
  onClick: PropTypes.func,
  href: PropTypes.string,
}

HoverBox.defaultProps = {
  margin: 6,
  width: 200,
  height: undefined,
  onClick: undefined,
  href: undefined,
}