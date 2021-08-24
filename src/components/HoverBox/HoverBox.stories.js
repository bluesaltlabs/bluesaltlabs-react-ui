import React from 'react'

import { HoverBox } from './HoverBox'

export default {
  title: 'Components/HoverBox',
  component: HoverBox,
}

const Template = (args) => (
  <HoverBox {...args}>
    <span>{args?.title ?? ""}</span>
  </HoverBox>
)

export const Primary = Template.bind({})

/*
const Template = (args) => (
  <div className="d-flex flex-wrap">
    {[...Array(parseInt(args?.boxes) > 0 ? args.boxes : 1)].map((key) => (
      <HoverBox {...args} key={`HoverBox_${key}`}>
        <span>{args?.title ?? ""}</span>
      </HoverBox>
    ))}
  </div>
)
*/

Primary.args = {
   // title: [{ ...HoverBoxTitleStories.Primary.args, title: "HoverBox" }],
    width: 200, 
    height: -1,
    title: "HoverBox",
    href: "",
    onClick: () => {},
    className: "card bg-default d-flex justify-content-center align-items-center position-relative item-hover__fade-child box-shadow-dark-1 item-hover-grow__outline align-content-center overflow-hidden",
    style: {},
    margin: -1,
}