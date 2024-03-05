import React, { useState } from 'react'
import appStyle from './ContentContainer.module.css'

function ContentContainer({displayValue,totalDisplayValue}) {
  // const [preVal,setPreVal]=useState(0)

 

  return (
    <div className={`${appStyle['contentContainer']}`}>
        <h6>{totalDisplayValue}</h6>
        <p>{displayValue}</p>
      </div>
  )
}

export default ContentContainer
