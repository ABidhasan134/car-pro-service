import ChooseText from '@/components/about/ChooseText'
import OurPatner from '@/components/about/ourPatner'
import PhotoGallery from '@/components/about/PhotoGallery'
import ChooseUs from '@/components/chooseUs/chooseUs'
import MainTeam from '@/components/team/mainTeam'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <div className='flex justify-between'>
      <ChooseText></ChooseText>
      <PhotoGallery></PhotoGallery>
      </div>
      <ChooseUs></ChooseUs>
      <MainTeam></MainTeam>
      <OurPatner></OurPatner>
    </div>
  )
}

export default AboutUs
