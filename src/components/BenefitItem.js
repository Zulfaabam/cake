import React from 'react'

export default function BenefitItem({ item }) {
  const { img, title, content } = item
  return (
    <div
      className="flex flex-col items-center text-center gap-3 xl:gap-6"
      key={title}
    >
      <img
        src={img}
        alt={title}
        className="border border-maroon rounded-full p-4"
      />
      <h2 className="text-maroon font-bold text-lg lg:text-2xl">{title}</h2>
      <p className="text-grey-lighter text-sm md:text-base max-w-[278px]">
        {content}
      </p>
    </div>
  )
}
