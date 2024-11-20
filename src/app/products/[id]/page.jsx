import DetailsSlider from '@/components/products/detailsSlider'
import React from 'react'

const page = ({params}) => {
  console.log(params)
  return (
    <div>
      <div className='flex mt-6'>
    <div>
    <DetailsSlider id={params.id}></DetailsSlider>
    </div>
      <div>
        here
      </div>
      </div>
      
    </div>
  )
}

export default page
