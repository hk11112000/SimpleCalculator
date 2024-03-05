import React from 'react'
import appStyle from './FooterContainer.module.css'

function FooterContainer() {
  return (
    <div className={`${appStyle["footerContainer"]}`}>
      <p>Made with ❤️ by <a href="https://himanshukarpe.netlify.app/" target='_blank'>Himanshu Karpe</a> | <img src="./vite.svg" alt="vite"  /> + <img src="./react.svg" alt="" /></p>
    </div>
  )
}

export default FooterContainer
