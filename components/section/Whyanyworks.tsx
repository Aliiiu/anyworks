import Image from 'next/image';
import Button from '../UI/Button';

interface reasonType {
	title: string;
	content: string;
}
const reasons: reasonType[] = [
	{
		title: 'Lorem ipsum dolor',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in scelerisque Cursus in scelerisque',
	},
	{
		title: 'Lorem ipsum dolor',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in scelerisque Cursus in scelerisque',
	},
	{
		title: 'Lorem ipsum dolor',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in scelerisque Cursus in scelerisque',
	},
	{
		title: 'Lorem ipsum dolor',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in scelerisque Cursus in scelerisque',
	},
	{
		title: 'Lorem ipsum dolor',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in scelerisque Cursus in scelerisque',
	},
	{
		title: 'Lorem ipsum dolor',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in scelerisque Cursus in scelerisque',
	},
];

const Whyanyworks = () => {
	return (
		<div>
			<h3 className='text-[#7E00C4] font-bold text-center'>WHY ANYWORKS</h3>
			<div className='grid grid-rows-6 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-[62px] lg:mt-[60px] mt-[38px] gap-y-[20px] lg:gap-y-[58px]'>
				{reasons.map((item, idx) => (
					<div key={idx} className='flex'>
						<div className='mr-[5px] relative w-[32px] h-[32px] flex-shrink-0'>
							<Image
								src={'/images/star-icon.png'}
								alt='menu icon'
								layout='fill'
								objectFit='contain'
							/>
						</div>
						<div className=''>
							<h6 className='text-[#475467] font-semibold'>{item.title}</h6>
							<p className='text-[#475467] text-[16px] w-[100%]'>
								{item.content}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className='lg:mt-[300px] mt-[100px] relative bg-[#7E00C4] flex rounded-[16px] lg:rounded-[48px] p-[20px] lg:px-[82px] lg:pt-[80px] lg:pb-[99px]'>
				<div className='xl:w-[65%] w-full'>
					<h1 className='text-white text-[28px] lg:text-[60px]'>
						Join the Waitlist
					</h1>
					<p className='text-white mb-[23px]'>
						Lorem ipsum dolor sit amet, <br className='lg:hidden' /> consectetur{' '}
						<br className='hidden lg:block' /> adipiscing elit. Cursus{' '}
						<br className='lg:hidden' />
						in scelerisque Cursus
					</p>
					<div className='flex flex-col items-center justify-between gap-x-[20px] md:flex-row'>
						<input
							type='mail'
							placeholder='Enter your mail'
							className='px-[16px] py-[12px] placeholder-[#98A2B3] text-[16px] text-center lg:text-left md:text-[20px] w-full xl:w-[60%] max-w-[410px] bg-white border border-[#D0D5DD] rounded-[8px]'
						/>
						<Button
							styles='bg-[#210639] mt-[24px] w-full max-w-[410px] text-[16px] md:text-[20px] xl:w-[35%] md:mt-[0px]'
							content='join the waitlist'
						/>
					</div>
				</div>
				<div className='absolute right-0 w-[150px] hidden xl:block  h-[150px] top-[-200px]'>
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
				<div className='absolute top-[-107px]  hidden xl:block  right-[70px]'>
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

export default Whyanyworks;
