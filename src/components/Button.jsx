import React from 'react'

const Button = ({text, className, iconAfter, onClick}) => {
  return <>
    <button className={`bg-color-transition main-button flex justify-center ${className}`} onClick={onClick}>{text}{iconAfter}</button>
  </>
}

export default Button