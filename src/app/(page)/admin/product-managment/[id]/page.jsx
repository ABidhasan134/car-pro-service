import UpdateProductAdmin from '@/components/admin/product-manegment/updateProductAdmin'
import React from 'react'

const page = ({params}) => {
    console.log(params.id);
  return (
    <div>
      <UpdateProductAdmin id={params.id}></UpdateProductAdmin>
    </div>
  )
}

export default page
