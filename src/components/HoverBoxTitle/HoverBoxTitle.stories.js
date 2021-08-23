import React from 'react';

import { HoverBoxTitle } from './HoverBoxTitle'

export default {
  title: 'Components/HoverBoxTitle',
  component: HoverBoxTitle,
}

const Template = (args) => <HoverBoxTitle {...args} />

export const Primary = Template.bind({})

Primary.args = { 
    title: "HoverBoxTitle",
    className: "",
    style: {}
}