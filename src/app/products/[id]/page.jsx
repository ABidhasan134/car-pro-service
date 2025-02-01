import DetailsSlider from '@/components/products/detailsSlider'
import DetailsText from '@/components/products/detailsText'
import React from 'react'

const page = ({params}) => {
  // console.log("paramiter from main details page",params.id)
  // console.log('details page hit')
  return (
      <div className='container mx-auto md:flex grid justify-between mt-6 gap-6 w-full p-5'>
    <div>
    <DetailsSlider id={params.id}></DetailsSlider>
    </div>
      <div> 
    <DetailsText id={params.id}></DetailsText>
      </div>
      </div>

  )
}

export default page
