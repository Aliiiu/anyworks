import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<div>
			<div className='pt-[66px] pb-[40px] border-b border-[#210639] px-[114px] bg-[#210639] flex justify-between'>
				<div className='flex flex-col items-start gap-y-[23px]'>
					<Image
						src={'/images/logo-white.png'}
						alt='white logo'
						width={'158px'}
						height='52px'
						objectFit='contain'
					/>
					<p className='text-white'>
						Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
						Cursus in scelerisque
					</p>
				</div>
				<div className='flex justify-between w-[22%]'>
					<div className='flex flex-col gap-y-[16px]'>
						<h4 className='text-white'>Company</h4>
						<Link href='/aboutUs'>
							<a className='text-white text-[16px]'>About Us</a>
						</Link>
						<Link href='/aboutUs'>
							<a className='text-white text-[16px]'>Services</a>
						</Link>
						<Link href='/aboutUs'>
							<a className='text-white text-[16px]'>FAQs</a>
						</Link>
					</div>
					<div className='flex flex-col gap-y-[16px]'>
						<h4 className='text-white'>Others</h4>
						<Link href='/privacy-policy'>
							<a className='text-white text-[16px]'>Privacy Policy</a>
						</Link>
						<Link href='/privacy-policy'>
							<a className='text-white text-[16px]'>Terms of Use</a>
						</Link>
					</div>
				</div>
			</div>
			<div className='pt-[48px] pb-[66px] px-[114px] bg-[#210639]'>
				<div className='bg-[#7E00C4] w-full h-[1px]'></div>
				<div className='flex justify-between w-full mt-[67px]'>
					<p className='text-white'>© 2022 AnyWorks. All rights reserved.</p>
					<div className='flex justify-between w-[13%]'>
						<Image
							src={'/images/twitter-icon.png'}
							alt='twitter icon'
							width={'32px'}
							height='32px'
						/>
						<Image
							src={'/images/instagram-icon.png'}
							alt='twitter icon'
							width={'32px'}
							height='32px'
						/>
						<Image
							src={'/images/facebook-icon.png'}
							alt='twitter icon'
							width={'32px'}
							height='32px'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
