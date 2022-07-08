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

const StepsForUsers = () => {
	return (
		<div className='flex mt-[64px] justify-between w-full'>
			<div className='relative w-[313px] h-[551px]'>
				<Image
					src={'/images/stepsIllustration.png'}
					alt='how it works'
					layout='fill'
					objectFit='contain'
				/>
			</div>
			<div className='w-[63%] relative'>
				<h2 className='text-[48px] font-semibold capitalize leading-[60px]'>
					Easy steps For <br /> Anyworks{' '}
					<span className='text-[#7E00C4]'>Users</span>
				</h2>
				<div className='absolute top-3 right-[130px]'>
					<Image
						src={'/svgs/loving_eyes.svg'}
						alt='loving eyes'
						width={'171px'}
						height='171px'
						className=''
					/>
				</div>
				<div className='mt-[36px]'>
					<div className='flex flex-col gap-y-[30px]'>
						{steps.map((item, idx) => (
							<div key={idx} className='inline-flex'>
								<div className='relative mr-[20px] w-[64px] h-[64px]'>
									<Image
										src={item.icon}
										alt='menu icon'
										layout='fill'
										objectFit='contain'
									/>
								</div>
								<div className=''>
									<h6 className='text-[#475467] font-semibold'>{item.title}</h6>
									<p className='text-[#475467] text-[16px] w-[70%]'>
										{item.content}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default StepsForUsers;
