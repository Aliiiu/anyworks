interface reasonType {
	id: number;
	title: any;
	content: string;
}
export const reasons: reasonType[] = [
	{
		id: 1,
		title: <>Get connected to trusted artisans </>,
		content: `Anyworks connects you with trusted, competent, and reliable artisans to provide
						services for your domestic needs. You can easily find reliable artisans around your location with just a button.`,
	},
	{
		id: 2,
		title: <>Secured payment method</>,
		content: `Anyworks guarantees a safe and secured payment method. There is a wallet feature that carefully ensures
							seamless transactions between users and artisans.`,
	},
	{
		id: 3,
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
		id: 4,
		title: <>Transparent work-flow. </>,
		content: `Anyworks is equipped with a feature to help you stay connected to the needed artisans. 
							You can easily monitor the movement of your favorite artisan from the point of requesting
							a service to the point of delivering the service. We also give you all the support needed
						 to enjoy premium and transparent services.`,
	},
];
