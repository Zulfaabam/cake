import React from 'react'

export default function ProductItem({ item }) {
  const { img, title, price } = item
  return (
    <div className="space-y-2">
      <img src={img} alt={title} className="w-80 lg:w-[350px]" />
      <div className="space-y-1 md:space-y-2">
        <h2 className="text-maroon font-bold text-lg md:text-2xl">{title}</h2>
        <p className="text-grey-lighter font-bold">{price}</p>
        <button className="bg-maroon text-white rounded-xl px-4 py-3 font-bold">
          Buy now
        </button>
      </div>
    </div>
  )
}
