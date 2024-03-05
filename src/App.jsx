import React, { useState } from "react";
import appStyle from "./App.module.css";
import ContentContainer from "./components/ContentContainer";
import HeadingContainer from "./components/HeadingContainer";
import ButtonContainer from "./components/ButtonContainer";




function App() {

  const [calVal,setCalVal]=useState("")
  const[totalVal,setTotalVal]=useState('');
  const onButtonClick =(event)=>{
    const valEnter = event.target.innerHTML;
    
    if(valEnter === "AC"){
      setCalVal('')
      
    }else if(valEnter === "Del"){
      setTotalVal('')
      setCalVal("")
    }else if(valEnter === "="){
      const result = eval((calVal))
      setTotalVal(result)
      setCalVal(result)
      
      console.log('result',result)
      
    }else{
      const newDisplayValue = calVal + valEnter
      setCalVal(newDisplayValue)
      
      
    }
  }
  return (
    <div className={`${appStyle["mainContainer"]}`}>
      <HeadingContainer />
      <ContentContainer displayValue={calVal} totalDisplayValue={totalVal}/>
      <ButtonContainer onButtonClicked={onButtonClick}/>
    </div>
  );
}

export default App;
