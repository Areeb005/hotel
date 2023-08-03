import React from 'react'

const Button = ({text, className, iconAfter}) => {
  return <>
    <button className={`bg-color-transition main-button flex justify-center ${className}`}>{text}{iconAfter}</button>
  </>
}

export default Button