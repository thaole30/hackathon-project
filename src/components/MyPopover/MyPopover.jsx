import { Popover } from 'antd'
import React from 'react'

const MyPopover = ({children, content}) => {
  return (
    <Popover placement="bottom" content={content} trigger="click">
        {children}
    </Popover>
  )
}

export default MyPopover