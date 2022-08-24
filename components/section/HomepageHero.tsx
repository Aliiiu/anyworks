import React, { useEffect, useRef, useState } from 'react';
import Button from '../UI/Button';
import Image from 'next/image';
import Link from 'next/link';
import Typed from 'typed.js';
import Modal from '../UI/Modal';

const HomepageHero = () => {
	const el = useRef<HTMLSpanElement>(null);
	const [showModal, setShowmodal] = useState(false);
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
			{showModal && (
				<Modal
					selector={'overlay-root'}
					Bselector={'backdrop-root'}
					onClick={() => setShowmodal(false)}
				/>
			)}
			<div className='flex flex-col md:flex-row justify-between container px-[33px] lg:px-[112px]'>
				<div className='lg:mt-[180px] mt-[145px] md:w-[48%]'>
					<h1 className='underline'>
						Get connected with <br />{' '}
						<span className='break-all' ref={el}></span> <br /> Anywhere and{' '}
						<br />
						Anytime.
					</h1>
					<p className='text-[#1D2939] mt-[18px] md:mt-[24px]'>
						Anyworks connects you to verified and professional service
						<br className='hidden md:block' /> providers within your specified
						geo-location. You don’t want <br className='hidden md:block' /> to
						miss out on exciting news about Anyworks. Get notified{' '}
						<br className='hidden md:block' /> immediately when we launch
					</p>
					{/* <Link href="/#waitlist">
								<a>
									<Button styles="bg-[#7E00C4] mt-[24px] md:mt-[32px]" content={'Join the waitlist'} />
								</a>
							</Link> */}
					<Button
						styles='bg-primary mt-[18px] md:mt-[24px]'
						content='Join the Waitlist'
						onClick={() => setShowmodal(true)}
					/>
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
		</div>
	);
};

export default HomepageHero;
