import React from 'react'
import { BsFileArrowDownFill } from "react-icons/bs";
const DownloadPdf = ({title}) => {
  return (
    <div className='flex items-center justify-between px-6 p-2'>
      <div className='text-start'>
      <h1 className='text-3xl'>{title}</h1>
      <p>download your service.</p>
      </div>
      <BsFileArrowDownFill className='text-orange-500 text-5xl'></BsFileArrowDownFill>
    </div>
  )
}

export default DownloadPdf
