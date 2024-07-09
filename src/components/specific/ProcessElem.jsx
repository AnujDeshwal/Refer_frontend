import React from 'react'

const ProcessElem = ({url="" , text=""}) => {
  return (
    <div className='-rotate-90 sm:rotate-0 w-[6rem] h-[5rem] md:w-[7rem] md:h-[7rem] lg:w-[9rem] lg:h-[9rem]   rounded-full flex flex-col justify-center gap-4  md:gap-[1rem] lg:gap-8 items-center'>
        <img className="h-[2.7rem]  md:h-[6rem]" src={`${url}`} alt="process" />
        <h1 className='text-[0.7rem] text-black text-opacity-75 leading-tight  lg:text-[0.8rem] font-medium text-center'>{text}</h1>
    </div>
  )
}

export default ProcessElem