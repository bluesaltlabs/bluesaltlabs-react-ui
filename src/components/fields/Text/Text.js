import React from 'react'
import PropTypes from 'prop-types'
import './Text.scss'

import { BaseField } from '../BaseField'

export function Text({ fieldKey, fieldLabel, fieldValue, onChange, readOnly, ...props }) {
  const allProps = {
    fieldKey: fieldKey,
    fieldLabel: fieldLabel,
    fieldValue: fieldValue,
    onChange: onChange,
    readOnly: readOnly,
    ...props
  }

  if(!readOnly) {
    const { pattern, inputParams } = props
    let parsedInputParams = inputParams ? {...inputParams} : {}

    if(pattern) { parsedInputParams.pattern = pattern }

    return <BaseField
      {...props}
      fieldValue={fieldValue ? `${fieldValue}` : ''}
      inputParams={parsedInputParams}
    />
  }

  if(!readOnly) {
    return (
      <BaseField {...allProps}>
        <BaseText {...allProps} />
      </BaseField>
    )
  }

  return <BaseField {...allProps} />
}

Text.propTypes = {
  props: PropTypes.shape({
    fieldKey: PropTypes.string,
    fieldLabel: PropTypes.string,
    fieldValue: PropTypes.string,
    onChange: PropTypes.func,
    readOnly: PropTypes.bool,
  })
}

Text.defaultProps = {
  props: {
    fieldKey: "",
    fieldLabel: "",
    fieldValue: "",
    onChange: undefined,
    readOnly: false,
  }
}

export function BaseText({ className, fieldKey, fieldValue, tabIndex, fieldNumber, defaultValue, label, options, onChange, type, ...props }) {
  function handleChange(e) {
    const value = e?.target?.value
    onChange(fieldKey, value)
  }

  return (
    <input
      {...props}
      id={fieldKey}
      name={fieldKey}
      className={className ?? "form-control"}
      type={type ?? "text"}
      value={fieldValue ?? defaultValue ?? ""}
      onChange={handleChange}
    />
  )
}