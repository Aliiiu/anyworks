import Link from 'next/link';
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import Button from '../UI/Button';

const LearnMore = () => {
	return (
		<div className='container px-[33px] lg:px-[112px]'>
			<div className='flex flex-col justify-between md:flex-row'>
				<h2 className='text-[#1D2939] leading-[35px] text-left mb-[20px] md:mb-0'>
					{/* Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit. */}
					Do you need any service rendered? <br /> We have ARTISANS
				</h2>
				<div className='lg:w-[39%] '>
					<p className='mb-[20px] text-[#667085;]'>
						{/* Untitled is a technology company that builds <br /> infrastructure
						for your startup, so you don’t <br /> have to. Businesses of every
						size—from new <br /> startups to public companies—use our <br />{' '}
						software to manage their businesses. */}
						We’re a trusted platform connecting millions of <br /> users
						(requesting different services) to reliable <br /> and verified
						artisans. We have identified and <br /> screened over 800 different
						artisans around <br /> your vicinity you aren’t aware of.
					</p>
					<Button
						styles='bg-[#7E00C4]'
						content={
							<Link href={'/about'}>
								<a className='flex items-center gap-x-[20px]'>
									Learn More
									<BsArrowUpRight />
								</a>
							</Link>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default LearnMore;
