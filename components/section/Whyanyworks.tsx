import Image from 'next/image';
import Button from '../UI/Button';
import Joinwaitlist from './Joinwaitlist';

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
			<Joinwaitlist />
		</div>
	);
};

export default Whyanyworks;
