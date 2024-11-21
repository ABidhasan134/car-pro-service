import DetailsSlider from '@/components/products/detailsSlider'
import DetailsText from '@/components/products/detailsText'
import React from 'react'

const page = ({params}) => {
  console.log("paramiter from main details page",params.id)
  console.log('details page hit')
  return (
    <div>
      <div className='flex mt-6'>
    <div>
    <DetailsSlider ></DetailsSlider>
    </div>
      <div> 
    <DetailsText id={params.id}></DetailsText>
      </div>
      </div>
      
    </div>
  )
}

export default page
