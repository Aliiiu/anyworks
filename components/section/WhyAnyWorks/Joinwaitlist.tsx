import Image from 'next/image';
import React, { ChangeEventHandler, useContext, useState } from 'react';
import WaitlistContext from '../../../context/waitlist-context';
import Button from '../../UI/Button';
import Modal from '../../UI/Modal';

const Joinwaitlist = () => {
	const waitCtx = useContext(WaitlistContext);
	const [enteredInput, setEnteredInput] = useState('');
	const [showModal, setShowmodal] = useState(false);
	const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
		setEnteredInput(event.target.value);
		waitCtx.emailHandler(event.target.value);
	};
	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setShowmodal(true);
		setEnteredInput('');
	};
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
				<div className='xl:mt-[300px] mt-[100px] relative bg-[#7E00C4] flex rounded-[16px] xl:rounded-[48px] p-[30px] md:[40px] lg:pl-[60px] lg:pr-0 lg:py-[70px]'>
					<div className='xl:w-[65%] lg:w-[90%] w-full'>
						<h1 className='text-white mb-[15px] capitalize text-[28px] lg:text-[40px] leading-[30px] lg:leading-[45px] lg:text-left '>
							Sending Verified Artisans to Your Convenience
						</h1>
						<p className='text-white mb-[23px] text-sm lg:text-left w-full lg:w-[95%] lg:mx-[inherit] mx-[auto]'>
							Locating trusted and proficient artisans around your vicinity can
							be extremely difficult to do on your own. Anyworks helps you to
							eliminate such tension by connecting you with a proficient artisan
							close by saving you stress, time, and money.
						</p>
						<form onSubmit={submitHandler}>
							<div className='flex flex-col items-center gap-x-[20px] md:flex-row justify-center lg:justify-start '>
								<input
									type='mail'
									onChange={changeHandler}
									value={enteredInput}
									placeholder='Enter your mail'
									className='px-[16px] py-[12px] placeholder-[#98A2B3] text-sm md:text-[20px] w-full xl:w-[60%] md:min-h-[45px] min-h-[50px] h-[45px] max-w-[410px] bg-white border border-[#D0D5DD] rounded-[8px] placeholder:text-sm'
								/>
								<Button
									styles='bg-[#210639] mt-[24px] md:w-[auto] w-full max-w-[410px] md:min-h-[45px] min-h-[50px] h-[45px] xl:w-[auto]  md:mt-[0px]'
									content='Join the Waitlist'
								/>
							</div>
						</form>
					</div>
					<div className='absolute right-[-10px] w-[150px] hidden xl:block  h-[150px] top-[-240px]'>
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
					<div className='absolute flex-shrink-0 top-[-132px] hidden xl:block right-[70px]'>
						<Image
							src={'/images/phone-demo.png'}
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
