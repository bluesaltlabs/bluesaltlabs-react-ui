import React from 'react'
import { BaseText } from './Text/Text'

export function InvalidFeedbackMessage(props) {
  const { fieldError } = props

  const errorString = (
    fieldError && typeof fieldError === "object" && fieldError.length > 0 ? fieldError.join(' ') : fieldError
  )

  return (
    <div className={`invalid-feedback${(`${errorString}`.length > 0 ? ' d-block' : '')}`}>{errorString}</div>
  )
}

export function BaseField(props) {
  const {
    resourceSlug, readOnly, fieldKey, fieldLabel, fieldValue, fieldNumber, fieldDescription, inputParams, fieldError, children,
    containerClassName, labelClassName, labelStyle, valueClassName, valueStyle, onChange, inputType, handleFieldChange,
  } = props

  const FieldDescription = () => (
    !fieldDescription ? null :
      <div
        className={"text-muted small pt-2" /* todo: replace these bootstrap class names?? */}
      >{fieldDescription}</div>
  )

  if(!readOnly) {

    const handleChange = handleFieldChange ? handleFieldChange : onChange

    const hasFieldError =  fieldError && typeof fieldError === "object" && fieldError.length > 0

    const inputParameters = {
      type: inputType ?? undefined,
      ...(inputParams ?? {}),
      className: `form-control${hasFieldError ? ' is-invalid' : ''}`,
      fieldValue: fieldValue,
      onChange: handleChange,
      fieldKey: fieldKey,
      fieldNumber: fieldNumber,
    }

    return (
      <div
        className={`form-group mb-0 resource-field${containerClassName ? ` ${containerClassName}` : ''}`}
        id={`resource-field-${resourceSlug}-${fieldKey}`}
      >
        {/* Field Label */}
        { !fieldLabel ? null :
          <div
            className={`resource-field__label${labelClassName ? ` ${labelClassName}` : ''}`}
          >
            {fieldLabel}
          </div>
        }

        {/* Field Value */}
        <div
          className={`resource-field__value${valueClassName ? ` ${valueClassName}` : ''}`}
        >
          { children ? children :
            <BaseText {...inputParameters} />
          }
          <FieldDescription />
          <InvalidFeedbackMessage fieldError={fieldError} />
        </div>
      </div>
    )
  }

  // Otherwise, view field.
  return (
    <div
      className={`resource-field ${containerClassName ? ` ${containerClassName}` : ''}`}
      id={`resource-field-${resourceSlug}-${fieldKey}`}
    >
      {/* Field Label */}
      { !fieldLabel ? null :
        <div
          className={`resource-field__label${labelClassName ? ` ${labelClassName}` : ''}`}
          style={labelStyle ? labelStyle : null}
        >
          {fieldLabel}
        </div>
      }

      {/* Field Value */}
      <div
        className={`resource-field__value${valueClassName ? ` ${valueClassName}` : ''}`}
        style={valueStyle ? valueStyle : null}
      >
        { children ? children : fieldValue }
        <FieldDescription />
      </div>
    </div>
  )

  /*
  return (
    <div className={`${containerClassName ? `${containerClassName} ` : ""}BaseField`}>

    </div>
  //)
      {/*
      todo
      <BaseText

      />
      *//*}
    </div>
  )
  */
}