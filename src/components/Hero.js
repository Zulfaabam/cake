import React from 'react'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <section className="bg-pink pb-20 xl:pb-40" id="hero">
      <Navbar />
      <div className="max-w-6xl mx-auto mt-12 xl:mt-32 px-4 flex flex-col md:flex-row items-center justify-center gap-4 xl:gap-24">
        <img
          src="/assets/cake-hero.png"
          alt="cake hero"
          className="w-80 lg:w-[400px] xl:w-[475px]"
        />
        <div className="text-center md:text-left space-y-4 xl:space-y-8 max-w-[540px]">
          <h1 className="text-maroon text-2xl md:text-3xl lg:text-5xl xl:text-[56px] font-extrabold">
            Natural classic cakes & dessert
          </h1>
          <p className="text-grey text-sm md:text-base lg:text-xl">
            Get your personalised fashion experience in the about you and
            discover a wide range of brands with free shipping & returns
          </p>
          <button className="bg-maroon text-white px-6 py-4 rounded-xl">
            Discover now
          </button>
        </div>
      </div>
    </section>
  )
}
