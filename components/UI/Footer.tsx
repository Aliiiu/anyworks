import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<div>
			<div className='md:pt-[66px] pt-[55px] px-[32px] pb-[63px] md:pb-[40px] lg:px-[114px] bg-[#210639] flex flex-col md:flex-row justify-between'>
				<div className='flex flex-col items-start gap-y-[23px]'>
					<Link href={'/'}>
						<a>
							<Image
								src={'/images/logo-white.png'}
								alt='white logo'
								width={'158px'}
								height='52px'
								objectFit='contain'
							/>
						</a>
					</Link>
					<p className='text-white'>
						Lorem ipsum dolor sit amet, consectetur{' '}
						<br className='hidden md:block' /> adipiscing elit. Cursus in
						scelerisque
					</p>
				</div>
				<div className='flex justify-between mt-[61px] md:mt-0 w-[90%] md:w-[32%] lg:w-[30%] xl:w-[22%]'>
					<div className='flex flex-col gap-y-[16px]'>
						<h4 className='text-white'>Company</h4>
						<Link href='/aboutUs'>
							<a className='text-white text-[16px]'>About Us</a>
						</Link>
						<Link href='/services'>
							<a className='text-white text-[16px]'>Services</a>
						</Link>
						<Link href='/faqs'>
							<a className='text-white text-[16px]'>FAQs</a>
						</Link>
					</div>
					<div className='flex flex-col gap-y-[16px]'>
						<h4 className='text-white'>Others</h4>
						<Link href='/privacy-policy'>
							<a className='text-white text-[16px]'>Privacy Policy</a>
						</Link>
						<Link href='/terms-of-use'>
							<a className='text-white text-[16px]'>Terms of Use</a>
						</Link>
						<Link href='/contact-us'>
							<a className='text-white text-[16px]'>Contact Us</a>
						</Link>
					</div>
				</div>
			</div>
			<div className='md:pt-[48px] pb-[66px] px-[32px] lg:px-[114px] bg-[#210639]'>
				<div className='bg-[#7E00C4] mb-[24px] md:mb-0 w-full h-[1px]'></div>
				<div className='flex flex-col-reverse md:flex-row justify-between w-full md:mt-[34px] lg:mt-[67px]'>
					<p className='text-white text-[16px] md:text-[20px]'>
						© 2022 AnyWorks. All rights reserved.
					</p>
					<div className='flex justify-between mb-[20px] md:mb-0 w-[50%] md:w-[20%] lg:w-[18%] xl:w-[13%]'>
						<a href=''>
							<Image
								src={'/images/twitter-icon.png'}
								alt='twitter icon'
								width={'32px'}
								height='32px'
							/>
						</a>
						<a href=''>
							<Image
								src={'/images/instagram-icon.png'}
								alt='twitter icon'
								width={'32px'}
								height='32px'
							/>
						</a>
						<a href=''>
							<Image
								src={'/images/facebook-icon.png'}
								alt='twitter icon'
								width={'32px'}
								height='32px'
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
