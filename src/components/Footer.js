import React from 'react'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className="bg-pink px-4 py-9 xl:pt-16 xl:pb-12" id="footer">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-9 justify-between">
        <div className="space-y-5 md:space-y-9 lg:pl-12 xl:pl-16 2xl:pl-4">
          <img src="/assets/cake-logo-footer.png" alt="cake footer" />
          <div className="text-grey-lightest text-2xl flex gap-6">
            <a href="#facebook">
              <AiFillFacebook />
            </a>
            <a href="#instagram">
              <AiFillInstagram />
            </a>
            <a href="#twitter">
              <AiFillTwitterCircle />
            </a>
          </div>
        </div>
        <p className="text-grey-blue text-base lg:text-xl max-w-[350px]">
          2464 Royal Ln. Mesa Kecamatan Gunungparty, New Jersey 45463
        </p>
      </div>
      <p className="text-grey-blue font-semibold mt-14 text-center">
        Cake 2022. All rights reserved
      </p>
    </footer>
  )
}
