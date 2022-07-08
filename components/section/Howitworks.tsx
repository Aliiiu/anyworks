import Image from 'next/image';
import StepsForArtisians from '../StepsForArtisians';
import StepsForUsers from '../StepsForUsers';

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

const Howitworks = () => {
	return (
		<div>
			<h2 className='uppercase text-[#7E00C4] font-bold text-center text-[36px]'>
				How it works
			</h2>
			<div className=' container pl-[230px]'>
				<StepsForUsers />
			</div>
			<StepsForArtisians />
		</div>
	);
};

export default Howitworks;
