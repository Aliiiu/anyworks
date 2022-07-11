import Image from 'next/image';
import Link from 'next/link';
import Button from './UI/Button';

const Header = () => {
	return (
		<div className='container'>
			<header className='lg:px-[112px] px-[36px] py-[22px] lg:py-[22px] flex items-center justify-between'>
				<Link href='/' passHref>
					<div className='relative h-[52px] w-[159px]'>
						<Image
							src={'/images/anyworks-logo.png'}
							alt='anyworks logo'
							layout='fill'
						/>
					</div>
				</Link>
				<nav className='hidden lg:block'>
					<ul className='flex gap-x-[64px]'>
						<li className='navText'>
							<Link href={'/services'}>Services</Link>
						</li>
						<li className='navText'>
							<Link href={'/faqs'}>FAQs</Link>
						</li>
					</ul>
				</nav>
				<Button
					styles='bg-[#7E00C4] hidden md:block'
					content='join the waitlist'
				/>
				<Image
					src={'/images/menu.png'}
					alt=''
					width={'57px'}
					height='47px'
					objectFit='contain'
				/>
			</header>
		</div>
	);
};

export default Header;
