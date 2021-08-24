import React from 'react'
import { Text as TextField } from './Text'

import { action } from '@storybook/addon-actions'

export const actionsData = {
  onChange: action('onChange'),
}

export default {
  title: 'Input Fields/Text',
  component: TextField,
  excludeStories: /.*Data$/,
  argTypes: {
    onChange: { action: 'onChange' },
  },
  parameters: {
    actions: {
      handles: ['change']
    },
  },
}

const Template = ({ onChange, ...args }) => ({
  Component: TextField,
  props: args,
  on: {
    ...actionsData,
  },
})

export const Default = Template.bind({})
Default.args = {

};

export const Primary = Template.bind({})

Primary.args = {
  fieldKey: "story-field__text",
  fieldLabel: "Text Value",
  fieldValue: "",
}
