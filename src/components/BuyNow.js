import React from 'react'
import SectionTitle from './SectionTitle'

export default function BuyNow() {
  return (
    <section className="bg-white pt-20 sm:pb-20 xl:py-28" id="buy-now">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-10 xl:gap-24 2xl:gap-28 max-w-6xl mx-auto sm:px-4">
        <div className="text-center sm:text-left space-y-6 px-4 sm:px-0">
          <SectionTitle content="Ready to eat?" />
          <p className="text-grey text-sm md:text-base lg:text-xl max-w-[469px] mx-auto">
            We’re a wholesaler that is committed to offering the best of all
            natural products.
          </p>
          <button className="bg-maroon text-white rounded-xl px-6 py-4 font-bold">
            Buy now
          </button>
        </div>
        <img
          src="/assets/cake-buy-now.png"
          alt="cake buy now"
          className="sm:w-64 md:w-80 lg:w-96 xl:w-[450px] 2xl:w-[540px]"
        />
      </div>
    </section>
  )
}
