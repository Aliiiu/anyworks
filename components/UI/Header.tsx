import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/Header.module.css'
import clsx from 'clsx'

const Header: FC<{}> = () => {
  const [headerStyle, setHeaderStyle] = useState(false)
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setHeaderStyle(window.pageYOffset > 50))
    }
  }, [])

  //close menubar on route change
  useEffect(() => {
    const closeMenu = () => isOpen && setIsOpen(false)
    router.events.on('routeChangeStart', closeMenu)
    return () => {
      router.events.off('routeChangeStart', closeMenu)
    }
  }, [isOpen, router])

  const handleMenuBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div
        className={clsx(
          'z-10 py-[15px] top-0  fixed w-[100%]',
          {
            'bg-white shadow-sm': headerStyle,
          },
          { 'bg-white': isOpen }
        )}
      >
        <div className="container lg:px-[112px] px-[33px]">
          <header className="flex items-center justify-between">
            <Link href="/">
              <a>
                <Image
                  className="cursor-pointer"
                  src={'/images/anyworks-logo.png'}
                  alt="anyworks logo"
                  height={45}
                  width={137}
                />
              </a>
            </Link>
            <nav className="hidden mlg:block">
              <ul className="flex gap-x-[35px]">
                <li className={clsx('nav-link', { active: router.pathname == '/services' })}>
                  <Link href="/services">Services</Link>
                </li>
                <li className={clsx('nav-link', { active: router.pathname == '/about' })}>
                  <Link href="/about">About Us</Link>
                </li>
                <li className={clsx('nav-link', { active: router.pathname == '/contact-us' })}>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                <li className={clsx('nav-link', { active: router.pathname == '/faq' })}>
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            </nav>
            <Button styles="bg-primary mlg:block hidden" content="Join the Waitlist" />

            <div className="cursor-pointer flex mlg:hidden" onClick={handleMenuBar}>
              <Image src={'/svgs/menu.svg'} alt="menu" height={45} width={45} />
            </div>
          </header>
        </div>

        {isOpen && (
          <div
            className={clsx(
              'fixed top-[83px] bg-white py-[20px] px-[33px] sm:px-[30px] shadow-sm',
              styles.menuBarIsOpen,
              {
                [styles.menuBar]: isOpen,
              }
            )}
          >
            <ul className="flex flex-col gap-y-[15px]">
              <li
                className={clsx(
                  'text-font-02 text-sm border-[#EAECF0] border-solid border-b hover:text-font-01',
                  { 'text-primary': router.pathname == '/about' }
                )}
              >
                <Link href="/services">Services</Link>
              </li>
              <li
                className={clsx(
                  'text-font-02 text-sm border-[#EAECF0] border-solid border-b hover:text-font-01',
                  { 'text-primary': router.pathname == '/about' }
                )}
              >
                <Link href="/about">About Us</Link>
              </li>
              <li
                className={clsx(
                  'text-font-02 text-sm border-[#EAECF0] border-solid border-b hover:text-font-01',
                  { 'text-primary': router.pathname == '/contact-us' }
                )}
              >
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li
                className={clsx(
                  'text-font-02 text-sm border-[#EAECF0] border-solid border-b hover:text-font-01',
                  { 'text-primary': router.pathname == '/faq' }
                )}
              >
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
            <Button styles="bg-primary  mt-[20px] xs:w-[auto] w-full" content="Join the Waitlist" />
          </div>
        )}
      </div>
    </>
  )
}

export default Header
