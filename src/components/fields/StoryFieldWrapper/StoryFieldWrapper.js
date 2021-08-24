import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './StoryFieldWrapper.scss'

export function createStoryFieldWrapperComponent(FieldComponent) {
  return ({ fieldValue, onChange, ...props }) => {

    console.debug("From StoryFieldWrapper", { FieldComponent: FieldComponent, fieldValue: fieldValue, onChange: onChange, ...props })
    const [storyFieldValue, setStoryFieldValue] = useState(fieldValue ?? props?.defaultValue ?? null)

    const handleFieldChange = (fieldKey, newFieldValue) => {
      typeof onChange === 'function' ? onChange(fieldKey, newFieldValue) : setStoryFieldValue(newFieldValue)
    }

    useEffect(() => {
      if(props?.fieldLabel && fieldValue) { handleFieldChange(props.fieldLabel, fieldValue) }

      // todo: cancel on unmount?
    }, [])

    useEffect(() => {
      if(props?.fieldLabel && fieldValue !== storyFieldValue) { handleFieldChange(props.fieldLabel, fieldValue) }

      // todo: cancel on unmount?
    }, [fieldValue])


    return (
      <FieldComponent
        fieldValue={fieldValue}
        onChange={handleFieldChange}
        {...props}
      />
    )
  }

  //StoryFieldWrapper.propTypes = {
  //  fieldValue: PropTypes.string,
  //  onChange: PropTypes.func,
  //  props: PropTypes.object,
  //}
}

createStoryFieldWrapperComponent.propTypes = {
  FieldComponent: PropTypes.element,
}