import Image from 'next/image';
import Button from '../../UI/Button';
import Benefit from './Benefit';
import Joinwaitlist from './Joinwaitlist';
import { reasons } from './benefit-data';

const Whyanyworks = () => {
	return (
		<div>
			<Benefit
				reasons={reasons}
				classes='lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-[62px] lg:mt-[60px] mt-[38px]'
			/>
			<Joinwaitlist />
		</div>
	);
};

export default Whyanyworks;
