import React from 'react'

const Button = ({text, customStyle}) => {
  return (
    <button className={`${customStyle} p-4 w-full`}>
      {text}
    </button>
  )
}

export default Button
