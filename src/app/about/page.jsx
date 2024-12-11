import ChooseText from '@/components/about/ChooseText'
import PhotoGallery from '@/components/about/PhotoGallery'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <div className='flex justify-between'>
      <ChooseText></ChooseText>
      <PhotoGallery></PhotoGallery>
      </div>
    </div>
  )
}

export default AboutUs
