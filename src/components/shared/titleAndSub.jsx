import React from 'react'

const TitleAndSub = ({title,subtitle}) => {
  return (
    <div className='grid justify-center'>
      <h1 className='text-center text-5xl text-[#e76637] font-semibold'>{title}</h1>
      <h6 className='text-center max-w-[450px] opacity-50'>{subtitle}</h6>
    </div>
  )
}

export default TitleAndSub
