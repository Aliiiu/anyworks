import Image from 'next/image';

const Contactus = () => {
	return (
		<div className='container relative'>
			<div className='absolute left-0 top-[100px]'>
				<Image
					src='/images/circle.png'
					alt='circle point'
					width={'110px'}
					height={'193px'}
				/>
			</div>
			<div className='absolute bottom-[300px] right-0'>
				<Image
					src='/images/circle2.png'
					alt='circle point'
					width={'110px'}
					height={'193px'}
				/>
			</div>
			<div className='mt-[100px] mb-[213px] px-[234px]'>
				<h2 className='mb-[12px]'>Contact Us</h2>
				<h2 className='mb-[24px] text-[#1D2939]'>We’d love to hear from you</h2>
				<p className='mb-[60px] text-center text-[16px] text-[#98A2B3]'>
					Our friendly team is always here to chat.
				</p>
				<div className='flex justify-between w-full'>
					<div className='text-center'>
						<Image
							src={'/images/mail-icon.png'}
							alt='mail icon'
							width={'48px'}
							height='48px'
						/>
						<h4 className='text-[#1D2939] font-semibold '>Email</h4>
						<p className='text-[#98A2B3] text-[16px]'>
							Our friendly team is here to help.
						</p>
						<a
							href='mailto:hissasd@asdsd.com'
							className='text-[#7E00C4] text-[16px]'
						>
							hissasd@asdsd.com
						</a>
					</div>
					<div className='text-center'>
						<Image
							src={'/images/mail-icon.png'}
							alt='mail icon'
							width={'48px'}
							height='48px'
						/>
						<h4 className='text-[#1D2939] font-semibold '>Email</h4>
						<p className='text-[#98A2B3] text-[16px]'>
							Our friendly team is here to help.
						</p>
						<p className='text-[#7E00C4] leading-[24px] text-[16px]'>
							100 Smith Street <br /> Collingwood VIC 3066 AU
						</p>
					</div>
					<div className='text-center'>
						<Image
							src={'/images/mail-icon.png'}
							alt='mail icon'
							width={'48px'}
							height='48px'
						/>
						<h4 className='text-[#1D2939] font-semibold '>Email</h4>
						<p className='text-[#98A2B3] text-[16px]'>
							Our friendly team is here to help.
						</p>
						<p className='text-[#7E00C4] text-[16px]'>+1 (555) 000-0000</p>
					</div>
				</div>
				<div className='text-center w-[520px] p-[20px] mt-[120px] mx-auto'>
					<h3 className='text-[24px] text-[#101828] font-semibold'>
						Get in touch
					</h3>
					<p className='text-[#475467] mt-[12px] mb-[36px]'>
						We’d love to hear from you. Please fill out this form.
					</p>
					<form>
						<div className='flex flex-col mb-[24px] items-start'>
							<label htmlFor='firstName'>Your name</label>
							<input
								type='text'
								placeholder='First Name'
								className='px-[12px] py-[16px] w-full placeholder-[16px] inputBorder'
							/>
						</div>
						<div className='flex flex-col mb-[24px] items-start'>
							<label htmlFor='email'>Email</label>
							<input
								type='mail'
								placeholder='you@mail.com'
								className='px-[12px] py-[16px] w-full placeholder-[16px] inputBorder'
							/>
						</div>
						<div className='flex flex-col mb-[24px] items-start'>
							<label htmlFor='message'>Message</label>
							<textarea
								name='message'
								rows={4}
								cols={50}
								className='w-full inputBorder'
							></textarea>
						</div>
						<button
							type='submit'
							className='bg-[#7E00C4] w-full py-[12px] text-white rounded-[8px]'
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contactus;
