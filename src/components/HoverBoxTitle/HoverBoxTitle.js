import React from 'react'

export function HoverBoxTitle({ title, className, style, ...rest }) {

    return (
        <span className={className ?? {}} style={style ?? {}} {...rest}>{title}</span>
    )
}