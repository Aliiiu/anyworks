import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Typed from 'typed.js';
import Button from '../UI/Button';
import Link from 'next/link';

const HomepageHero = () => {
	const el = useRef<HTMLSpanElement>(null);
	useEffect(() => {
		const typed = new Typed(el.current || '', {
			strings: [
				'Hair Stylists,',
				'Plumber,',
				'Electrician,',
				'Furniture,',
				'Mechanic.',
			],
			startDelay: 300,
			typeSpeed: 100,
			backSpeed: 100,
			backDelay: 100,
			loop: true,
		});

		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<div>
			<div className='flex flex-col md:flex-row justify-between container px-[33px] lg:px-[112px]'>
				<div className='lg:mt-[180px] mt-[145px] md:w-[48%]'>
					<h1 className='underline'>
						Get connected with <br />{' '}
						<span className='break-all' ref={el}></span> <br /> Anywhere and{' '}
						<br />
						Anytime.
					</h1>
					<p className='text-[#1D2939] mt-[18px] md:mt-[24px]'>
						AnyWorkX connects you to verified and professional Vendors
						<br className='hidden md:block' /> within your specified
						geo-location. You don’t want <br className='hidden md:block' /> to
						miss out on exciting news about AnyWorkX. Get notified{' '}
						<br className='hidden md:block' /> immediately when we launch
					</p>
					
					<Link href='https://play.google.com/store/apps/details?id=com.anyworks.artisan'>
						<a target="_blank">
						<Button
						styles='bg-primary mt-[18px] md:mt-[24px]'
						content='Get Vendor App'
					/>
						</a>
					</Link>
				</div>
				<div className='relative mt-[58px] w-full h-[326px] md:w-[376px] md:h-[500px] md:mt-[89px] lg:mt-[112px] lg:w-[575px] lg:h-[700px]'>
					<Image
						src={'/images/heroBG.png'}
						alt='anyworkx demo'
						layout='fill'
						objectFit='contain'
					/>
				</div>
			</div>
		</div>
	);
};

export default HomepageHero;
