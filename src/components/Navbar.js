import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseCircleFill } from 'react-icons/ri'

export default function Navbar() {
  const [menuIsOpened, setMenuIsOpened] = useState(false)

  const handleClickMenu = () => {
    setMenuIsOpened(!menuIsOpened)
  }

  const MobileMenu = (
    <div className="absolute w-full z-10 left-0 right-0 bg-pink pb-2">
      <ul className="flex flex-col items-center justify-center gap-3 text-maroon font-semibold">
        <li>
          <a href="#hero">Homepage</a>
        </li>
        <li>
          <a href="#product">Product</a>
        </li>
        <li>
          <a href="#benefits">Benefits</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#buy-now">Buy Now</a>
        </li>
      </ul>
    </div>
  )

  return (
    <nav className="w-full fixed top-0 left-0 right-0 bg-pink">
      <div className="max-w-6xl flex items-center justify-between py-8 px-4 mx-auto">
        <img src="/assets/cake-logo-navbar.png" alt="cake logo" />
        <div
          className="cursor-pointer md:hidden"
          onClick={() => handleClickMenu()}
        >
          {menuIsOpened ? (
            <RiCloseCircleFill className="text-2xl text-maroon" />
          ) : (
            <GiHamburgerMenu className="text-2xl text-maroon" />
          )}
        </div>
        <ul className="hidden md:flex items-center gap-12 text-maroon font-semibold">
          <li>
            <a href="#hero">Homepage</a>
          </li>
          <li>
            <a href="#product">Product</a>
          </li>
          <li>
            <a href="#benefits">Benefits</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#buy-now">Buy Now</a>
          </li>
        </ul>
      </div>
      {menuIsOpened ? MobileMenu : ''}
    </nav>
  )
}
