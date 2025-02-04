import UpdateService from '@/components/admin/services/updateService'
import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <UpdateService id={params.id}></UpdateService>
    </div>
  )
}

export default page
