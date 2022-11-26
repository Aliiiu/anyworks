import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/Header.module.css';
import clsx from 'clsx';

const Header: FC<{}> = () => {
	const [headerStyle, setHeaderStyle] = useState(false);
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () =>
				setHeaderStyle(window.pageYOffset > 50)
			);
		}
	}, []);

	//close menubar on route change
	useEffect(() => {
		const closeMenu = () => isOpen && setIsOpen(false);
		router.events.on('routeChangeStart', closeMenu);
		return () => {
			router.events.off('routeChangeStart', closeMenu);
		};
	}, [isOpen, router]);

	const handleMenuBar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div
				className={clsx(
					'z-10 py-[15px] top-0  fixed w-[100%]',
					{
						'bg-white shadow-sm': headerStyle,
					},
					{ 'bg-white': isOpen }
				)}
			>
				<div className='container lg:px-[112px] px-[33px]'>
					<header className='flex items-center justify-between'>
						<Link href='/'>
							<a className='flex'>
								<Image
									className='cursor-pointer'
									src={'/images/anyworkx-logo.png'}
									alt='anyworkx logo'
									height={45}
									width={137}
								/>
							</a>
						</Link>
						<nav className='hidden mlg:block'>
							<ul className='flex gap-x-[35px]'>
								<li
									className={clsx('nav-link', {
										active: router.pathname == '/services',
									})}
								>
									<Link href='/services'>Services</Link>
								</li>
								<li
									className={clsx('nav-link', {
										active: router.pathname == '/faq',
									})}
								>
									<Link href='/faq'>FAQs</Link>
								</li>
							</ul>
						</nav>
						<Link href='https://play.google.com/store/apps/details?id=com.anyworks.artisan'>
						<a target="_blank">
						<Button
							styles='bg-primary mlg:block hidden'
							content='Get Vendor App'
					/>
						</a>
					</Link>
						{isOpen ? (
							<div
								className='cursor-pointer flex mlg:hidden w-[20px]'
								onClick={handleMenuBar}
							>
								<Image
									style={{
										filter:
											'brightness(0) saturate(100%) invert(13%) sepia(100%) saturate(4956%) hue-rotate(279deg) brightness(76%) contrast(119%)',
									}}
									src={'/svgs/close.svg'}
									alt='menu'
									height={20}
									width={20}
								/>
							</div>
						) : (
							<div
								className='cursor-pointer flex mlg:hidden w-[30px] scale-150'
								onClick={handleMenuBar}
							>
								<Image
									src={'/svgs/menu.svg'}
									alt='menu'
									height={45}
									width={45}
								/>
							</div>
						)}
					</header>
				</div>

				{isOpen && (
					<div
						className={clsx(
							'fixed top-[75px] h-screen bg-white py-[60px] px-[33px] sm:px-[30px] shadow-sm',
							styles.menuBarIsOpen,
							{
								[styles.menuBar]: isOpen,
							}
						)}
					>
						<ul className='flex flex-col gap-y-[25px]'>
							<li
								className={clsx('text-font-02 text-[24px] font-medium hover:text-font-01', {
									'text-primary': router.pathname == '/about',
								})}
							>
								<Link href='/services'>
									<a className='flex'>Services</a>
								</Link>
							</li>
							<li
								className={clsx('text-font-02 text-[24px] font-medium hover:text-font-01', {
									'text-primary': router.pathname == '/faq',
								})}
							>
								<Link href='/faq'>
									<a className='flex'>FAQs</a>
								</Link>
							</li>
							<li
								className={clsx('text-font-02 text-[24px] font-medium hover:text-font-01', {
									'text-primary': router.pathname == '/about',
								})}
							>
								<Link href='/faq'>
									<a className='flex'>About</a>
								</Link>
							</li>
							<li
								className={clsx('text-font-02 text-[24px] font-medium hover:text-font-01', {
									'text-primary': router.pathname == '/contact-us',
								})}
							>
								<Link href='/faq'>
									<a className='flex'>Contact</a>
								</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</>
	);
};

export default Header;
