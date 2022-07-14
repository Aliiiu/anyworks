import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
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
							width={'43px'}
							height='43px'
							className='cursor-pointer'
						/>
					</div>
					<h3 className='text-[#333333] text-left font-semibold'>
						Be the first to get notified
					</h3>
					<p className='text-[14px] text-[#1D2939]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit at
						donec mi diam leo aliquam non sagittis.
					</p>

					<form action=''>
						<div className='mb-[20px]'>
							<label htmlFor='firstname'>Your name</label>
							<input
								type='text'
								placeholder='first name'
								className='w-full border-[#D0D5DD] placeholder-[#98A2B3] text-[16px] border py-[12px] bg-white modalInput px-[16px]'
							/>
						</div>
						<div>
							<label htmlFor='firstname'>Email</label>
							<input
								type='mail'
								placeholder='you@mail.com'
								className='w-full border-[#D0D5DD] placeholder-[#98A2B3] text-[16px] border py-[12px] bg-white modalInput px-[16px]'
							/>
						</div>
						<Button
							content={'join the waitlist'}
							styles='bg-[#7E00C4] mt-[24px] w-full'
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
