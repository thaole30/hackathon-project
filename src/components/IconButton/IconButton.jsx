import React from 'react'
import { Button } from 'antd';

const IconButton = ({svgIcon, children, addedClass='', handleClick}) => {
  return (
    <Button className={`f f-between ${addedClass}`} icon={svgIcon}
      onClick={handleClick}
    >{children}</Button>
  )
}

export default IconButton