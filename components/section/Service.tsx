import Image from 'next/image';
import { BsArrowUpRight } from 'react-icons/bs';

const ServiceSection = () => {
	return (
		<div className='container px-[112px]'>
			<h1 className='text-[#00CCCD] leading-[55px]'>
				One Platform <br /> Many{' '}
				<span className='text-[#7E00C4]'>Services</span>
			</h1>
			<p className='text-[#00CCCD] mt-[23px] mb-[35px]'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in
				scelerisque <br /> imperdiet convallis nec imperdiet convallis nec
				convallis nec.
			</p>
			<div className='bg-[#00CCCD] grid grid-cols-4 gap-x-[20px] rounded-[30px] p-[15px] w-full'>
				<div className='serviceStyle overflow-hidden'>
					<div className='relative w-[280px] h-[240px]'>
						<Image
							src={'/images/service-1.png'}
							alt='delivery service'
							layout='fill'
						/>
						<div className='flex justify-center items-center absolute bottom-0 w-full text-white serviceTag h-[70px]'>
							Quick Errands
						</div>
					</div>
				</div>
				<div className='serviceStyle overflow-hidden'>
					<div className='relative w-[280px] h-[240px]'>
						<Image
							src={'/images/service-2.png'}
							alt='delivery service'
							layout='fill'
						/>
						<div className='flex justify-center items-center absolute bottom-0 w-full text-white serviceTag h-[70px]'>
							Plumber
						</div>
					</div>
				</div>
				<div className='serviceStyle overflow-hidden'>
					<div className='relative w-[280px] h-[240px]'>
						<Image
							src={'/images/service-3.png'}
							alt='delivery service'
							layout='fill'
						/>
						<div className='flex justify-center items-center absolute bottom-0 w-full text-white serviceTag h-[70px]'>
							Hair Stylist
						</div>
					</div>
				</div>
				<div className='bg-[#7E00C4] w-full h-full rounded-[20px] flex justify-center items-center'>
					<div className='flex flex-col items-center gap-y-[19px]'>
						<a className='styledAnchor flex justify-center items-center w-[63px] h-[63px] rounded-[100%]'>
							<BsArrowUpRight className='text-[#210639] text-[16px]' />
						</a>
						<h4 className='text-white'>Explore All</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceSection;
