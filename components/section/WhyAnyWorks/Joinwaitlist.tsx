import Image from 'next/image';
import React, { ChangeEventHandler, useContext, useState } from 'react';
import WaitlistContext from '../../../context/waitlist-context';
import Button from '../../UI/Button';
import Modal from '../../UI/Modal';
import Link from 'next/link';

const Joinwaitlist = () => {
	const waitCtx = useContext(WaitlistContext);
	const [enteredInput, setEnteredInput] = useState('');
	const [showModal, setShowmodal] = useState(false);
	const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
		setEnteredInput(event.target.value);
		waitCtx.emailHandler(event.target.value);
	};
	// const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
	// 	event.preventDefault();
	// 	setShowmodal(true);
	// 	setEnteredInput('');
	// };
	return (
		<div>
			{showModal && (
				<Modal
					selector={'overlay-root'}
					Bselector={'backdrop-root'}
					onClick={() => setShowmodal(false)}
				/>
			)}
			<div id='waitlist' className='xl:scroll-mt-[40rem] scroll-mt-[10rem]'>
				<div className='xl:mt-[300px] mt-[100px] relative bg-[#7E00C4] flex rounded-[16px] xl:rounded-[48px] p-[20px] md:[40px] lg:pl-[60px] lg:pr-0 lg:py-[70px]'>
					<div className='xl:w-[65%] lg:w-[90%] w-full'>
						<h1 className='text-white mb-[15px] font-semibold capitalize text-[26px] lg:text-[40px] leading-[30px] lg:leading-[45px] lg:text-left '>
							Sending Verified Vendors At Your Convenience
						</h1>
						<p className='text-white mb-[23px] text-justify text-sm lg:text-left w-full lg:w-[95%] lg:mx-[inherit] mx-[auto]'>
							Locating proficient vendors around your vicinity and
							when can sometimes be extremely difficult. AnyworkX app helps you
							to reduce such difficulty by connecting you with vendors
							close to where the service is needed even when you know nobody in
							the neighborhood thereby saving you stress, time, and money.
						</p>
						<>
							<div className='flex items-center flex-wrap gap-3 justify-center lg:justify-start '>
								{/* <input
									type='mail'
									onChange={changeHandler}
									value={enteredInput}
									placeholder='Enter your mail'
									className='px-[16px] py-[12px] placeholder-[#98A2B3] text-sm md:text-[20px] w-full xl:w-[60%] md:min-h-[45px] min-h-[50px] h-[45px] max-w-[410px] bg-white border border-[#D0D5DD] rounded-[8px] placeholder:text-sm'
								/> */}
								
								<Link href='https://play.google.com/store/apps/details?id=com.anyworks.artisan'>
						<a target="_blank">
						<button
			className='btnStyle border-solid border-1  px-[10px] md:px-[20px] bg-[#210639] py-[12px] rounded-[8px] text-[10px] xs:text-[14px] md:text-[16px] lg:text-[18px]  border-primary text-white hover:bg-[white] hover:text-primary hover:border-white flex items-center justify-center'
		>
			Get Vendor App
		</button>
						</a>
					</Link>
								<div className="cursor-pointer  tooltip relative">
								<button
			className='btnStyle border-solid border-1  px-[10px] md:px-[20px] bg-[#210639] py-[12px] rounded-[8px] text-[10px] xs:text-[14px] md:text-[16px] lg:text-[18px]  border-primary text-white hover:bg-[white] hover:text-primary hover:border-white flex items-center justify-center'
		>
			Get Customer App
		</button>
                    <p className='tooltip-text absolute bottom-[-90%] left-[50%]'>Coming soon</p>
                </div>
								
							</div>
						</>
					</div>
					<div className='absolute right-[-10px] w-[150px] hidden xl:block  h-[150px] top-[-220px]'>
						<div className='absolute right-6'>
							<Image
								src={'/images/sketch.png'}
								alt='sketch'
								width={'77px'}
								height='151px'
								objectFit='contain'
							/>
						</div>
					</div>
					<div className='absolute flex-shrink-0 top-[-112px] hidden xl:block right-[70px]'>
						<Image
							src={'/images/waitlist-mockup2.png'}
							alt='phone demo'
							width={'273px'}
							height='505px'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Joinwaitlist;
