import React from 'react'

export const CircleDot=()=> {
  return (
    <div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#F0F2F4"/>
    <g transform="translate(30,20)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6.5" fill="#1B63A9" stroke="white" stroke-width="3"/>
    </svg></g>
    </svg></div>
  )
}

export default CircleDot