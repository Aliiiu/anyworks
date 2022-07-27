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
		content: `Sign up by registering all required personal details.`,
	},
	{
		icon: '/images/menu_2.png',
		title: 'Book a Service',
		content: `Request for needed service and get connected immediately with a qualified artisan close to your location.`,
	},
	{
		icon: '/images/menu_3.png',
		title: 'Negotiate price with artisans',
		content: `Connect with the artisan using the chat or call feature on the app to discuss further the work and strike a bargain.`,
	},
	{
		icon: '/images/menu_4.png',
		title: 'Make payment',
		content: `Once the artisan gets the job done, make payment through the wallet shown on your user page.`,
	},
	{
		icon: '/images/menu_2.png',
		title: 'Rate services',
		content: `Give a review of how much you loved the service offered by the artisan. This can be seen by other users of Anyworks.`,
	},
];

const StepsForUsers = () => {
	return (
		<div className='flex mt-[27px] lg:mt-[64px] justify-between w-full'>
			<div className='relative hidden lg:block w-[313px] h-[551px]'>
				<Image
					src={'/images/stepsIllustration.png'}
					alt='how it works'
					layout='fill'
					objectFit='contain'
				/>
			</div>
			<div className='md:w-[63%] relative'>
				<h3 className='font-semibold text-[#1D2939] lg:leading-[45px] leading-[38px] text-left capitalize'>
					Easy steps For <br /> Anyworks{' '}
					<span className='text-[#7E00C4]'>Users</span>
				</h3>
				<div className='absolute hidden xl:block top-[-10px] right-[130px]'>
					<Image
						src={'/svgs/loving_eyes.svg'}
						alt='loving eyes'
						width={'171px'}
						height='171px'
						className=''
					/>
				</div>
				<div className='mt-[28px] xl:mt-[36px]'>
					<div className='flex flex-col gap-y-[20px] md:gap-y-[30px]'>
						{steps.map((item, idx) => (
							<div key={idx} className='inline-flex'>
								<div className='relative mr-[15px] md:mr-[20px] flex-shrink-0 w-[64px] h-[64px]'>
									<Image
										src={item.icon}
										alt='menu icon'
										layout='fill'
										objectFit='contain'
									/>
								</div>
								<div className=''>
									<h6 className='text-[#475467] text-[16px] md:text-[20px] capitalize font-semibold'>
										{item.title}
									</h6>
									<p className='text-[#475467] text-[14px] md:text-[16px] xl:w-[80%]'>
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
