import React from 'react';
import Button from '../UI/Button';
import Image from 'next/image';
import Link from 'next/link';

const HomepageHero = () => {
	return (
		<div className='flex flex-col md:flex-row justify-between container px-[33px] lg:px-[112px]'>
			<div className='lg:mt-[180px] mt-[145px] md:w-[48%]'>
				<h1 className='underline'>
					Get connected with <br /> enim non nisl, <br /> Anywhere and Anytime.
				</h1>
				<p className='text-[#1D2939] mt-[24px] md:mt-[32px]'>
					{/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
					<br className='hidden md:block' /> Velit at donec mi diam leo aliquam
					non sagittis. Sapien <br className='hidden md:block' /> auctor diam
					elementum faucibus condimentum quam <br className='hidden md:block' />{' '}
					eget. Odio a, elementum laoreet sed. */}
					Anyworks connects you with verified and professional{' '}
					<br className='hidden md:block' /> artisans within your geo-location
					to accomplish your daily <br className='hidden md:block' />
					tasks. You don’t want to miss out on exciting news about{' '}
					<br className='hidden md:block' /> Anyworks. Get notified immediately
					when we launch.
				</p>
				<Link href='/#waitlist'>
					<a>
						<Button
							styles='bg-[#7E00C4] mt-[24px] md:mt-[32px]'
							content={'Join the waitlist'}
						/>
					</a>
				</Link>
				<p className='italic mt-[10px] text-[16px]'>
					It takes less than 1 minute
				</p>
			</div>
			<div className='relative mt-[58px] w-full h-[326px] md:w-[376px] md:h-[500px] md:mt-[89px] lg:mt-[112px] lg:w-[575px] lg:h-[700px]'>
				<Image
					src={'/images/hero-new.png'}
					alt='anyworks demo'
					layout='fill'
					objectFit='contain'
				/>
			</div>
		</div>
	);
};

export default HomepageHero;
