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
  return (
    <>
      <div
        className={clsx('z-10 bg-white py-[15px] top-0  fixed w-[100%]', {
          'bg-white shadow-sm': headerStyle,
        })}
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
                <li className={clsx('nav-link', { active: router.pathname == '/services' })}>
                  <Link href="/services">Services</Link>
                </li>
                <li className={clsx('nav-link', { active: router.pathname == '/about' })}>
                  <Link href="/about">About Us</Link>
                </li>
                <li className={clsx('nav-link', { active: router.pathname == '#' })}>
                  <Link href="#">Contact Us</Link>
                </li>
                <li className={clsx('nav-link', { active: router.pathname == '/faq' })}>
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            </nav>
            <Button styles="bg-primary mlg:hidden" content="Join the Waitlist" />
            <div className="cursor-pointer hidden mlg:block" onClick={() => setIsOpen(!isOpen)}>
              <Image src={'/svgs/menu.svg'} alt="menu" height={45} width={45} />
            </div>
          </header>
        </div>
        {isOpen && (
          <div
            className={clsx(
              'absolute top-[83px] bg-white py-[20px] px-[70px] sm:px-[30px] shadow-sm',
              styles.menuBar,
              {
                [styles.menuBarIsOpen]: isOpen,
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
                  { 'text-primary': router.pathname == '#' }
                )}
              >
                <Link href="#">Contact Us</Link>
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
            <Button styles="bg-primary  mt-[20px] xs:w-full" content="Join the Waitlist" />
          </div>
        )}
      </div>
    </>
  )
}

export default Header
