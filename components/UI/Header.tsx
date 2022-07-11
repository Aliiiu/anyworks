import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header: FC<{}> = () => {
  const [headerStyle, setHeaderStyle] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setHeaderStyle(window.pageYOffset > 50))
    }
  }, [])
  return (
    <>
      <div
        className={`z-10  py-[15px] top-0  fixed w-[100%] ${
          headerStyle ? 'bg-white shadow-sm' : ''
        }`}
      >
        <div className="container">
          <header className="flex items-center justify-between">
            <Link href="/">
              <Image
                className="cursor-pointer"
                src={'/images/anyworks-logo.png'}
                alt="anyworks logo"
                height={45}
                width={137}
              />
            </Link>
            <nav className="mlg:hidden">
              <ul className="flex gap-x-[35px]">
                <li className={router.pathname == '/services' ? 'active nav-link' : 'nav-link'}>
                  <Link href="/services">Services</Link>
                </li>
                <li className={router.pathname == '/about' ? 'active nav-link' : 'nav-link'}>
                  <Link href="/about">About Us</Link>
                </li>
                <li className="nav-link">
                  <Link href="#">Contact Us</Link>
                </li>
                <li className="nav-link">
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            </nav>
            <Button styles="bg-primary mlg:hidden" content="Join the Waitlist" />
            <div className="cursor-pointer hidden mlg:block">
              <Image src={'/svgs/menu.svg'} alt="menu" height={45} width={45} />
            </div>
          </header>
        </div>
      </div>
    </>
  )
}

export default Header
