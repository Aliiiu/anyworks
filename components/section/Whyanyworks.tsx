import Image from 'next/image';

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
			<h2 className='text-[36px] text-[#7E00C4] font-bold text-center'>
				WHY ANYWORKS
			</h2>
			<div className='grid grid-cols-3 gap-x-[62px] mt-[60px] gap-y-[58px]'>
				{reasons.map((item, idx) => (
					<div key={idx} className='flex'>
						<div className='mr-[5px]'>
							<Image
								src={'/images/star-icon.png'}
								alt='menu icon'
								width={'64px'}
								height='64px'
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
			<div className='mt-[300px] relative bg-[#7E00C4] rounded-[48px] px-[82px] py-[99px]'>
				<h1 className='text-white'>Join the Waitlist</h1>
				<p className='text-white mb-[23px]'>
					Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Cursus
					in scelerisque Cursus
				</p>
				<input
					type='mail'
					placeholder='Enter your mail'
					className='px-[16px] py-[12px] placeholder-[#98A2B3] w-[410px] bg-white border border-[#D0D5DD] rounded-[8px]'
				/>
				<div className='absolute right-0 w-[150px] h-[150px] top-[-200px]'>
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
				<div className='absolute top-[-88px] right-[100px]'>
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
