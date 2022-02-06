import React from 'react'

export default function SectionTitle({ content }) {
  return (
    <h1 className="text-maroon text-2xl md:text-3xl lg:text-5xl xl:text-[56px] font-extrabold">
      {content}
    </h1>
  )
}
