import Image from 'next/image';
import Link from 'next/link';

interface stepsType {
	icon: string;
	title: string;
	content: string;
}

const steps: stepsType[] = [
	{
		icon: '/images/menu_1.png',
		title: 'Register',
		content: `Download the ANYWORKX app and register as a service provider. Submit all required information and documents for verification and background check.`,
	},
	{
		icon: '/images/menu_2.png',
		title: 'Set Availability',
		content: `Turn on your google location and set your availability to connect to customers around your vicinity. `,
	},
	{
		icon: '/images/menu_3.png',
		title: 'Negotiate Price',
		content: `Use the chat or call section on AnyworkX to connect with the customer and reach an agreement.`,
	},
	{
		icon: '/images/menu_4.png',
		title: 'Complete the Service',
		content: `Deliver the services required by the user.`,
	},
	{
		icon: '/images/menu_1.png',
		title: 'Receive Payment Through the Wallet',
		content: `Get paid via the wallet feature on AnyworkX.`,
	},
];

const StepsForArtisians = () => {
	return (
		<div className='container flex relative mt-[116px] md:py-[110px] py-[70px] px-[33px] xl:pl-[230px] xl:pr-[200px] justify-between w-full items-center'>
			<div className='absolute hidden xl:block top-[-100px] left-[580px]'>
				<Image
					src={'/images/PointingRight.png'}
					alt='pointing downward'
					width={'219px'}
					height='219px'
				/>
			</div>
		
			<div className='xl:w-[60%]'>
				<h3 className='font-semibold capitalize text-left leading-[45px] text-[#1D2939]'>
					Easy steps For <br /> AnyworkX{' '}
					<span className='text-[#7E00C4]'>vendors</span>
				</h3>
				<div className='absolute hidden xl:block top-50 left-10'>
					<Image
						src={'/svgs/partying.svg'}
						alt='loving eyes'
						width={'171px'}
						height='171px'
					/>
				</div>
				<div className='mt-[24px] md:mt-[36px]'>
					<div className='flex flex-col gap-y-[20px] md:gap-y-[30px]'>
						{steps.map((item, idx) => (
							<div key={idx} className='flex'>
								<div className='relative flex-shrink-0 mr-[15px] md:mr-[20px] w-[64px] h-[64px]'>
									<Image
										src={item.icon}
										alt='menu icon'
										layout='fill'
										objectFit='contain'
									/>
								</div>
								<div>
									<h6 className='text-[#475467] text-[16px] md:text-[20px] font-bold'>
										{item.title}
									</h6>
									<p className='text-[#475467] text-[14px] md:text-[16px] lg:w-[85%]'>
										{item.content}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='block lg:hidden mt-[20px]'>
				<Link  href='https://play.google.com/store/apps/details?id=com.anyworks.artisan'>
						<a target="_blank">
						<div className='pr-8 cursor-pointer'>
			<Image
					src={'/images/google-play-badge.png'}
					alt='get'
					width={170}
					height={60}
				/>
			</div>
						</a>
					</Link>
				</div>
			</div>
			<div className=" hidden lg:block ">
			<div className="flex flex-col items-center">
			<div className='relative w-[313px] h-[551px]'>
				<Image
					src={'/images/mockup2.png'}
					alt='how it works'
					layout='fill'
					objectFit='contain'
				/>
			</div>
			
			<Link  href='https://play.google.com/store/apps/details?id=com.anyworks.artisan'>
						<a target="_blank">
						<div className='pr-8 cursor-pointer'>
			<Image
					src={'/images/google-play-badge.png'}
					alt='get'
					width={170}
					height={60}
				/>
			</div>
						</a>
					</Link>
			</div>
			</div>
		</div>
	);
};

export default StepsForArtisians;
