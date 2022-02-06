import React from 'react'
import SectionTitle from './SectionTitle'
import { benefitItems } from '../datalists'
import BenefitItem from './BenefitItem'

export default function Benefit() {
  return (
    <section className="bg-white px-4 py-20 xl:py-28" id="benefit">
      <div className="text-center space-y-6">
        <SectionTitle content="Why choose us?" />
        <p className="text-grey text-sm md:text-base lg:text-xl max-w-[720px] mx-auto">
          Get your personalised fashion experience in the about you and discover
          a wide range of brands with free shipping & returns
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 xl:gap-16 mt-10 xl:mt-20">
        {benefitItems.map((item) => {
          return <BenefitItem item={item} />
        })}
      </div>
    </section>
  )
}
