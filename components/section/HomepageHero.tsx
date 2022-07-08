import React from 'react';
import Button from '../UI/Button';
import Image from 'next/image';

const HomepageHero = () => {
	return (
		<div className='flex justify-between container px-[112px]'>
			<div className='mt-[129px] w-[45%]'>
				<h1 className='underline'>
					Ut pellentesque <br /> enim non nisl, <br /> tortor pretium.
				</h1>
				<p className='text-[#1D2939] mt-[32px]'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Velit
					at donec mi diam leo aliquam non sagittis. Sapien <br /> auctor diam
					elementum faucibus condimentum quam <br /> eget. Odio a, elementum
					laoreet sed.
				</p>
				<Button styles='bg-[#7E00C4] mt-[32px]' content='join the waitlist' />
			</div>
			<div className='relative mt-[40px] w-[575px] h-[700px]'>
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
