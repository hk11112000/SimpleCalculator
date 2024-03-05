import React from 'react'
import appStyle from './ButtonContainer.module.css'

function ButtonContainer({onButtonClicked}) {
    const backSpace = <i className="bi bi-backspace"></i>
    const buttonObj = ["Del","%",'+',7,8,9,'-',4,5,6,'*',1,2,3,'/','.',0,]
    
  return (
    <div className={`${appStyle["buttonContainer"]}`}>
      <button type='submit'  onClick={onButtonClicked} >AC</button>
      {buttonObj.map((symbols)=>(<button key={symbols} type='submit' onClick={onButtonClicked} >{symbols}</button>))}
      <button type='submit' className={`${appStyle.span2}`} onClick={onButtonClicked} >=</button>
    </div>
  )
}

export default ButtonContainer
