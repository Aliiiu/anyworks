import Image from 'next/image';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import WaitlistContext from '../../context/waitlist-context';
import Button from './Button';

interface Props {
	onClick: any;
}
interface MProps {
	onClick: any;
	selector: any;
	Bselector: any;
}

const BackdropModal = ({ onClick }: Props) => {
	return <div onClick={onClick} className='backdrop cursor-pointer'></div>;
};

const OverLayModal = ({ onClick }: Props) => {
	const waitCtx = useContext(WaitlistContext);
	const [enteredEmail, setEnterEmail] = useState('');
	const [enteredName, setEnteredName] = useState('');

	const emailChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
		event
	) => {
		setEnterEmail(event.target.value);
	};
	const nameChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
		event
	) => {
		setEnteredName(event.target.value);
	};
	return (
		<Fragment>
			<div>
				{/* <div className='backdrop' onClick={onClick} /> */}
				<div className=' flex modal modalCard flex-col px-[30px] py-[60px] md:px-[40px] md:py-[60px] gap-y-[10px] justify-center'>
					<div
						onClick={onClick}
						className='absolute top-[-15px] z-[999] right-[-15px]'
					>
						<Image
							src={'/svgs/closeModal.svg'}
							alt=''
							width={30}
							height={30}
							className='cursor-pointer'
						/>
					</div>
					<h3 className='text-[#333333] text-left font-semibold text-xl'>
						Be the first to get notified
					</h3>
					<p className='text-[14px] text-[#1D2939]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit at
						donec mi diam leo aliquam non sagittis.
					</p>

					<form action=''>
						<div className='flex flex-col mb-[14px] items-start'>
							<label className='mb-[10px] text-sm' htmlFor='firstName'>
								Your name
							</label>
							<input
								type='text'
								onChange={nameChangeHandler}
								value={enteredName}
								placeholder='First Name'
								className='px-[12px] placeholder:text-xs text-sm py-[8px] w-full inputBorder'
							/>
						</div>
						<div className='flex flex-col mb-[14px] items-start'>
							<label className='mb-[10px] text-sm' htmlFor='email'>
								Email
							</label>
							<input
								type='mail'
								onChange={emailChangeHandler}
								value={waitCtx.enteredEmail || enteredEmail}
								placeholder='you@mail.com'
								className='px-[12px] placeholder:text-xs text-sm py-[8px] w-full inputBorder'
							/>
						</div>
						<Button
							content={'Join the Waitlist'}
							styles='bg-primary w-full mt-[15px]'
						/>
					</form>
				</div>
			</div>
		</Fragment>
	);
};

const Modal = ({ onClick, selector, Bselector }: MProps) => {
	const [mounted, setMounted] = useState<boolean>(false);
	useEffect(() => {
		setMounted(true);
		return () => setMounted(false);
	}, [selector]);
	return (
		<Fragment>
			{mounted
				? createPortal(
						<BackdropModal onClick={onClick} />,
						document.getElementById(Bselector) as HTMLElement
				  )
				: null}
			{mounted
				? createPortal(
						<OverLayModal onClick={onClick} />,
						document.getElementById(selector) as HTMLElement
				  )
				: null}
		</Fragment>
	);
};

export default Modal;
