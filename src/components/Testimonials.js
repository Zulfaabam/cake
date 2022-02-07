import React from 'react'
import { testimonials } from '../datalists'
import SectionTitle from './SectionTitle'

export default function Testimonials() {
  return (
    <section className="bg-white px-4 py-20 xl:py-28" id="testimonials">
      <div className="text-center space-y-6">
        <SectionTitle content="What they said" />
        <p className="text-grey text-sm md:text-base lg:text-xl max-w-[720px] mx-auto">
          Get your personalised fashion experience in the about you and discover
          a wide range of brands with free shipping & returns
        </p>
      </div>
      <div className="mt-9 xl:mt-[72px] flex flex-wrap justify-center gap-8 md:gap-16">
        {testimonials.map((item) => {
          return (
            <div
              key={item.customer}
              className="max-w-[468px] text-center space-y-4"
            >
              <p className="text-grey-light">{item.comment}</p>
              <h2 className="text-maroon font-bold text-lg md:text-2xl">
                -{item.customer}
              </h2>
            </div>
          )
        })}
      </div>
    </section>
  )
}
