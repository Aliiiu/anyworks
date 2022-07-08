import Image from 'next/image';

interface stepsType {
	icon: string;
	title: string;
	content: string;
}

const steps: stepsType[] = [
	{
		icon: '/images/menu_1.png',
		title: 'Download and Register',
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in scelerisque Cursus in scelerisque`,
	},
	{
		icon: '/images/menu_2.png',
		title: 'Download and Register',
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in scelerisque Cursus in scelerisque`,
	},
	{
		icon: '/images/menu_3.png',
		title: 'Download and Register',
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in scelerisque Cursus in scelerisque`,
	},
	{
		icon: '/images/menu_4.png',
		title: 'Download and Register',
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in scelerisque Cursus in scelerisque`,
	},
];

const StepsForArtisians = () => {
	return (
		<div className='flex relative mt-[116px] py-[110px] pl-[230px] pr-[200px] bg-[#00CCCD] bg-opacity-20 justify-between w-full'>
			<div className='absolute top-[-100px] left-[580px]'>
				<Image
					src={'/images/PointingRight.png'}
					alt='pointing downward'
					width={'219px'}
					height='219px'
				/>
			</div>
			<div className='w-[60%]'>
				<h2 className='text-[48px] font-semibold capitalize leading-[60px]'>
					Easy steps For <br /> Anyworks{' '}
					<span className='text-[#7E00C4]'>artisians</span>
				</h2>
				<div className='absolute top-50 left-10'>
					<Image
						src={'/svgs/partying.svg'}
						alt='loving eyes'
						width={'171px'}
						height='171px'
						className=''
					/>
				</div>
				<div className='mt-[36px]'>
					<div className='flex flex-col gap-y-[30px]'>
						{steps.map((item, idx) => (
							<div key={idx} className='flex'>
								<div className='relative mr-[20px] w-[64px] h-[64px]'>
									<Image
										src={item.icon}
										alt='menu icon'
										layout='fill'
										objectFit='contain'
									/>
								</div>
								<div>
									<h6 className='text-[#475467] font-semibold'>{item.title}</h6>
									<p className='text-[#475467] text-[16px] w-[85%]'>
										{item.content}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='relative w-[313px] h-[551px]'>
				<Image
					src={'/images/stepsIllustration.png'}
					alt='how it works'
					layout='fill'
					objectFit='contain'
				/>
			</div>
		</div>
	);
};

export default StepsForArtisians;
