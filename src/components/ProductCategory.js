import React from 'react'
import SectionTitle from './SectionTitle'
import { productItems } from '../datalists'
import ProductItem from './ProductItem'

export default function ProductCategory() {
  return (
    <section className="bg-pink px-4 py-20 xl:py-28" id="product">
      <div className="text-center space-y-6">
        <SectionTitle content="Product Category" />
        <p className="text-grey text-sm md:text-base lg:text-xl max-w-[720px] mx-auto">
          Get your personalised fashion experience in the about you and discover
          a wide range of brands with free shipping & returns
        </p>
      </div>
      <div className="flex flex-wrap gap-7 justify-center mt-10 xl:mt-20 max-w-6xl mx-auto">
        {productItems.map((item, id) => {
          return <ProductItem key={id} item={item} />
        })}
      </div>
    </section>
  )
}
