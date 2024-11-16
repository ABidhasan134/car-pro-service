import React from 'react'
import TitleAndSub from '../shared/titleAndSub'
import ProductCard from './productCard'

const ProductList = () => {
  return (
    <section className='relative grid justify-center p-6 mb-20'>
      <TitleAndSub title='our service' subtitle='the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.'></TitleAndSub>
      <div className='flex justify-center'>
      <ProductCard></ProductCard>
      </div>
    </section>
  )
}

export default ProductList
