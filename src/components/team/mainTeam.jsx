
import React from 'react'
import TitleAndSub from '../shared/titleAndSub'
import CardTeam from './cardTeam'

const MainTeam = () => {

  return (
    <div className='relative grid justify-center p-2 mb-20'>
       <TitleAndSub title='Our Team' subtitle='Our team at Magic Motor consists of skilled and experienced mechanics dedicated to providing top-notch automotive services. With expertise across various specialties, we ensure your vehicle gets the care it deserves.'></TitleAndSub>
      <CardTeam></CardTeam>
    </div>
  )
}

export default MainTeam
