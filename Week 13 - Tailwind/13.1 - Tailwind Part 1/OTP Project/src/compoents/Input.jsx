import React from 'react'

const Input = ({
    disabled,
    children,
    onClick,
    variant,
    type,
    placeholder
}) => {
    
  return (
    <span onClick={onClick} className={`rounded-2xl text-4xl px-2 py-2  text-white cursor-pointer bg-blue-500"`}>
     <input className='bg-blue-500 py-6 px-3 text-center rounded-2xl ' type={type} placeholder={placeholder}></input>
    </span>
  )
}

export default Input
