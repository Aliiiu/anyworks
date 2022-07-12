import Image from 'next/image'
import LoveToHear from '../../components/contact/LoveToHear'

const Contactus = () => {
  return (
    <div className="container relative">
      <div className="absolute hidden lg:block left-0 top-[100px]">
        <Image src="/images/circle.png" alt="circle point" width={'110px'} height={'193px'} />
      </div>
      <div className="absolute bottom-[300px] hidden lg:block right-0">
        <Image src="/images/circle2.png" alt="circle point" width={'110px'} height={'193px'} />
      </div>
      <div className="mt-[130px] xl:mt-[150px] mb-[52px] xl:mb-[213px] px-[33px] xl:px-[234px]">
        <div className="bg-white contact">
          <LoveToHear />
        </div>
        <div className="text-center mt-[60px] sm:w-[50%] w-full  mx-auto">
          <h3 className="text-[24px] text-[#101828] font-semibold">Get in touch</h3>
          <p className="text-[#475467] mt-[12px] mb-[36px]">
            We’d love to hear from you. Please fill out this form.
          </p>
          <form>
            <div className="flex flex-col mb-[14px] items-start">
              <label className='mb-[10px] text-sm' htmlFor="firstName">Your name</label>
              <input
                type="text"
                placeholder="First Name"
                className="px-[12px] placeholder:text-xs text-sm py-[8px] w-full inputBorder"
              />
            </div>
            <div className="flex flex-col mb-[14px] items-start">
              <label className='mb-[10px] text-sm' htmlFor="email">Email</label>
              <input
                type="mail"
                placeholder="you@mail.com"
                className="px-[12px] placeholder:text-xs text-sm py-[8px] w-full inputBorder"
              />
            </div>
            <div className="flex flex-col mb-[14px] items-start">
              <label className='mb-[10px] text-sm' htmlFor="message">Message</label>
              <textarea name="message" rows={4} className="w-full inputBorder px-[12px] py-[8px] text-sm "></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#7E00C4] w-full py-[12px] text-white rounded-[8px] text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contactus
