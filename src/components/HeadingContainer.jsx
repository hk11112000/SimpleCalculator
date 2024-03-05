import React from 'react'
import appStyle from './HeadingContainer.module.css'

function HeadingContainer() {
  return (
    <div className={`${appStyle["headingContainer"]}`}>
      <h4>Calculator</h4> <i className={`${appStyle["threeDots"]} bi bi-three-dots-vertical`}></i>
    </div>
  )
}

export default HeadingContainer
