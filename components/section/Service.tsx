import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

const ServiceSection = () => {
	return (
		<div className='container px-[33px] lg:px-[112px]'>
			<h1 className='text-[#00CCCD] font-extrabold leading-[55px]'>
				One Platform <br /> Many <span className='text-primary'>Services</span>
			</h1>
			<p className='text-[#00CCCD] mt-[23px] mb-[35px]'>
				Here are the most popular artisans readily available to deliver <br />{' '}
				quality services to you. Tap the icon to “explore all”
			</p>
			<div className='bg-[#00CCCD] grid grid-rows-4 gap-y-[20px] md:grid-cols-2 md:grid-rows-1 lg:grid-cols-4 md:gap-x-[20px] rounded-[30px] p-[15px] w-full'>
				<div className='w-full relative overflow-hidden serviceOne h-[300px] bg-center serviceStyle'>
					<Link href={'/services'}>
						<a>
							<div className='flex justify-center items-center absolute bottom-0 w-full text-white serviceTag h-[70px]'>
								Quick Errands
							</div>
						</a>
					</Link>
				</div>
				<div className='w-full relative overflow-hidden serviceTwo h-[300px] bg-center serviceStyle'>
					<Link href={'/services'}>
						<a>
							<div className='flex justify-center items-center absolute bottom-0 w-full text-white serviceTag h-[70px]'>
								Plumber
							</div>
						</a>
					</Link>
				</div>
				<div className='overflow-hidden relative serviceThree h-[300px] bg-center serviceStyle'>
					<Link href={'/services'}>
						<a>
							<div className='flex justify-center items-center absolute bottom-0 w-full text-white serviceTag h-[70px]'>
								Hair Stylist
							</div>
						</a>
					</Link>
				</div>
				<div className='bg-primary w-full h-full rounded-[20px] flex justify-center items-center'>
					<div className='flex flex-col items-center gap-y-[19px]'>
						<Link href='/services'>
							<a className='styledAnchor flex justify-center items-center w-[63px] h-[63px] rounded-[100%]'>
								<BsArrowUpRight className='text-[#210639] text-[16px]' />
							</a>
						</Link>
						<h4 className='text-white'>Explore All</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceSection;
