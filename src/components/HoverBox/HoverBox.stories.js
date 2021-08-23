import React from 'react';

import { HoverBox } from './HoverBox'

//👇 Imports the Button stories
//import * as HoverBoxTitleStories from '../HoverBoxTitle/HoverBoxTitle.stories'

//https://storybook.js.org/tutorials/intro-to-storybook/react/en/composite-component/

export default {
  title: 'Components/HoverBox',
  component: HoverBox,
}

const Template = (args) => <HoverBox {...args} />

export const Primary = Template.bind({})

/*
const DefaultTitleChild = ({ title }) => (
    <span>{title}</span>
)
*/

Primary.args = { 
   // title: [{ ...HoverBoxTitleStories.Primary.args, title: "HoverBox" }],
    width: 200, 
    height: -1,
    title: "HoverBox",
    href: "",
    onClick: () => {},
    className: "",
    style: {},
    margin: -1,
}