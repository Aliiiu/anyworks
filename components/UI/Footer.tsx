import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="  bg-[#210639]">
      <div className="md:pt-[66px] gap-[40px] py-[32px] md:py-[75px] px-[32px] lg:px-[114px] bg-[#210639] flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-start gap-y-[12px]">
          <Link href={'/'}>
            <a>
              <Image
                src={'/images/logo-white.png'}
                alt="white logo"
                width={137}
                height={45}
                objectFit="contain"
              />
            </a>
          </Link>
          <p className="text-white text-xs w-full sm:w-[56%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in scelerisque
          </p>
        </div>
        <div
          className="grid min-w-[32%] gap-x-[20px] justify-items-start md:justify-items-end"
          style={{ gridTemplateColumns: 'repeat(2, minmax(0px, 1fr))' }}
        >
          <div className="flex flex-col gap-y-[16px]">
            <h4 className="text-white text-sm">Company</h4>
            <Link href="/aboutUs">
              <a className="text-white text-xs">About Us</a>
            </Link>
            <Link href="/services">
              <a className="text-white text-xs">Services</a>
            </Link>
            <Link href="/faqs">
              <a className="text-white text-xs">FAQs</a>
            </Link>
          </div>
          <div className="flex flex-col gap-y-[16px]">
            <h4 className="text-white text-sm">Other</h4>
            <Link href="/privacy-policy">
              <a className="text-white text-xs">Privacy Policy</a>
            </Link>
            <Link href="/terms-of-use">
              <a className="text-white text-xs">Terms of Use</a>
            </Link>
            <Link href="/contact-us">
              <a className="text-white text-xs">Contact Us</a>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="container  px-[32px] lg:px-[114px]">
          <div className="bg-primary w-full h-[1px] "></div>
        </div>
        <div className="flex flex-col-reverse xs:flex-row justify-between w-full  md:py-[50px] py-[32px] px-[32px] gap-[20px] lg:px-[114px]">
          <p className="text-white text-xs">© 2022 AnyWorks. All rights reserved.</p>
          <div
            className="xs:grid flex gap-4 items-center"
            style={{ gridTemplateColumns: 'repeat(3, minmax(0px, 1fr))' }}
          >
            <a>
              <Image src={'/svgs/twitter-icon.svg'} alt="twitter icon" width={25} height={25} />
            </a>
            <a>
              <Image src={'/svgs/instagram-icon.svg'} alt="twitter icon" width={25} height={25} />
            </a>
            <a>
              <Image src={'/svgs/facebook-icon.svg'} alt="twitter icon" width={25} height={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
