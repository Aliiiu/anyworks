import Image from 'next/image';
import Button from '../UI/Button';
import Joinwaitlist from './Joinwaitlist';

interface reasonType {
	title: any;
	content: string;
}
const reasons: reasonType[] = [
	{
		title: <>Get connected to trusted artisans </>,
		content: `Anyworks connects you with trusted, competent, and reliable artisans to provide
						services for your domestic needs. You can easily find reliable artisans around your location with just a button.`,
	},
	{
		title: <>Secured payment method</>,
		content: `Anyworks guarantees a safe and secured payment method. There is a wallet feature that carefully ensures
							seamless transactions between users and artisans.`,
	},
	{
		title: (
			<>
				{' '}
				<p className='text-[#210639]'>💯 Reliable artisans</p>
			</>
		),
		content:
			'We have meticulously verified capable artisans and they have been orientated to deliver top-notch services.',
	},
	{
		title: <>Transparent work-flow. </>,
		content: `Anyworks is equipped with a feature to help you stay connected to the needed artisans. 
							You can easily monitor the movement of your favorite artisan from the point of requesting
							a service to the point of delivering the service. We also give you all the support needed
						 to enjoy premium and transparent services.`,
	},
];

const Whyanyworks = () => {
	return (
		<div>
			<h3 className='text-[#7E00C4] font-bold text-center'>WHY ANYWORKS</h3>
			<div className='lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-[62px] lg:mt-[60px] mt-[38px]'>
				{reasons.map((item, idx) => (
					<div key={idx} className='flex mb-[20px] md:mb-[30px]'>
						<div className='mr-[5px] relative w-[32px] h-[32px] flex-shrink-0'>
							<Image
								src={'/images/star-icon.png'}
								alt='menu icon'
								layout='fill'
								objectFit='contain'
							/>
						</div>
						<div className=''>
							<h6 className='text-[#210639] text-[20px] font-semibold'>
								{item.title}
							</h6>
							<p className='text-[#475467] text-[16px] w-[100%]'>
								{item.content}
							</p>
						</div>
					</div>
				))}
			</div>
			<Joinwaitlist />
		</div>
	);
};

export default Whyanyworks;
