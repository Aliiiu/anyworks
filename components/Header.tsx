import Image from 'next/image';
import Link from 'next/link';
import Button from './UI/Button';

const Header = () => {
	return (
		<div className='container'>
			<header className='px-[112px] py-[22px] flex items-center justify-between'>
				<div className='relative h-[52px] w-[159px]'>
					<Image
						src={'/images/anyworks-logo.png'}
						alt='anyworks logo'
						layout='fill'
					/>
				</div>
				<nav>
					<ul className='flex gap-x-[64px]'>
						<li className='navText'>
							<Link href={'/services'}>Services</Link>
						</li>
						<li className='navText'>
							<Link href={'/faqs'}>FAQs</Link>
						</li>
					</ul>
				</nav>
				<Button styles='bg-[#7E00C4]' content='join the waitlist' />
			</header>
		</div>
	);
};

export default Header;
