import ChooseText from '@/components/about/ChooseText'
import PhotoGallery from '@/components/about/PhotoGallery'
import ChooseUs from '@/components/chooseUs/chooseUs'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <div className='flex justify-between'>
      <ChooseText></ChooseText>
      <PhotoGallery></PhotoGallery>
      </div>
      <ChooseUs></ChooseUs>
    </div>
  )
}

export default AboutUs
