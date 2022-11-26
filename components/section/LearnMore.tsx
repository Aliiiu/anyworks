import Link from 'next/link';
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import Button from '../UI/Button';

const LearnMore = () => {
	return (
		<div className='container px-[33px] lg:px-[112px]'>
			<div className='flex flex-col justify-between md:flex-row'>
				<div>
					<h3 className='text-[#1D2939] text-left mb-[20px] md:mb-0'>
						Do you need any service rendered?
						<br />
					</h3>
					<p>
						We have vendors that can be at your doorstep in a matter
						of minutes.
					</p>
				</div>
				<div className='lg:w-[39%] '>
					<p className='mb-[20px] text-[#667085;]'>
						We are a trusted platform connecting millions of customers
						<br className='hidden md:block' /> (requesting different services)
						to reliable and verified <br className='hidden md:block' /> Vendors. We have identified and screened over 800 different
						vendors and some may be around your vicinity that you
						aren’t aware of.
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
