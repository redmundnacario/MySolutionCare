import React from 'react'

const Modal = ({children} : {
  children: JSX.Element
}) => {
  return (
    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4
      bg-white rounded-md p-6
      w-[90%] sm:w-[90%] md:w-[70%] lg:w-[30%] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
    ">
      {children}
    </div>
  )
}

export default Modal