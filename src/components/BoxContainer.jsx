import React from 'react'

function BoxContainer({ children , otherStyle}) {
  return (
    <div className={'box ' + (otherStyle? otherStyle:"")}>{children}</div>
  )
}

export default BoxContainer