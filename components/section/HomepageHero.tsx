import React from 'react'
import Button from '../UI/Button'
import Image from 'next/image'
import Link from 'next/link'

const HomepageHero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between container px-[33px] lg:px-[112px]">
      <div className="lg:mt-[180px] mt-[145px] md:w-[46%]">
        <h1 className="underline">
          Ut pellentesque <br /> enim non nisl, <br /> tortor pretium.
        </h1>
        <p className="text-[#1D2939] mt-[24px] md:mt-[32px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          <br className="hidden md:block" /> Velit at donec mi diam leo aliquam non sagittis. Sapien{' '}
          <br className="hidden md:block" /> auctor diam elementum faucibus condimentum quam{' '}
          <br className="hidden md:block" /> eget. Odio a, elementum laoreet sed.
        </p>
        <Link href='/#waitlist'>
          <a>
            <Button styles="bg-[#7E00C4] mt-[24px] md:mt-[32px]" content={'Join the waitlist'} />
          </a>
        </Link>
      </div>
      <div className="relative mt-[58px] w-[276px] h-[326px] md:w-[376px] md:h-[500px] md:mt-[89px] lg:mt-[112px] lg:w-[575px] lg:h-[700px]">
        <Image src={'/images/hero-new.png'} alt="anyworks demo" layout="fill" objectFit="contain" />
      </div>
    </div>
  )
}

export default HomepageHero
