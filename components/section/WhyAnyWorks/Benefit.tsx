import Image from 'next/image';
import { FC } from 'react';

interface reasonType {
	title: any;
	content: string;
}

const Benefit: FC<{
	reasons: reasonType[];
	classes: string;
	divClass?: string;
}> = ({ reasons, classes, divClass }) => {
	return (
		<div className={divClass}>
			<h3 className='text-[#7E00C4] text-[28px] lg:text-[36px] font-bold text-center'>
				WHY ANYWORKX ?
			</h3>
			<div className={classes}>
				{reasons.map((item, idx) => (
					<div key={idx} className='flex mb-[20px] md:mb-[30px]'>
						<div className='mr-[5px] relative w-[28px] h-[28px] flex-shrink-0'>
							<Image
								src={'/images/star-icon.png'}
								alt='menu icon'
								layout='fill'
								objectFit='contain'
							/>
						</div>
						<div className=''>
							<h6 className='text-[#210639] text-[18px] md:text-[20px] font-bold'>
								{item.title}
							</h6>
							<p className='text-[#475467] mt-3 text-[14px] text-justify md:text-[16px] w-[100%]'>
								{item.content}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Benefit;
