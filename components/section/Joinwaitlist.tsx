import Image from 'next/image';
import Button from '../UI/Button';

const Joinwaitlist = () => {
	return (
		<div id='waitlist' className='xl:scroll-mt-[40rem] scroll-mt-[10rem]'>
			<div className='xl:mt-[300px] mt-[60px] relative bg-[#7E00C4] flex rounded-[25px] xl:rounded-[48px] p-[40px] xl:p-[80px]'>
				<div className='xl:w-[65%] w-full'>
					<h1 className='text-white lg:mb-[20px] mb-[5px] text-[28px] lg:text-[60px] text-center xl:text-left '>
						Join the Waitlist
					</h1>
					<p className='text-white mb-[23px] text-center xl:text-left w-full xs:w-[70%] xl:mx-[inherit] mx-[auto]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in
						scelerisque Cursus
					</p>
					<div className='flex flex-col items-center gap-x-[20px] md:flex-row justify-center xl:justify-start '>
						<input
							type='mail'
							placeholder='Enter your mail'
							className='px-[16px] py-[12px] placeholder-[#98A2B3] text-sm md:text-[20px] w-full xl:w-[60%] md:min-h-[45px] min-h-[50px] h-[45px] max-w-[410px] bg-white border border-[#D0D5DD] rounded-[8px] placeholder:text-sm'
						/>
						<Button
							styles='bg-[#210639] mt-[24px] md:w-[auto] w-full max-w-[410px] md:min-h-[45px] min-h-[50px] h-[45px] text-sm xl:w-[auto]  md:mt-[0px]'
							content='Join the Waitlist'
						/>
					</div>
				</div>
				<div className='absolute right-[-20px] w-[150px] hidden xl:block  h-[150px] top-[-240px]'>
					<div className='absolute right-6'>
						<Image
							src={'/images/sketch.png'}
							alt='sketch'
							width={'77px'}
							height='151px'
							objectFit='contain'
						/>
					</div>
				</div>
				<div className='absolute top-[-87px]  hidden xl:block  right-[70px]'>
					<Image
						src={'/images/phone-demo.png'}
						alt='phone demo'
						width={'273px'}
						height='505px'
					/>
				</div>
			</div>
		</div>
	);
};

export default Joinwaitlist;
