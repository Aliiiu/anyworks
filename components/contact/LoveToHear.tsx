import Image from 'next/image';

interface Contact {
	title: string;
	content: string;
	info: any;
	image: any;
}
const contacts: Contact[] = [
	{
		image: '/images/contact/email.svg',
		title: 'Email',
		content: 'Our friendly team is here to help.',
		info: <a href='mailto:support@anyworkx.com'>support@anyworkx.com</a>,

	},
	{
		image: '/images/contact/location.svg',
		title: 'Office',
		content: 'Come say hello at our office HQ.',
		info: '2nd floor, Awolowo House, Obafemi Awolowo way, Ikeja, P.O.Box 5013, Ikeja, Lagos State Nigeria.',
	},
	{
		image: '/images/contact/phone.svg',
		title: 'Phone',
		content: 'Mon-Fri from 8am to 5pm.',
		info: <a href='tel:+2348110658901'>+234 811 0658 901</a>,
	},
];

const LoveToHear = () => {
	return (
		<div className='container text-center lg:px-[112px] px-[33px]'>
			<h3 className='text-primary font-bold '>Contact us</h3>
			<h3 className='text-font-01 font-bold my-[10px]'>
				We are always ready to hear from you
			</h3>
			<p className='text-base text-font-02'>
				Our friendly team is here to start a conversation with you.
			</p>
			<div className='grid  gap-[62px] mt-[60px] mlg:grid-cols-3 grid-cols-1'>
				{contacts.map((contact, index) => (
					<div key={index} className='flex flex-col'>
						<div className='mr-[5px]'>
							<Image
								src={contact.image}
								alt='menu icon'
								width={48}
								height={48}
								objectFit='contain'
							/>
						</div>
						<div className='details'>
							<h6 className='text-font-01 font-semibold text-base mt-3'>
								{contact.title}
							</h6>
							<p className='text-font-02 text-sm mb-[10px] mt-[5px]'>
								{contact.content}
							</p>
							<p className='font-semibold text-primary text-sm '>
								{contact.info}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default LoveToHear;
